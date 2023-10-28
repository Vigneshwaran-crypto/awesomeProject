import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {colors} from '../Common/colors';
import messaging from '@react-native-firebase/messaging';
import {
  LOG,
  getToken,
  notificationListener,
  onDisplayNotification,
  requestUserPermission,
} from '../Common/utils';
import {textFontFaceSemiBold} from '../Common/styles';

const Practice = () => {
  //proper working modal for push notification
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     LOG('remoteMessage from base :', remoteMessage);
  //     onDisplayNotification(remoteMessage.notification);
  //   });

  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   requestUserPermission();
  //   notificationListener();
  //   const token = getToken();
  // }, []);

  // const onDisPress = () => {
  //   onDisplayNotification();
  // };

  return (
    <View style={styles.container}>
      <Text>Hello everyone </Text>

      <TouchableOpacity style={styles.displayNotifyBut} onPress={onDisPress}>
        <Text style={styles.buttonText}>Display Notify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  displayNotifyBut: {
    padding: 10,
    backgroundColor: colors.borderGrey,
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: colors.activeGreen,
    fontFamily: textFontFaceSemiBold,
  },
});

export default Practice;
