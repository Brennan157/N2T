import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colours from '../config/colours';

function NewMealButton({onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons 
                color={colours.white}
                size={40} 
                name="plus-circle" 
            />
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.primary,
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 35,
    borderColor: colours.white,
    borderWidth: 10,
  },
  button: {
    position: "absolute",
    alignSelf: "center",
  },
});

export default NewMealButton;