import React from 'react'

export default class Input extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            input,
            meta: { touched, error },
            name,
            label,
            type,
            className,
            disabled
        } = this.props

        return (
            <div className={`TextInput column ${className || ''}`}>
                <input
                    {...input}
                    disabled={disabled}
                    required
                    className="input_fields"
                    type={type}
                />
                <span className="bar" />
                <label
                    htmlFor={name}
                    className={`main_label ${
                        disabled ? 'disabled' : 'enabled'
                    } `}
                >
                    {label}
                </label>
                {touched &&
                    error && (
                        <label className="error_label" htmlFor={name}>
                            {error}
                        </label>
                    )}
                {touched && error && <span className="error_bar" />}
            </div>
        )
    }
}
