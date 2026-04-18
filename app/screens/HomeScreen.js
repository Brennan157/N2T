import {View, StyleSheet, FlatList} from 'react-native';


import Card from '../components/Card';
import routes from '../navigation/routes';
import recipes from '../data/recipes';


import React from 'react';
import colours from '../config/colours';

function HomeScreen({navigation}) {
    return (
        <View style={styles.screen}>
            <FlatList
                data={recipes}
                keyExtractor={recipes => recipes.id.toString()}
                renderItem={({item}) => 
                <Card
                    title={item.title}
                    subTitle={item.expires}
                    image={item.image}
                    onPress={() => navigation.navigate("RecipeScreen", item)}
                />}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colours.backgroundColour,
        padding: 20,
    },
})

export default HomeScreen;