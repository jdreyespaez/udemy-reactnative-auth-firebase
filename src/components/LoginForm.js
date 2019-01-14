import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {git 
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@mail.com"
                        value={this.state.text}
                        onChangeText={text => this.setState({ text: text })}
                    />
                </CardSection>
                <CardSection />

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>

        );
    }
};

export default LoginForm;
