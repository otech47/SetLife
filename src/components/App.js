import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles'

import routes from '../routes';

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Fragment>
                    {routes}
                </Fragment>
            </ThemeProvider>
        )
    }
}