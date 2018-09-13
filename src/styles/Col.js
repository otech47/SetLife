import styled from 'styled-components'
import is from 'styled-is'
import PropTypes from 'prop-types'
import media from './media'
import { breakpoints, gridSize } from './theme'

const sizes = Object.keys(breakpoints)

const Col = styled.div`
    display: flex;
    flex-basis: auto;
    flex-direction: column;

    ${is('order')`
        order: ${p => p.order};
    `}

    ${is('grow')`
        flex-grow: ${p => p.grow};
    `}
    
    ${is('shrink')`
        flex-shrink: ${p => p.shrink};
    `}

    ${is('basis')`
        flex-basis: ${p => p.basis};
    `}

    /**
     * Responsive grid sizing
     * Usage <Col sm={12} md={6} lg={4} xl={12} />
     */

    ${p => Object.keys(p)
        .filter(k => sizes.indexOf(k) !== -1)
        .sort((a,b) => sizes.indexOf(a) - sizes.indexOf(b))
        .map(size => {
            return media[size]`
                ${Number.isInteger(p[size]) ? `
                    flex-basis: ${100 / gridSize * p[size]}%;
                    max-width: ${100 / gridSize * p[size]}%;
                ` : `
                    flex-grow: 1;
                    flex-basis: 0;
                    max-width: 100%;
                `}
            `
        })
    }
`

Col.propTypes = {
    order: PropTypes.number,
    grow: PropTypes.number,
    shrink: PropTypes.number,
    basis: PropTypes.number,
}

export default Col