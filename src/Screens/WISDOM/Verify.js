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
import {useNavigation} from '@react-navigation/native';

const Verify = () => {
  const navigation = useNavigation();

  const nextOnPress = () => {
    navigation.navigate('lastStep');
  };
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Image
          style={styles.baseImage}
          source={require('../../../Assets/baselogIn.png')}
        />

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Enter the code</Text>
          <TextInput style={styles.inputFields} />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={nextOnPress}>
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
    height: 350,
    width: 350,
  },
  inputLabel: {
    marginVertical: 5,
    color: colors.black,
    fontSize: 16,
  },
  inputFields: {
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  inputView: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  nextButton: {
    backgroundColor: '#0A66C2',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginVertical: 10,
  },
  nextButtontext: {
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
  },
});

export default Verify;
