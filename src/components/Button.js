import PropTypes from 'prop-types'
import styled from 'styled-components'
import is, { isNot } from 'styled-is'
import { border } from 'polished'
import { propTypes, mixins } from 'styles'

const Button = styled.button`
    ${mixins.spacing};
    font-family: 'Inter UI';
    font-size: 2rem;
    height: 5rem;
    padding: ${p => p.padding ? p.padding : '0 2rem'};
    border-radius: ${p => p.theme.borderRadius};
    color: ${p => p.theme.colors[p.color]};
    background-color: ${p => p.theme.colors[p.backgroundColor]};
    
    ${is('transparent')`
        background-color: transparent;
        color: ${p => p.theme.colors[p.color]};
        ${p => border('1px', 'solid', p.theme.colors[p.color])};
        ${mixins.link};
    `}

    ${isNot('transparent', 'disabled')`
        ${mixins.clickable};
        box-shadow: ${p => p.theme.shadows[1]};
    `}

    ${is('disabled')`
        background-color: ${p => p.theme.colors.lightGrey};
        color: ${p => p.theme.colors.darkGrey};
    `}
`

Button.propTypes = {
    ...propTypes.spacing,
    ...propTypes.colors,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    transparent: PropTypes.bool
}

Button.defaultProps = {
    backgroundColor: 'blue',
    color: 'white'
}

export default Button