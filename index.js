/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import store from './src/RTK/storeRtk';

const bundle = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => bundle);
