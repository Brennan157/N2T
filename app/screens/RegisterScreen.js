import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import * as Yup from 'yup';

//components
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import colours from '../config/colours';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <>
            <View style={styles.center}>
                <Image source={require("../assets/N2Ticon3.png")} />
                <Text style={styles.tagline}> </Text>

                <AppForm
                    initialValues={{name: '', email: '', password: ''}}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >

                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder="Name"
                        textContentType="name"
                    />

                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
            
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />

                    <SubmitButton title="Register"/>
                </AppForm>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: "flex-end"
    },
    center: {
        flex: 1,
        alignItems: 'center', 
        padding: 20,
        paddingTop: 40,
        backgroundColor: colours.backgroundColour
    },
    tagline: {
        fontSize: 20,
        fontWeight: "600",
        paddingVertical: 10,
    },
    input: {
      height: 40,
      borderColor: "#000",
      borderWidth: 1.5,
      paddingHorizontal: 10,
      marginVertical: 5,
      width: '80%',
      alignSelf: 'center',
    },
});

export default LoginScreen;