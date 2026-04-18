//import from react/react-native
import { StyleSheet, FlatList, View } from 'react-native';
import { useState } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

//import components
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import renderDeleteAction from '../components/lists/renderDeleteAction'
import colours from '../config/colours';
import Icon from '../components/Icon';
import initialFridgeItems from '../data/initialFridgeItems';

function FridgeScreen ({navigation}) {
    //Hook for deleting fridgeItems
    const [fridgeItems, setfridgeItems] = useState(initialFridgeItems);
    //Hook for refreshing the flatlist
    const [refreshing, setRefreshing] = useState(false);

    //function to delete fridgeItems for form the list
    const handleDelete = (fridgeItem) => {
        //Delete the fridgeitem from fridge
        setfridgeItems(fridgeItems.filter((f) => f.id !== fridgeItem.id));
        //Call the server
    };

    //function to render a fridgeItem to be called into the flatList
    const renderItem = ({ item }) => (
        <Swipeable
            renderRightActions={() => renderDeleteAction({ onPress: () => handleDelete(item) })}
        >
            <ListItem
                image={item.image}
                title={item.title}
                subTitle={item.amount}
                onPress={() => navigation.navigate("IngredientScreen", item)}
            />
        </Swipeable>
    );

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={fridgeItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ListItemSeparator}
                    refreshing={refreshing}
                    //onRefresh={() => {
                        //setfridgeItems([
                            //code
                        //])
                    //}}
                />
            </View>
            <View style={styles.addItem}>
                <Icon                 
                    onPress={() => navigation.navigate("AddIngredientScreen")}
                    name="plus"
                    size="50"
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.backgroundColour,
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '100%',
        paddingRight: 20,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    addItem: {
        position:"absolute",
        alignSelf:"flex-end",
        bottom: 20 ,
        padding: 20,
    }
});

export default FridgeScreen;
