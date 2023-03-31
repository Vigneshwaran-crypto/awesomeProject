import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WalkthroughElement} from 'react-native-walkthrough';
import ListItem from '../Screens/ListItems/ListItem';
import Tooltip from 'react-native-walkthrough-tooltip';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors} from '../Common/colors';
import {LOG} from '../Common/utils';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';

const LogIn = () => {
  const navigation = useNavigation();
  const [listData, setListData] = useState([]);
  const [show, setShow] = useState(false);
  const RBref = useRef();

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/0154e81f-d2ec-44b5-9a48-966be1a7310c')
      .then(response => {
        console.log('response value in login :', response);
        setListData(response.data);
      })
      .catch(err => {
        console.log('err in login :', err);
      });

    console.log('list Data :', listData);
  }, []);

  useEffect(() => {}, []);

  const date = Date();

  const newDate = new Date();

  const demoClick = () => {
    // setShow(true);
    // navigation.navigate('home');
    // RBref.current.open();

    navigation.navigate('homeTab');

    LOG('date :', date);

    LOG('new date :', newDate);

    LOG('moment value :', moment(newDate).format('DD/MM/YYYY'));
  };

  const renderItem = ({item}) => {
    return <ListItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={demoClick}>
        <Text style={styles.buttontext}>Modal Button</Text>
      </TouchableOpacity>

      <FlatList
        data={listData}
        style={styles.listView}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View>
            <Text>No Data </Text>
          </View>
        )}
      />

      <RBSheet
        height={500}
        ref={RBref}
        // closeOnDragDown={true}
        openDuration={100}
        closeDuration={100}
        closeOnPressMask={true}
        customStyles={{
          container: styles.RBSheetStyle,
        }}>
        <View style={styles.belt}>
          <View style={styles.buckle}></View>
        </View>

        <Feather name="home" size={30} />

        <View style={{flexDirection: 'row', height: '100%', width: '100%'}}>
          <View style={styles.leg}></View>

          <View style={styles.leg}></View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    marginVertical: 40,
  },
  button: {
    backgroundColor: 'green',
    alignSelf: 'center',
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttontext: {
    color: 'white',
  },
  RBSheetStyle: {
    backgroundColor: 'white',
  },
  belt: {
    backgroundColor: '#4D4D4D',
    height: '8%',
  },
  buckle: {
    width: 70,
    height: '100%',
    backgroundColor: '#00235B',
    alignSelf: 'center',
  },
  leg: {
    height: '100%',
    backgroundColor: '#8F43EE',
  },
});

export default LogIn;
