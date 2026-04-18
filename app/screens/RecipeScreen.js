import React from 'react';
import {StyleSheet, View, Image, Button, FlatList, ScrollView} from 'react-native';

import colours from '../config/colours';
import AppText from '../components/text/AppText';
import AppButton from '../components/AppButton';
import Icon from '../components/Icon';

function RecipeScreen({route}) {
    const recipe = route.params;

    return (
        <View style={styles.screen}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <Image style={styles.image} source={recipe.image}/>

                        <View style={styles.titleContainer}>
                            <AppText style={styles.title}>{recipe.title}</AppText>
                            <AppText>{recipe.desc}</AppText>
                        </View>

                        <View style={styles.detailsContainter}>
                            <View style={styles.factsContainer}>
                                <AppText>Prep Time: {recipe.prepTime} </AppText>
                                <AppText>Cook Time: {recipe.cookTime} </AppText>
                            </View>
                            <View style={styles.factsContainer}>
                                <AppText>Total Time: {recipe.prepTime + recipe.cookTime} </AppText>
                                <AppText>Servings: {recipe.servings} </AppText>
                            </View>
                        </View>

                        <View style={styles.detailsContainter}>
                            <AppText style={styles.header}>Nutrition Facts</AppText>
                            <View>
                                <AppText>Calories: {recipe.calories} </AppText>
                                <AppText>Fat: {recipe.fat} </AppText>
                                <AppText>Carbs: {recipe.calories} </AppText>
                                <AppText>Protien: {recipe.protien} </AppText>
                            </View>
                        </View>

                        <View style={styles.ingreidentsContainer}>
                            <AppText style={styles.header}>Ingredients</AppText>
                        </View>
                    </>
                }
                data={recipe.ingredients}
                keyExtractor={ingreidents => ingreidents.id.toString()}
                renderItem={({item}) =>  (
                        <View style={styles.ingreidentsContainer}>
                            <AppText>{item.amount} {item.title}</AppText>
                        </View>
                )}
                ListFooterComponent={
                    <>
                        <View style={styles.cookButton}>
                            <AppButton
                                title="Cook"
                            />
                        </View>
                    </>
                }
            />
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
    titleContainer:{
        padding:20,
    },
    title:{
        fontSize: 26,
        fontWeight: "500",
        marginBottom: 10,
    },
    detailsContainter: {
        paddingLeft: 20,
        paddingBottom: 20,
    },
    factsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    header: {
        fontWeight: "500",
        fontSize: 22,
    },
    cookButton:{
        bottom: 10,
        padding: 20,
        alignSelf: 'center',
        zIndex: 1,      
        width: "100%",
    },
    deleteButton:{
        position:"absolute",
        alignSelf:"flex-end",
        padding: 20,
    },
    ingreidentsContainer:{
        paddingLeft: 20,
    },
})

export default RecipeScreen;