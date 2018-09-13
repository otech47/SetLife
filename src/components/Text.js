import React from 'react'
import styled from 'styled-components'
import is, { isNot } from 'styled-is'
import PropTypes from 'prop-types'
import { media, propTypes, theme, mixins } from 'styles'

const Base = styled.p`
    font-family: 'Inter UI';
    line-height: 1.6;
    color: ${p => theme.colors[p.color] || theme.colors.darkGrey};
    ${mixins.spacing};

    /** Font size for non-variant elements */
    ${isNot('variant')`
        font-size: ${p => p.size / theme.baseRem.mobile}rem;
        font-weight: ${p => theme.fontWeights[p.weight]};
        ${media.md`
            font-size: ${p => p.size / theme.baseRem.desktop}rem;
        `}
    `}

    /** Variant styling */
    ${is('variant')`
        font-size: ${p => theme.fonts[p.variant].size};
        font-weight: ${p => theme.fonts[p.variant].weight};
    `}
`

const Text = ({
    variant,
    size = 16,
    ...props
}) => (
    <Base
        as={variant && theme.fonts[variant].tag}
        variant={variant}
        size={size}
        {...props}
    />
)

Text.propTypes = {
    variant: PropTypes.oneOf(Object.keys(theme.fonts)),
    color: PropTypes.oneOf(Object.keys(theme.colors)),
    weight: PropTypes.oneOf(Object.keys(theme.fontWeights)),
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
    ...propTypes.spacing
}

export default Text