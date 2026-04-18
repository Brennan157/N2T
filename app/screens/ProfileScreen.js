import {SafeAreaView, StyleSheet, View, FlatList, ImageComponent} from 'react-native';
import React from 'react';

//Components
import ListItem from '../components/lists/ListItem';
import AppContainer from '../components/AppContainer';
import Icon from '../components/Icon';
import colours from '../config/colours';
import ListItemSeparator from '../components/lists/ListItemSeparator';

const menuItems =[
    {
        title:"Edit Profile",
        icon: {
            name:"account-edit",
            backgroundColour: colours.primary
        },
    },
    {
        title:"Prefrences",
        icon: {
            name:"cog",
            backgroundColour: colours.primary
        },    },
    {
        title:"About",
        icon: {
            name:"alert-circle-outline",
            backgroundColour: colours.primary
        },
    },
]

function ProfileScreen({navigation}) {
    return (
        <AppContainer>
        <View style={styles.screen}>
            <View style={styles.profileContainer}>
                <ListItem
                    title="Brennan Campbell"
                    subTitle="BrennanBT@pm.me"
                    image={require('../assets/N2Ticon.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name} 
                                    backgroundColour={item.icon.backgroundColour}
                                />
                            }
                            onPress={() => navigation.navigate(item.title.replace(" ", "") + "Screen")}
                            
                        />
                    }
                />
            </View>
            <View style={styles.profileContainer}>
                <ListItem
                    title="Log Out"
                    IconComponent={
                        <Icon name="logout" backgroundColour={colours.black} />
                    }
                />
            </View>
        </View>
    </AppContainer>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colours.light,
        flex: 1,
    },
    container:{
        marginVertical: 70,
    },
    profileContainer: {
        minHeight: 80, // Set a minimum height to ensure container has space
    },
})