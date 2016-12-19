//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component

const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}>Header Butt</Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
