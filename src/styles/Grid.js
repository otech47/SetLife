import styled from 'styled-components'
import { isNot } from 'styled-is'
import PropTypes from 'prop-types'
import media from './media'
import { gridMargin, gutterWidth, breakpoints } from './theme'

const Grid = styled.div`
    margin-left: auto;
    margin-right: auto;
    
    ${media.md`
        padding: ${p => gridMargin / 2}rem;
        > * > * {
            padding: ${p => gutterWidth / 2}rem;
        }
    `}

    ${isNot('fluid')`
        ${p => Object.keys(breakpoints).map(size => {
            return media[size]`
                width: ${gridWidth[size]}%;
            `
        })}
    `}
`

Grid.propTypes = {
    // set true to make grid width 100%
    fluid: PropTypes.bool
}

export default Grid