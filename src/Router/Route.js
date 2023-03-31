import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

//screens importing
import Application from '../app/Application';
import LogIn from '../auth/LogIn';
import Home from '../Screens/BottomTabs/Home';
import Chat from '../Screens/BottomTabs/Chat';
import Profile from '../Screens/BottomTabs/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {LOG} from '../Common/utils';

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
            {
              LOG('route name arrived :', route.name);
            }
            if (route.name === 'home') {
              return (
                <View>
                  <Feather name="home" color={color} size={size} />
                  <Text style={{color: color}}>Home</Text>
                </View>
              );
            } else if (route.name === 'chat') {
              return (
                <View>
                  <Feather name="droplet" color={color} size={size} />
                  <Text style={{color: color}}>Chat</Text>
                </View>
              );
            } else if (route.name === 'profile') {
              return (
                <View>
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
            backgroundColor: '#2E4F4F',
          },
          tabBarShowLabel: false,
        })}
        initialRouteName="home">
        <Tab.Screen
          name="home"
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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="application"
          component={Application}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="logIn"
          component={LogIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="homeTab"
          component={HomeTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
