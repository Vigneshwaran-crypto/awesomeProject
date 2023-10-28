import {Alert, Platform, ToastAndroid} from 'react-native';
import * as RootNavigation from '../Router/RootNavigation';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

export const LOG = (text, value) => {
  if (value) {
    console.log(text, value);
  } else {
    console.log(text);
  }
};

export const Toast = value => {
  if (Platform.OS == 'android') {
    ToastAndroid.showWithGravity(
      value,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  } else {
    Alert.alert('Jarvis', value, [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  }
};

export const Navigate = (name, param) => {
  LOG('navigate method called :', name);
  RootNavigation.navigateScreen(name, param);
};

export const notificationListener = async () => {
  await messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  await messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};

export const getToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log('Token values ====================> ', token);
  return token;
};

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const onDisplayNotification = async data => {
  // Request permissions (required for iOS)
  LOG('data passed to display notification :', data);

  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title: data.title,
    body: data.body,
    android: {
      channelId,
      // smallIcon: 'name-of-a-small-icon',
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
};
