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
    margin: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    marginHorizontal: PropTypes.string,
    marginVertical: PropTypes.string,
    padding: PropTypes.string,
    paddingTop: PropTypes.string,
    paddingBottom: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
    paddingHorizontal: PropTypes.string,
    paddingVertical: PropTypes.string
}