import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

const isProduction = process.env.NODE_ENV === 'production'

// global stylesheets
import 'public/css/normalize.less'
import 'public/css/fonts.less'

// Main App component
import App from 'components/App'

// redux setup
import configureStore from './store'
const store = configureStore()

// Hot reloading setup for development mode only
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <Route path='/' component={Component} />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app-mount-point')
    )
}

if (isProduction) {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Route path='/' component={App} />
            </Router>
        </Provider>,
        document.getElementById('app-mount-point')
    )
} else {
    render(App)
}

if (module.hot) {
    module.hot.accept('components/App', () => {
        const NextApp = require('components/App').default
        render(NextApp)
    })
}