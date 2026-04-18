import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colours from '../config/colours';
import AppText from './text/AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Card({title, subTitle, image, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colours.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
        fontWeight: "bold",
        color: colours.secondary,
    },
    subTitle: {
        color: colours.medium,
        fontSize: 12,
        
    },
    image: {
        width: "100%",
        height: 200,
    },
})

export default Card;