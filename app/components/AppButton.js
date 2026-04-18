import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colours from '../config/colours';

function AppButton({title, onPress, color = "primary"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colours[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:  colours.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems:'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    text: {
        fontSize: 25,
        color: colours.backgroundColour,
        textTransform: 'uppercase',
        fontWeight: 'bold',

    },
})
export default AppButton;