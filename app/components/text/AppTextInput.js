import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colours from '../../config/colours';

function AppTextInput({icon, width = "100%", ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colours.medium} style={styles.icon}/>}
            <TextInput 
                placeholderTextColor={colours.medium}
                style={styles.TextInput} 
                {...otherProps} 
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    textInput: {
        fontSize: 18,
        color: colours.dark,
    },
    icon: {
        marginRight: 10,
    },

})

export default AppTextInput;