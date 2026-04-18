import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import colours from '../config/colours';
import AppPicker from '../components/AppPicker';
import AppText from '../components/text/AppText';

const dietaryRestrictions = [
  {label: "Peanut Butter", value: 1 },
  {label: "Fish", value: 2 },
  {label: "Pork", value: 3 },
]

const lifestyles = [
  {label: "Vegan", value: 1 },
]

function PrefrencesScreen(props) {
  const [restrictions, setRestrictions] = useState([]);
  const [lifestyle, setLifestyle] = useState();
  
  const toggleRestriction = (item) => {
    console.log("Selected Item:", item);
    setRestrictions((prevRestrictions) => {
        const isSelected = prevRestrictions.some(restriction => restriction.value === item.value);
        if (isSelected) {
            return prevRestrictions.filter(restriction => restriction.value !== item.value);
        } else {
            return [...prevRestrictions, item];
        }
    });
};


  return (
    <View style={styles.screen}>
      <AppPicker 
        items={dietaryRestrictions} 
        icon="" 
        placeholder="Dietary Restrictions" 
        selectedItem={restrictions}
        onSelectItem={(item) => toggleRestriction(item)}
      />

      <View>
        {restrictions.map((item, key) => (
          <View key={key}>
            <AppText>{item.label}</AppText>
          </View>
        ))}
      </View>


      <AppPicker icon="" placeholder="Dietary Prefrences" />
      <AppPicker 
        selectedItem={lifestyle}
        onSelectItem={(item) => setLifestyle(item)}
        items={lifestyles}
        icon="" 
        placeholder="Lifestyle"
        closeModal="true"
      />
      <AppPicker icon="" placeholder="Goals" />
      <AppPicker icon="" placeholder="Cooking Experience" />

    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colours.backgroundColour,
        flex: 1,
        padding: 20,
    },
});

export default PrefrencesScreen;