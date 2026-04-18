import React from 'react';
import { View, StyleSheet } from 'react-native';

import colours from '../config/colours';

function AboutScreen(props) {
  return (
    <View style={styles.screen}>

    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colours.backgroundColour,
        flex: 1,
    },
});

export default AboutScreen;