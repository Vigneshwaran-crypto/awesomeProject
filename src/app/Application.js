import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Application = () => {
  const navigation = useNavigation();
  console.log('this is application screen');

  useEffect(() => {

  }, []);

  const screenClicked = () => {
    navigation.navigate('logIn');
  };

  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <View>
        <Text>Hello</Text>
      </View>

      <TouchableOpacity
        style={{padding: 40, backgroundColor: 'blue'}}
        onPress={screenClicked}>
        <Text>click here to go next screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Application;
