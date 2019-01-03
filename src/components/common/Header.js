// First step: import libraries
import React from 'react';
import { Text, View } from 'react-native';

// Second step: create the component
// The name of the function will be the same as the component
// Whenever the Header is called will call the properties (props) that
// need to be passed
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    // style is used as a prop
    return (
        <View style={viewStyle}> 
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// By convention styles will go as an object after the component
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        paddingTop: 15,
        shadowColor: '#ff0000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Third step: make the component available
// Using ES6 syntax
export {Header};
