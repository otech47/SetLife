// Breakpoints for media queries

export const breakpoints = {
    sm: 320,
    md: 768,
    lg: 960,
    xl: 1600
}

export const baseRem = {
    mobile: 10,
    desktop: 8
}

// Borders

export const borderRadius = '3px'
export const borderWidth = '1px'

// Box shadows

export const shadows = {
    1: '0px 1.5px 8px rgba(0,0,0,0.07)',
    2: '0px 2px 11px rgba(0,0,0,0.10)',
    3: '0px 3px 16px rgba(0,0,0,0.12)',
    4: '0px 4px 21px rgba(0,0,0,0.14)',
    5: '0px 5px 25px rgba(0,0,0,0.14)',
}

// Colors

export const colors = {
    white: '#ffffff',
    background: '#F7F7F9',
    border: '#EEEFF2',
    lightGrey: '#CFD5DE',
    grey: '#718093',
    darkGrey: '#344768',
    purple: '#C15BEE',
    blue: '#00B2FF',
    green: '#02BE57',
    yellow: '#F4D163',
    red: '#CF242B',
    facebook: '#32529F',
    overlay: 'rgba(0,0,0,0.5)'
}

// Fonts

export const fontWeights = {
    regular: 400,
    italic: 400,
    bold: 700
}

export const fonts = {
    h1: {
        size: '3.75rem',
        weight: fontWeights.bold,
        tag: 'h1'
    },
    h2: {
        size: '3rem',
        weight: fontWeights.bold,
        tag: 'h2'
    },
    h3: {
        size: '2.5rem',
        weight: fontWeights.bold,
        tag: 'h3'
    },
    h4: {
        size: '2rem',
        weight: fontWeights.bold,
        tag: 'h4'
    },
    h5: {
        size: '1.75rem',
        weight: fontWeights.bold,
        tag: 'h5'
    },
    h6: {
        size: '1.5rem',
        weight: fontWeights.bold,
        tag: 'h6'
    },
    display1: {
        size: '12rem',
        weight: fontWeights.regular,
        tag: 'h1'
    },
    display2: {
        size: '11rem',
        weight: fontWeights.regular,
        tag: 'h2'
    },
    display3: {
        size: '9rem',
        weight: fontWeights.regular,
        tag: 'h3'
    },
    display4: {
        size: '7rem',
        weight: fontWeights.regular,
        tag: 'h4'
    }
}

// Grid

export const gridMargin = 2
export const gridSize = 12
export const gridWidth = {
    sm: 100,
    md: 90,
    lg: 80,
    xl: 70
}

export const gutterWidth = 2

// Modals

export const zIndexModal = 999
export const zIndexModalBackdrop = 1000

// Transitions

export const durationShort = 200
export const durationLong = 450
export const transitionOpacity = {
    entering: 1,
    entered: 1,
    exiting: 0,
    exited: 0
}