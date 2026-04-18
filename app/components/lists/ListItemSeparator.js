import { View, StyleSheet } from 'react-native';
import React from 'react';

import colours from '../../config/colours';

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colours.light,
  },
});

export default ListItemSeparator;
