import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB3o8tqxM1X_f1MYzUHm8OjxizNw0QAayE",
            authDomain: "auth-c60d6.firebaseapp.com",
            databaseURL: "https://auth-c60d6.firebaseio.com",
            projectId: "auth-c60d6",
            storageBucket: "auth-c60d6.appspot.com",
            messagingSenderId: "654197366585"
        });
    }
    render () {
        return (
            <View>
                <Header headerText="Auth" />
                <Text>Ésta es una app</Text>
            </View>
        );
    }
} 

export default App;
