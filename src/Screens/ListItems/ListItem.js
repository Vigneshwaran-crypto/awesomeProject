import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListItem = props => {
  const item = props.item;

  return (
    <View style={styles.container}>
      <Text style={styles.mailText}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems:"center"
  },
  mailText: {
    marginVertical: 10,
    alignSelf: 'center',
  },
});

export default ListItem;
