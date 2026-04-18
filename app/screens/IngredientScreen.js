import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import colours from '../config/colours';
import AppText from '../components/text/AppText';

function IngredientScreen({route}) {
    const ingredient = route.params;

    return (
        <View style={styles.screen}>
            <Image style={styles.image} source={ingredient.image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{ingredient.title}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colours.backgroundColour,
        flex: 1,
    },
    image:{
        width: '100%',
        height: 300,
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 10,
    }
})

export default IngredientScreen;