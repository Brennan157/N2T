import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({ children, style, ...otherProps }) {
    return (
        <Text style={[styles.text, style]} {...otherProps}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        // Add your default fontFamily here if needed
        // fontFamily: 'some-font-family'
    }
});

export default AppText;
