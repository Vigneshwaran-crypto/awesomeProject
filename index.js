/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import store from './src/RTK/storeRtk';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {
  getToken,
  notificationListener,
  requestUserPermission,
} from './src/Common/utils';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const bundle = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => bundle);
