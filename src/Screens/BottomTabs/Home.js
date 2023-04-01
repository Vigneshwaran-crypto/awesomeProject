import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {LOG, Navigate} from '../../Common/utils';
import {
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import * as RootNavigation from '../../Router/RootNavigation';

const Home = () => {
  const navigation = useNavigation();
  const clicked = () => {
    LOG('button Clicked');

    // RootNavigation.navigateScreen('logIn');

    // Navigate('chat');

    navigation.navigate('modalTab');
  };

  return (
    <View style={styles.container}>
      <Text>Hello this is home</Text>

      <TouchableOpacity onPress={clicked}>
        <Text style={styles.buttonText}>click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    paddingVertical: 10,
  },
});

export default Home;
