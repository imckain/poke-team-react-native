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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let ioniconName;
          let materialIconName;
          let fontAwesomeName;

          if (route.name === 'Home') {
            ioniconName = focused ? 'ios-home' : 'home-outline'
            return <Ionicons name={ioniconName} size={24} color="black" />
          } else if (route.name === 'Teams') {
            materialIconName = focused ? 'pokeball' : 'pokemon-go'
            return <MaterialCommunityIcons name={materialIconName} size={24} color="black" />
          } else if (route.name === 'Profile') {
            fontAwesomeName = focused ? 'user-circle' : 'user-circle-o'
            return <FontAwesome name={fontAwesomeName} size={24} color="black" />
          }
        }
      })}
    >
      <Tab.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: '#272537',
          },
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
            title: 'Home'
          }}
          />
        <Tab.Screen 
          name='Teams' 
          component={TeamsScreen} 
          options={{
            title: 'Your Teams'
          }}
          />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
        />
      </Tab.Group>
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Tab Navigator' 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#272537',
          },
          headerTitleStyle: {
            color: '#ffffff',
            fontWeight: '600',
          },
        }}
        options={{
          title: 'Poke-Team'
        }}
      >
        <Stack.Group>
          <Stack.Screen options={{ title: 'Poke-Team' }} name='Tab Navigator' component={BottomTabNavigator} />
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