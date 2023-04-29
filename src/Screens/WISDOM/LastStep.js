import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../Common/colors';

const LastStep = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Image
          style={styles.baseImage}
          source={require('../../../Assets/baselogIn.png')}
        />

        <Text style={styles.greatText}>Great! You’re at the final step</Text>
        <Text style={styles.skillText}>Skills that you want to explore</Text>

        <View style={styles.listContent}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.listItem}> Business Analytics </Text>
            <Text style={styles.listItem}> Fashion </Text>
          </View>

          <Text style={[styles.listItem, {alignSelf: 'flex-start'}]}>
            {' '}
            Coding{' '}
          </Text>
        </View>

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtontext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contents: {},
  baseImage: {
    height: 320,
    width: 320,
  },
  greatText: {
    color: '#0A66C2',
    fontSize: 23,
    fontWeight: 'bold',
  },
  skillText: {
    marginVertical: 15,
    color: colors.black,
    fontSize: 16,
  },
  listContent: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  listItem: {
    borderWidth: 0.9,
    color: colors.black,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  nextButton: {
    backgroundColor: '#0A66C2',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginVertical: 15,
  },
  nextButtontext: {
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
  },
});

export default LastStep;
