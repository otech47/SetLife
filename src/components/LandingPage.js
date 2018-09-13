import React from 'react';

import Button from './Button';
import ContactForm from './ContactForm';
import Icon from './Icon';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className='LandingPage'>
                <p>This is the LandingPage component</p>
                <ContactForm/>
            </div>
        );
    }
}