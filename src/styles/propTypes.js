import PropTypes from 'prop-types'
import * as theme from './theme'

export const colors = {
    color: PropTypes.oneOf(Object.keys(theme.colors)),
    backgroundColor: PropTypes.oneOf(Object.keys(theme.colors)),
}

export const shadows = {
    depth: PropTypes.oneOf([1,2,3,4,5])
}

export const spacing = {
    m: PropTypes.string,
    mT: PropTypes.string,
    mB: PropTypes.string,
    mL: PropTypes.string,
    mR: PropTypes.string,
    mX: PropTypes.string,
    mY: PropTypes.string,
    p: PropTypes.string,
    pT: PropTypes.string,
    pB: PropTypes.string,
    pL: PropTypes.string,
    pR: PropTypes.string,
    pX: PropTypes.string,
    pY: PropTypes.string
}