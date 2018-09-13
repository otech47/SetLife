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
    ${is('m')`
        margin: ${p => p.m};
    `}

    ${is('mX')`
        margin-left: ${p => p.mX};
        margin-right: ${p => p.mX};
    `}

    ${is('mY')`
        margin-top: ${p => p.mY};
        margin-bottom: ${p => p.mY};
    `}

    ${is('mT')`
        margin-top: ${p => p.mT};
    `}

    ${is('mB')`
        margin-bottom: ${p => p.mB};
    `}

    ${is('mL')`
        margin-left: ${p => p.mL};
    `}

    ${is('mR')`
        margin-right: ${p => p.mR};
    `}

    ${is('p')`
        padding: ${p => p.p};
    `}

    ${is('pX')`
        padding-left: ${p => p.pX};
        padding-right: ${p => p.pX};
    `}

    ${is('pY')`
        padding-top: ${p => p.pY};
        padding-bottom: ${p => p.pY};
    `}

    ${is('pT')`
        padding-top: ${p => p.pT};
    `}

    ${is('pB')`
        padding-bottom: ${p => p.pB};
    `}

    ${is('pL')`
        padding-left: ${p => p.pL};
    `}

    ${is('pR')`
        padding-right: ${p => p.pR};
    `}
`