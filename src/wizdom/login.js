import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  textFontFaceLight,
  textFontFaceMedium,
  textFontFaceSemiBold,
} from '../Common/styles';
import {colors} from '../Common/colors';

const LoginWiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContent}>
        <Image
          source={require('../../Assets/wizImages/logRead.jpg')}
          style={styles.logImage}
        />

        <Text style={styles.desText}>
          Welcome to the world full of possibilities
        </Text>
      </View>

      <View style={styles.LogInContent}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContent: {
    flex: 1,
    // borderWidth: 1,
    marginTop: 15,
    alignItems: 'center',
  },

  logImage: {
    height: '90%',
    width: '100%',
  },
  desText: {
    fontFamily: textFontFaceSemiBold,
    color: colors.textBlue,
    fontSize: 18,
  },
  LogInContent: {
    flex: 1.2,
    borderWidth: 1,
  },
});

export default LoginWiz;
