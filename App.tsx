import * as React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "./src/context/TeamContext";
import * as ScreenOrientation from "expo-screen-orientation";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import TeamsScreen from "./src/screens/TeamsScreen";
import AboutScreen from "./src/screens/AboutScreen";
import DetailModal from "./src/screens/DetailModal";
import Logo from "./src/components/Header/Logo";
import AdvancedSearchScreen from "./src/screens/AdvancedSearchScreen";
import BuildTeamsScreen from "./src/screens/BuildTeamsScreen";
import TypeDetailModal from "./src/screens/TypeDetailModal";
import MoveDetailModal from "./src/screens/MoveDetailModal";
import AbilityDetailModal from "./src/screens/AbilityDetailModal";
import SecondaryDetailModal from "./src/screens/SecondaryDetailModal";
import LocationDetailModal from "./src/screens/LocationDetailModal";
import TeamDetailScreen from "./src/screens/TeamDetailScreen";
import EditTeamsScreen from "./src/screens/EditTeamsScreen";
import { RootStackParamList, RootTabParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_UP
  );
}

changeScreenOrientation();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ff0000",
        tabBarInactiveTintColor: "#CFCFCF",
      }}
      initialRouteName="Home"
    >
      <Tab.Group
        screenOptions={{
          headerStyle: {
            height: "auto",
            justifyContent: "center",
          },
          headerTitleStyle: {
            color: "#ffffff",
            fontWeight: "600",
          },
          tabBarStyle: {
            backgroundColor: "#000000",
            height: 90,
          },
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: false,
          headerTitle: () => <Logo />,
        }}
      >
        <Tab.Screen
          name="TeamsTab"
          component={TeamsScreen}
          options={({ navigation }) => ({
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{ paddingHorizontal: 18 }}
                  onPress={() => navigation.navigate("BuildTeam")}
                >
                  <Ionicons name="ios-add" size={38} color="#fff" />
                </TouchableOpacity>
              );
            },
            title: "Teams",
            tabBarIcon: ({ focused, color }) => {
              let materialIconName;
              materialIconName = focused ? "pokeball" : "pokeball";
              return (
                <MaterialCommunityIcons
                  name={materialIconName}
                  size={34}
                  style={{}}
                  color={color}
                />
              );
            },
            headerStyle: {
              backgroundColor: "#000000",
              borderBottomWidth: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              color: "#000000",
            },
            headerShown: false,
          })}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => {
              let ioniconName;
              ioniconName = focused ? "ios-home" : "home-outline";
              return <Ionicons name={ioniconName} size={38} color={color} />;
            },
            headerStyle: {
              backgroundColor: "#000000",
              borderBottomWidth: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              color: "#000000",
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={AdvancedSearchScreen}
          options={{
            title: "Search",
            tabBarIcon: ({ focused, color }) => {
              let ioniconName;
              ioniconName = focused ? "search-circle" : "search-circle-outline";
              return <Ionicons name={ioniconName} size={40} color={color} />;
            },
            headerStyle: {
              backgroundColor: "#000000",
              borderBottomWidth: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              color: "#000000",
            },
            tabBarIconStyle: {
              marginTop: 1,
            },
            headerShown: false,
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTitle: () => <Logo />,
          headerBackTitle: " ",
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
          <Stack.Screen
            name="Teams"
            component={TeamsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BuildTeam"
            component={BuildTeamsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EditTeam"
            component={EditTeamsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TeamDetail"
            component={TeamDetailScreen}
            options={({ navigation, route }) => ({
              headerRight: () => {
                return (
                  <TouchableOpacity
                    style={{}}
                    onPress={() =>
                      navigation.navigate("EditTeam", { id: route.params?.id })
                    }
                  >
                    <Ionicons
                      name="ios-create-outline"
                      size={32}
                      color="#fff"
                    />
                  </TouchableOpacity>
                );
              },
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="DetailModal"
            component={DetailModal}
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SecondaryDetailModal"
            component={SecondaryDetailModal}
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LocationDetailModal"
            component={LocationDetailModal}
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TypeDetailModal"
            component={TypeDetailModal}
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MoveDetailModal"
            component={MoveDetailModal}
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AbilityDetailModal"
            component={AbilityDetailModal}
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
