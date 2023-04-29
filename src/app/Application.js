import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../Common/colors';
import {LOG} from '../Common/utils';
import Feather from 'react-native-vector-icons/Feather';

const win = Dimensions.get('window');

const Application = () => {
  const navigation = useNavigation();
  // const [signal, setSignal] = useState(false);

  const position = new Animated.ValueXY({x: 0, y: 0});

  const rotate = position.x.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {}, []);

  let signal = false;

  const screenClicked = () => {
    navigation.navigate('logIn', {type: 'logIn'});

    const name = 'vigneshwaran';

    // console.log('%c😁️', 'font-size:20px');

    // console.group(
    //   `%c${name}`,
    //   'color:#C6DE41;background:#3E432E;font-size:20px',
    // );
    // console.log(hello);
    // console.groupEnd();

    // if (signal) {
    //   signal = false;
    // } else {
    //   signal = true;
    // }
    // if (signal) {
    //   Animated.timing(position, {
    //     toValue: {x: -win.width, y: 0},
    //     duration: 500,
    //     useNativeDriver: true,
    //   }).start();
    // } else {
    //   Animated.timing(position, {
    //     toValue: {x: 0, y: 0},
    //     duration: 500,
    //     useNativeDriver: true,
    //   }).start();
    // }
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

      <Feather name="home" size={20} color={colors.buttonBlue} />

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
