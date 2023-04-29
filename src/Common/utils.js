import {Alert, Platform, ToastAndroid} from 'react-native';
import * as RootNavigation from '../Router/RootNavigation';

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
