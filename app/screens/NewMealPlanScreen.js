import {SafeAreaView, StyleSheet, View} from 'react-native';

import ListItem from '../components/lists/ListItem';
import AppContainer from '../components/AppContainer';
import AppTextHeader from '../components/text/AppTextHeader';

import React from 'react';
import colours from '../config/colours';

function NewMealPlanScreen(props) {
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
})

export default NewMealPlanScreen;