import React from 'react';
import { Text, StyleSheet } from 'react-native'

function AppTextHeader({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 50,
        textAlign: 'center',
        //fontFamily
    }
})

export default AppTextHeader;