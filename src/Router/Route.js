import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../Common/colors';

//screens importing
import Application from '../app/Application';
import LogIn from '../auth/LogIn';
import Verify from '../Screens/WISDOM/Verify';
import LastStep from '../Screens/WISDOM/LastStep';

//bottomTAB bar
import Home from '../Screens/BottomTabs/Home';
import Chat from '../Screens/BottomTabs/Chat';
import Profile from '../Screens/BottomTabs/Profile';

//modalTabBar
import Cart from '../ModalTabs/Cart';
import Message from '../ModalTabs/Message';
import Call from '../ModalTabs/Call';

//Drawer menu
import Settings from '../Screens/drawerMenu/Settings';
import Help from '../Screens/drawerMenu/Help';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LOG} from '../Common/utils';
import {navigationRef} from './RootNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Route = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeTab = () => {
    {
      LOG('home tab summoned');
    }

    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              return (
                <View style={styles.tabIconView}>
                  <Feather name="home" color={color} size={size} />
                  <Text style={{color: color}}>Home</Text>
                </View>
              );
            } else if (route.name === 'chat') {
              return (
                <View style={styles.tabIconView}>
                  <Feather name="droplet" color={color} size={size} />
                  <Text style={{color: color}}>Chat</Text>
                </View>
              );
            } else if (route.name === 'profile') {
              return (
                <View style={styles.tabIconView}>
                  <Feather name="github" color={color} size={size} />
                  <Text style={{color: color}}>Profile</Text>
                </View>
              );
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#413543',

          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#B3E5BE',
          },
          tabBarShowLabel: false,
        })}
        initialRouteName="home">
        <Tab.Screen
          name="Home"
          component={Home}
          title={'home'}
          options={{
            headerShown: false,
            color: '#0E8388',
            headerBackVisible: false,
          }}
        />

        <Tab.Screen
          name="chat"
          component={Chat}
          options={{
            headerShown: false,
            color: '#0E8388',
          }}
        />

        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown: false,
            color: '#0E8388',
          }}
        />
      </Tab.Navigator>
    );
  };

  const ModalTab = () => {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.grey,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: colors.gradientColor},
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => (
              <View style={styles.tabIconView}>
                <Feather name="shopping-cart" color={color} size={20} />
                <Text style={{color: color}}>Cart</Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="message"
          component={Message}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => (
              <View style={styles.tabIconView}>
                <Feather name="mail" color={color} size={20} />
                <Text style={{color: color}}>Chat</Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="call"
          component={Call}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => (
              <View style={styles.tabIconView}>
                <Feather name="phone" color={color} size={20} />
                <Text style={{color: color}}>call</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="application"
          component={Application}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="logIn"
          component={LogIn}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />

        <Stack.Screen
          name="verify"
          component={Verify}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="lastStep"
          component={LastStep}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="homeTab"
          component={HomeTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="modalTab"
          component={ModalTab}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          name="settings"
          component={Settings}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="help"
          component={Help}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// DRAWER MENU IMPLEMENTATION

const SettingFun = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="settings"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const HelpFun = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="help"
        component={Help}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const Drawer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="settings">
        <Drawer.Screen
          name="settings"
          component={SettingFun}
          options={{headerShown: false}}
        />

        <Drawer.Screen
          name="help"
          component={HelpFun}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// DRAWER MENU IMPLEMENTATION ENDED

const styles = StyleSheet.create({
  tabIconView: {
    alignItems: 'center',
  },
  tabTitleText: {},
});

export default Route;
