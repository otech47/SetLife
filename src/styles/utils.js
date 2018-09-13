export const num = n => typeof n === 'number' && !Number.isNaN(n)

const unit = unit => value => (num(value) ? value + unit : value)
export const px = unit('px')
export const rem = unit('rem')
export const ms = unit('ms')