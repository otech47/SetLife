import React from 'react';

import Button from './Button';
import Icon from './Icon';
import Text from './Text';

import Col from 'styles/Col';
import Flex from 'styles/Flex';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className='LandingPage'>
                <Flex alignCenter column>
                    <Text>This is the LandingPage component</Text>
                    <Button marginTop='5rem'>Click here</Button>
                </Flex>
            </div>
        );
    }
}