import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colours from '../config/colours';
import AppText from './text/AppText';
import PickerItem from './PickerItem';

function AppPicker({
  icon,
  placeholder,
  items,
  onSelectItem,
  closeModal,
  selectedItem = [], // Default is an empty array
  PickerItemComponent = PickerItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);

const handleSelectItem = (item) => {
    const isSelected = selectedItem.some((i) => i.label === item.label);

    if (isSelected) {
        // Remove the item if it is already selected
        onSelectItem(selectedItem.filter((i) => i.label !== item.label));
    } else {
        // Add the item if it is not selected
        onSelectItem([...selectedItem, item]);
    }
};
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={20} color={colours.medium} style={styles.icon} />
          )}
          <AppText style={styles.text}>
            {selectedItem.length > 0
              ? selectedItem.map((item) => item.label).join(', ')
              : placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" size={20} color={colours.medium} />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              label={item.label}
              onPress={() => {
                handleSelectItem(item);
                setModalVisible(closeModal);
              }}
          selected={selectedItem.some((i) => i.label === item.label)}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
  placeholder: {
    color: colours.medium,
    flex: 1,
    fontSize: 18,
  },
});

export default AppPicker;