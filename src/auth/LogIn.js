import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../Common/colors';
import {LOG, Toast} from '../Common/utils';
import {Checkbox} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {apiCall} from '../RTK/ReducersRtk';
import {
  getAllProducts,
  getUserDetails,
  saveUserDetails,
} from '../RTK/RtkActions';
import auth from '@react-native-firebase/auth';

const LogIn = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const type = props.route.params.type;

  const products = useSelector(({products}) => products);

  const position = new Animated.ValueXY({x: 0, y: 0});

  const [isChecked, setIsCheck] = useState(false);
  const [tapTouches, setTapTouches] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    LOG('props log in login :', type);
    // LOG('products in Log In :', products);
  }, [products]);

  const validateOnPress = value => {
    LOG('Button aclicked');
    // dispatch(apiCall(getUserDetails()));

    LOG('user Name password :', password);

    if (type == 'logIn') {
      // navigation.push('logIn', {type: 'join'});
    } else {
      // navigation.navigate('verify');

      const userNameValid = isValidMail();

      if (!userNameValid) {
        Toast('Please enter valid email');
      } else if (!password) {
        Toast('Please enter password');
      } else {
        try {
          const createUser = auth().createUserWithEmailAndPassword(
            userName,
            password,
          );

          LOG('after user created  :', createUser);

          createUser
            .then(res => {
              LOG('response ', res);
              if (res.user._auth._authResult) {
                navigation.goBack();
              } else {
                Toast('Please Try agin');
              }
            })
            .catch(err => {
              LOG('err in userCreate Catch :', err);
              Toast('Please try again');
            });
        } catch (err) {
          LOG('cath in acc creater :', err);
        }
      }
    }
  };

  let touches = false;

  const logInClick = () => {
    // setTapTouches(!tapTouches);

    navigation.navigate('modalTab');

    if (touches) {
      touches = false;
    } else {
      touches = true;
    }

    if (password.length < 4) {
      LOG('less than 4');

      if (touches) {
        Animated.spring(position, {
          toValue: {x: 70, y: 0},
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(position, {
          toValue: {x: -70, y: 0},
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
      // Toast('Please enter valid password');
    } else {
      const userNameValid = isValidMail();
      if (!userNameValid) {
        Toast('Please enter valid email');
      } else if (!password) {
        Toast('please enter the password');
      } else if (!userName && !password) {
        Toast('Please enter email and password ');
      } else {
        const sigIn = auth().signInWithEmailAndPassword(userName, password);

        sigIn
          .then(res => {
            LOG('res value of signIn :', res);
            if (res.user._auth._authResult) {
              navigation.navigate('modalTab');
              // dispatch(apiCall(saveUserDetails(res)));
            }
          })
          .catch(err => {
            LOG('catch in sigIn :', err);
            Toast('Please enter valid credential');
          });
      }
    }
  };

  const isValidMail = () => {
    const mail = userName.split('');
    let haveAt = false;
    let haveDot = false;

    mail.forEach(item => {
      if (item == '@') {
        haveAt = true;
      } else if (item == '.') {
        haveDot = true;
      }
    });

    if (haveAt && haveDot) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.baseImage}
          source={require('../../Assets/baselogIn.png')}
        />

        <View style={styles.authContent}>
          <Text
            style={[
              styles.welcomeText,
              {display: type == 'logIn' ? 'flex' : 'none'},
            ]}>
            Welcome to the world full of possibilities
          </Text>

          <View style={styles.inputContent}>
            <Text style={styles.inputLabel}>Email or Phone</Text>
            <TextInput onChangeText={setUserName} style={styles.inputFields} />

            <Text style={styles.inputLabel}>
              {type == 'logIn' ? 'password' : 'Set a Password'}
            </Text>
            <TextInput onChangeText={setPassword} style={styles.inputFields} />

            <Text
              style={[
                styles.forgotText,
                {display: type == 'logIn' ? 'flex' : 'none'},
              ]}>
              Forgot Password?
            </Text>
          </View>

          {type == 'logIn' ? (
            <Animated.View style={{transform: [{translateX: position.x}]}}>
              <TouchableOpacity style={styles.joinButton} onPress={logInClick}>
                <Text style={styles.joinButtontext}>Log In</Text>
              </TouchableOpacity>
            </Animated.View>
          ) : (
            <View style={styles.checkBoxView}>
              <Checkbox
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={() => setIsCheck(!isChecked)}
              />

              <Text style={styles.checkBoxText}>
                Agree to the{' '}
                <Text style={styles.termsText}> terms & Conditions </Text>
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={type == 'logIn' ? styles.logInButton : styles.joinButton}
            onPress={validateOnPress}>
            <Text
              style={
                type == 'logIn' ? styles.buttonText : styles.joinButtontext
              }>
              {type == 'logIn' ? 'New user - Join Now' : 'Join Now'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    // borderWidth: 1,
  },

  baseImage: {
    height: 350,
    width: 350,
  },
  authContent: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#2A4E8B',
  },
  inputContent: {
    marginVertical: 25,
  },
  inputLabel: {
    marginVertical: 5,
    color: colors.black,
    fontSize: 16,
  },
  inputFields: {
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  forgotText: {
    color: '#0A66C2',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  logInButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: '#0A66C2',

    textDecorationLine: 'underline',
  },
  joinButton: {
    backgroundColor: '#0A66C2',
    paddingVertical: 15,
    marginVertical: 20,
    width: '30%',
    alignSelf: 'center',
  },
  joinButtontext: {
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  checkBoxView: {
    marginTop: -20,
    flexDirection: 'row',
    marginStart: -9,
  },
  checkBoxText: {
    alignSelf: 'center',
    color: colors.black,
  },
  termsText: {
    textDecorationLine: 'underline',
  },
});

export default LogIn;
