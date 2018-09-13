import { css } from 'styled-components'
import is from 'styled-is'
import { darken, transitions } from 'polished'
import { ms } from './utils'

export const clickable = css`
    ${p => transitions(
        'background-color',
        `${ms(p.theme.durationShort)} ease-in-out`
    )}
    &:hover {
        background-color: ${p => darken(0.1, p.theme.colors[p.backgroundColor])};
    }
    &:active {
        background-color: ${p => darken(0.2, p.theme.colors[p.backgroundColor])};
    }
`

export const link = css`
    ${p => transitions(
        'color',
        `${ms(p.theme.durationShort)} ease-in-out`
    )}
    &:hover {
        color: ${p => darken(0.1, p.theme.colors[p.color])};
    }
    &:active {
        color: ${p => darken(0.2, p.theme.colors[p.color])};
    }
`

export const spacing = css`
    ${is('margin')`
        margin: ${p => p.margin};
    `}

    ${is('marginHorizontal')`
        margin-left: ${p => p.marginHorizontal};
        margin-right: ${p => p.marginHorizontal};
    `}

    ${is('marginVertical')`
        margin-top: ${p => p.marginVertical};
        margin-bottom: ${p => p.marginVertical};
    `}

    ${is('marginTop')`
        margin-top: ${p => p.marginTop};
    `}

    ${is('marginBottom')`
        margin-bottom: ${p => p.marginBottom};
    `}

    ${is('marginLeft')`
        margin-left: ${p => p.marginLeft};
    `}

    ${is('marginRight')`
        margin-right: ${p => p.marginRight};
    `}

    ${is('padding')`
        padding: ${p => p.padding};
    `}

    ${is('paddingHorizontal')`
        padding-left: ${p => p.paddingHorizontal};
        padding-right: ${p => p.paddingHorizontal};
    `}

    ${is('paddingVertical')`
        padding-top: ${p => p.paddingVertical};
        padding-bottom: ${p => p.paddingVertical};
    `}

    ${is('paddingTop')`
        padding-top: ${p => p.paddingTop};
    `}

    ${is('paddingBottom')`
        padding-bottom: ${p => p.paddingBottom};
    `}

    ${is('paddingLeft')`
        padding-left: ${p => p.paddingLeft};
    `}

    ${is('paddingRight')`
        padding-right: ${p => p.paddingRight};
    `}
`