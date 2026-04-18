import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';


function AppContainer({children}) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
}

export default AppContainer;

const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            backgroundColor: '#fffef4',
            //padding: 20,
        },
})