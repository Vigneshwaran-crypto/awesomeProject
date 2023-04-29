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
  const RBref = useRef();

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
