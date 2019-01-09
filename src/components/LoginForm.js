import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
<<<<<<< HEAD
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text}
                        onChangeText={text => this.setState({ text: text })}
                        style={{ height: 20, width: 100 }}
                    />
                </CardSection>
                <CardSection />

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
=======
    state = {text:''}

    render() {
        return (
                <Card>
                    <CardSection>
                        <TextInput 
                            value={this.state.text}
                            onChangeText={text => this.setState({ text })}
                            style={{height: 20, width: 100}} 
                        />
                    </CardSection>
                    <CardSection />

                    <CardSection>
                        <Button>
                            Log in
                        </Button>
                    </CardSection>
                </Card>
>>>>>>> 787d95dc7097c6c6722f8ccf5531ba0baaf0dea8
        );
    }
};

export default LoginForm;
