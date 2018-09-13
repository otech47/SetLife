import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles'
import Input from './Input'

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Fragment>
                    <Input />
                </Fragment>
            </ThemeProvider>
        )
    }
}