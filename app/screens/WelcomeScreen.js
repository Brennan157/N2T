import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';


function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
            blurRadius={5}
            style={styles.background}
            source={require("../assets/WelcomeBG2.jpg")}
        >
            <View style={styles.center}>
                <Image source={require("../assets/N2Ticon3.png")} />
                <Text style={styles.tagline}>Real-Time Personalized Meal Planner</Text>
            </View>
                

            <View style={styles.buttonContainer}>

                <AppButton title="login" color="secondary" onPress = {() => navigation.navigate("Login")}></AppButton>
                <AppButton title="register" onPress = {() => navigation.navigate("Register")}></AppButton>
            </View>

        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: "flex-end"
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    buttonContainer: {
        padding: 20,
    },
    tagline: {
        fontSize: 20,
        fontWeight: "600",
        paddingVertical: 10,
    }
});

export default WelcomeScreen;