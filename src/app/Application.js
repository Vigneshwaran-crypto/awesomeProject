import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../Common/colors';
import {LOG} from '../Common/utils';
import Feather from 'react-native-vector-icons/Feather';

import {NativeModules} from 'react-native';

const AnimeFeather = Animated.createAnimatedComponent(Feather);

const win = Dimensions.get('window');

const Application = () => {
  const navigation = useNavigation();
  // const [signal, setSignal] = useState(false);
  const spin = new Animated.Value(0);

  const position = new Animated.ValueXY({x: 0, y: 0});

  const rotate = position.y.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.timing(spin, {
      toValue: 10,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, []);

  const spinValue = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['120deg', '0deg'],
  });

  let signal = false;

  const screenClicked = () => {
    const {PlayDefault} = NativeModules;

    //Don'd remove these line

    // PlayDefault.notificationTone();

    // PlayDefault.getPhoneID()
    //   .then(val => LOG('this is getting from java :', val))
    //   .catch(err => LOG('error ', err));

    // navigation.navigate('logIn', {type: 'logIn'});
    // axios
    //   .get('http://172.16.16.98:3000')
    //   .then(res => {
    //     LOG('Response value form your backend :', res);
    //   })
    //   .catch(err => {
    //     LOG('Catch from your backend :', err);
    //   });

    navigation.navigate('practice');
  };

  const reverse = () => {
    LOG('reversed called');

    Animated.spring(position, {
      toValue: {x: 20, y: 600},
      duration: 2000,
      bounciness: -10,
      stiffness: 23,
      tension: 100,
      // useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Hello</Text>
      </View>

      <AnimeFeather
        name="home"
        size={50}
        color={colors.buttonBlue}
        style={{margin: 10, transform: [{rotate: spinValue}]}}
      />

      <TouchableOpacity
        style={{padding: 40, backgroundColor: colors.activeGreen}}
        onPress={screenClicked}>
        <Text>click here to go next screen</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '100%',
        }}>
        <Animated.View
          style={{
            height: '40%',
            width: '100%',
            // margin: 10,
            backgroundColor: colors.lightGreen,
            transform: [
              {translateX: position.x},
              {translateY: position.y},
              // {rotate: rotate},
            ],
          }}></Animated.View>

        <Animated.View
          style={{
            height: '40%',
            width: '100%',
            backgroundColor: colors.baseSecondary,
            transform: [{translateX: position.x}, {translateY: position.y}],
          }}></Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Application;
