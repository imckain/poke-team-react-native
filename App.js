import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import TeamsScreen from './src/screens/TeamsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Logo from './src/header/Logo';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff0000',
        tabBarInactiveTintColor: '#353340',
      }}
    >
      <Tab.Group
        screenOptions={{
          headerTitleStyle: {
            color: '#ffffff',
            fontWeight: '600',
          },
        }}
        >
        <Tab.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, color }) => {
              let ioniconName;
              ioniconName = focused ? 'ios-home' : 'home-outline'
              return <Ionicons name={ioniconName} size={30} color={color} />
            },
            headerStyle: {
              backgroundColor: '#ffc554',
              height: 50
            },
            headerTitleStyle: {
              color: '#000000'
            },
          }}
          />
        <Tab.Screen 
          name='Teams' 
          component={TeamsScreen} 
          options={{
            title: 'Your Teams',
            tabBarIcon: ({ focused, color }) => {
              let materialIconName;
              materialIconName = focused ? 'pokeball' : 'pokemon-go'
              return <MaterialCommunityIcons name={materialIconName} size={30} color={color} />
            },
            headerStyle: {
              backgroundColor: '#ff0000',
              height: 50
            },
            headerTitleStyle: {
              color: '#000000'
            },
          }}
          />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ focused, color }) => {
              let fontAwesomeName;
              fontAwesomeName = focused ? 'user-circle' : 'user-circle-o'
              return <FontAwesome name={fontAwesomeName} size={30} color={color} />
            },
            headerStyle: {
              backgroundColor: '#CFCFCF',
              height: 50
            },
            headerTitleStyle: {
              color: '#000000'
            },
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer screenOptions={{ headerStyle: { height: 250 }}}>
      <Stack.Navigator
        initialRouteName='Tab Navigator' 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#272537',
          },
          headerTitle: props => <Logo {...props} />
        }}
        options={{
        }}
      >
        <Stack.Group>
          <Stack.Screen 
            name='Tab Navigator' 
            component={BottomTabNavigator} 
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
		// marginLeft: 18,
		// marginBottom: 10,
		// marginTop: 5,
	},
});

export default App;