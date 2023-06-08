import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {LOG} from '../Common/utils';
import auth from '@react-native-firebase/auth';

const Call = () => {
  const userDetails = useSelector(({products}) => products.userDetails);
  const currentUser = auth().currentUser;

  useEffect(() => {
    LOG('userDetails_In_Call :', userDetails);
    LOG('current user in FIRE :', currentUser);
  }, []);
  return (
    <View>
      <Text>Call</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Call;
