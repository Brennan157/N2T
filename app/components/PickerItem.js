import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

// Components
import AppText from './text/AppText';

function PickerItem({ label, onPress, selected }) {
    return (
        <TouchableOpacity
            style={[styles.item, selected && styles.selectedItem]} // Apply styles conditionally
            onPress={onPress}
        >
            <AppText style={[styles.text, selected && styles.selectedText]}>
                {label}
            </AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        backgroundColor: 'white', // Default background color
    },
    selectedItem: {
        backgroundColor: '#d0e8ff', // Highlight color for selected item
    },
    text: {
        fontSize: 16,
        color: 'black', // Default text color
    },
    selectedText: {
        fontWeight: 'bold',
        color: 'blue', // Text color for selected items
    },
});

export default PickerItem;