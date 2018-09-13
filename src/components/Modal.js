import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import is, { css } from 'styled-is'
import { transitions } from 'polished'
import Transition from 'react-transition-group/Transition'
import { Grid, utils } from 'styles'

const Backdrop = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: ${p => p.theme.colors.overlay};
`

const Modal = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: ${p => p.theme.zIndexModal};
    visibility: hidden;
    overflow: hidden;
    outline: 0;
    display: flex;
    align-items: center;

    ${is('opened')`
        visibility: visible;
        overflow-x: hidden;
        overflow-y: auto;
    `}

    opacity: ${p => p.theme.transitionOpacity[p.state]};
    ${p => transitions(
        'opacity',
        `${utils.ms(p.theme.durationShort)} ease-in-out`
    )}
`

const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: 90%;
    margin: auto;
    pointer-events: auto;
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.borderRadius};
    box-shadow: ${p => p.theme.shadows[5]};
    outline: 0;
`

class ModalComponent extends Component {
    static propTypes = {
        opened: PropTypes.bool,
        onClose: PropTypes.func
    }
    constructor(props) {
        super(props)
        if (!this.container && typeof document !== 'undefined') {
            this.container = document.createElement('div')
            document.body.appendChild(this.container)
        }
    }
    componentDidMount() {
        this.attachEventHandlers()
    }
    componentDidUpdate() {
        this.attachEventHandlers()
    }
    attachEventHandlers() {
        if (this.props.opened) {
            // prevent page from scrolling when modal is opened
            document.body.style.overflow = 'hidden'
            document.addEventListener('keyup', this.onKeyUp)
        } else {
            document.body.style.overflow = null
            document.removeEventListener('keyup', this.onKeyUp)
        }
    }
    onKeyUp = ({ keyCode }) => {
        if (keyCode === 27) {
            this.this.props.onClose()
        }
    }
    render() {
        const {
            onClose,
            opened,
            children,
            theme
        } = this.props
        console.log(theme.durationShort)

        if (!this.container) return null

        return createPortal(
            <Transition
                timeout={theme.durationShort}
                in={opened}
            >
                {state => (
                    <Modal
                        opened={opened || state === 'exiting'}
                        state={state}
                    >
                        <Backdrop onClick={onClose} />
                        {/* <ModalDialog> */}
                            <ModalContent>
                                {children}
                            </ModalContent>
                        {/* </ModalDialog> */}
                    </Modal>
                )}
            </Transition>,
            this.container
        )
    }
}

export default withTheme(ModalComponent)