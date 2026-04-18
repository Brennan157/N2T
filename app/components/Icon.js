import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import colours from '../config/colours';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function Icon({
    name,
    size = 40,
    backgroundColour = colours.black,
    iconColour = colours.white,
    onPress,
}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: backgroundColour,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <MaterialCommunityIcons name={name} color={iconColour} size={size * 0.5 } />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Icon;