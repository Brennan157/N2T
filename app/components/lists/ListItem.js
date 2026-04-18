import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight} from 'react-native';

import colours from '../../config/colours';
import AppText from '../text/AppText';

function ListItem({title, subTitle, image, IconComponent,onPress }) {
    return (
        <TouchableHighlight underlayColor={colours.light} onPress={onPress} style={styles.highlight}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle} numberOfLines={2} >{subTitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    highlight: {
        flex: 1,
        width: '100%',
    },
    container: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colours.backgroundColour,
        alignItems: "center"
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        flexShrink: 0,
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colours.medium,
    },
});

export default ListItem;
