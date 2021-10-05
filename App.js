import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import TeamsScreen from './src/screens/TeamsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DetailModal from './src/screens/DetailModal';
import Logo from './src/components/header/Logo';
import AdvancedSearchScreen from './src/screens/AdvancedSearchScreen';
import BuildTeamsScreen from './src/screens/BuildTeamsScreen';
import TypeDetailModal from './src/screens/TypeDetailModal';
import MoveDetailModal from './src/screens/MoveDetailModal';
import AbilityDetailModal from './src/screens/AbilityDetailModal';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff0000',
        tabBarInactiveTintColor: '#CFCFCF',
      }}
      initialRouteName='Home'
    >
      <Tab.Group
        screenOptions={{
          headerTitleStyle: {
            color: '#ffffff',
            fontWeight: '600',
          },
          tabBarStyle: {
            backgroundColor: '#272537',
            height: 96,
            alignItems: 'baseline'
          }
        }}
        >
        <Tab.Screen 
          name='Build Teams' 
          component={BuildTeamsScreen} 
          options={{
            title: 'Build A Team',
            tabBarIcon: ({ focused, color }) => {
              let materialIconName;
              materialIconName = focused ? 'plus-square' : 'plus-square-o'
              return <FontAwesome name={materialIconName} size={34} color={color} />
            },
            headerStyle: {
              backgroundColor: '#ff0000',
              height: 50
            },
            headerTitleStyle: {
              color: '#000000'
            },
            headerShown: false,
            tabBarIconStyle: {
              marginTop: 5
            }
          }}
        />
        <Tab.Screen 
          name='Teams' 
          component={TeamsScreen} 
          options={{
            title: 'Your Teams',
            tabBarIcon: ({ focused, color }) => {
              let materialIconName;
              materialIconName = focused ? 'pokeball' : 'pokeball'
              return <MaterialCommunityIcons name={materialIconName} size={34} color={color} />
            },
            headerStyle: {
              backgroundColor: '#ff0000',
              height: 50
            },
            headerTitleStyle: {
              color: '#000000'
            },
            headerShown: false
          }}
        />
        <Tab.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, color }) => {
              let ioniconName;
              ioniconName = focused ? 'ios-home' : 'home-outline'
              return <Ionicons name={ioniconName} size={38} color={color} />
            },
            headerStyle: {
              backgroundColor: '#ffc554',
              height: 50
            },
            headerTitleStyle: {
              color: '#000000'
            },
            headerShown: false
          }}
        />
        <Tab.Screen 
          name='Search' 
          component={AdvancedSearchScreen} 
          options={{
            title: 'Search',
            tabBarIcon: ({ focused, color }) => {
              let ioniconName;
              ioniconName = focused ? 'search-circle' : 'search-circle-outline'
              return <Ionicons name={ioniconName} size={40} color={color} />
            },
            headerStyle: {
              backgroundColor: '#ffc554',
              height: 50
            },
            headerTitleStyle: {
              color: '#000000'
            },
            headerShown: false,
            tabBarIconStyle: {
              marginTop: 1
            }
          }}
        />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ focused, color }) => {
              let fontAwesomeName;
              fontAwesomeName = focused ? 'user-circle' : 'user-circle-o'
              return <FontAwesome name={fontAwesomeName} size={28} color={color} />
            },
            headerStyle: {
              backgroundColor: '#CFCFCF',
              height: 50
            },
            headerTitleStyle: {
              color: '#000000'
            },
            headerShown: false,
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
        <Stack.Group>
          <Stack.Screen 
            name='Detail Modal'
            component={DetailModal}
            options={{
              presentation: 'modal',
              headerStyle: {
                backgroundColor: '#ff0000',
              }
            }}
          />
          <Stack.Screen 
            name='Type Detail Modal'
            component={TypeDetailModal}
            options={{
              presentation: 'modal',
              headerStyle: {
                backgroundColor: '#ff0000',
              }
            }}
          />
          <Stack.Screen 
            name='Move Detail Modal'
            component={MoveDetailModal}
            options={{
              presentation: 'modal',
              headerStyle: {
                backgroundColor: '#ff0000',
              }
            }}
          />
          <Stack.Screen 
            name='Ability Detail Modal'
            component={AbilityDetailModal}
            options={{
              presentation: 'modal',
              headerStyle: {
                backgroundColor: '#ff0000',
              }
            }}
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
});

export default App;