import React from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colours from '../../config/colours';

function renderDeleteAction ({onPress}){
    return (
    <View>
        <TouchableOpacity 
            style={styles.backRightBtn}
            onPress={onPress}
        >
            <Icon name="trash-can" size={35} color="white"/>
        </TouchableOpacity>
    </View>
)};

const styles = StyleSheet.create({
        backRightBtn: {
            backgroundColor: colours.danger,
            justifyContent: 'center',
            alignItems: 'center',
            width: 75,
            flex: 1,
        }
});

export default renderDeleteAction;
