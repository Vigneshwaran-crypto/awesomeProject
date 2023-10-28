import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {colors} from '../Common/colors';
import messaging from '@react-native-firebase/messaging';
import {
  LOG,
  getToken,
  notificationListener,
  onDisplayNotification,
  requestUserPermission,
} from '../Common/utils';
import {textFontFaceMedium, textFontFaceSemiBold} from '../Common/styles';
import {firebase} from '@react-native-firebase/firestore';

const Practice = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

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

  const onSavePress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.titleText}>User Details</Text>

        <Text style={styles.labelText}>Name :</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={setName}
          value={name}
        />

        <Text style={styles.labelText}>Age :</Text>
        <TextInput
          style={styles.inputField}
          keyboardType="decimal-pad"
          onChangeText={setAge}
          value={age}
        />

        <Text style={styles.labelText}>Contact :</Text>
        <TextInput
          style={styles.inputField}
          keyboardType="decimal-pad"
          onChangeText={setContact}
          value={contact}
        />

        <Text style={styles.labelText}>Email :</Text>
        <TextInput
          style={styles.inputField}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={onSavePress}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    height: '60%',
    width: '80%',
    // borderWidth: 1,
    elevation: 5,
    zIndex: 5,
    shadowColor: colors.activeGreen,
    padding: 20,
    // justifyContent: 'space-around',
  },
  titleText: {
    fontFamily: textFontFaceMedium,
    color: colors.darkGreen,
    alignSelf: 'center',
    fontSize: 25,
  },
  labelText: {
    fontFamily: textFontFaceMedium,
    color: colors.black,
    fontWeight: '900',
    fontSize: 20,
    marginTop: 15,
  },

  inputField: {
    borderWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 8,
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: colors.activeGreen,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  saveText: {
    fontWeight: '900',
    color: colors.white,
    alignSelf: 'center',
  },
});

export default Practice;
