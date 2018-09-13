import { createGlobalStyle } from 'styled-components'
import media from './media'
import theme from './theme'

// FIX hot reloading doesn't work with this

const GlobalStyle = createGlobalStyle`
    /* reset */
    body {
        margin: 0;
        padding: 0;
        cursor: default;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    a {
        color:inherit;
        background-color: transparent;
        text-decoration:none;
        cursor: pointer;
    }

    a:hover, a:active {
        color: inherit;
        outline: 0;
    }

    img {
        border: 0;
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        color: inherit;
        font-family: inherit;
        font-size: 100%;
        margin: 0;
    }

    button,
    html input[type='button'],
    input[type='reset'],
    input[type='submit'] {
        -webkit-appearance: button;
        cursor: pointer;
    }

    button[disabled],
    html input[disabled] {
        cursor: default;
    }

    button::-moz-focus-inner, 
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    input, input:focus, textarea {
        border: none;
        background: none;
        outline: 0;
    }

    p, h1, h2, h3, h4, h5, h6 {
        -webkit-margin-before: 0px;
        -webkit-margin-after: 0px;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
    }

    /* fonts */
    @font-face {
        font-family: 'Inter UI';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/Inter-UI-Regular.woff2') format('woff2'),
            url('/fonts/Inter-UI-Regular.woff') format('woff'),
            url('/fonts/Inter-UI-Regular.ttf') format('truetype')
    }

    @font-face {
        font-family: 'Inter UI';
        font-style: italic;
        font-weight: 400;
        src: url('/fonts/Inter-UI-Italic.woff2') format('woff2'),
            url('/fonts/Inter-UI-Italic.woff') format('woff'),
            url('/fonts/Inter-UI-Italic.ttf') format('truetype')
    }

    @font-face {
        font-family: 'Inter UI';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/Inter-UI-Bold.woff2') format('woff2'),
            url('/fonts/Inter-UI-Bold.woff') format('woff'),
            url('/fonts/Inter-UI-Bold.ttf') format('truetype')
    }

    /* responsive font sizing */
    html {
        font-family: Inter UI;
        font-size: ${theme.baseRem.mobile}px;

        ${media.md`
            font-size: ${theme.baseRem.desktop}px;
        `}
    }
`

export default GlobalStyle