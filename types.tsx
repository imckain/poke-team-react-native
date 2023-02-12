import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  TabNavigator: NavigatorScreenParams<RootTabParamList> | undefined;
  Home: undefined;
  Teams: undefined;
  BuildTeam: undefined;
  EditTeam: undefined;
  TeamDetail: { id: number };
  About: undefined;
  DetailModal: undefined;
  SecondaryDetailModal: undefined;
  LocationDetailModal: undefined;
  TypeDetailModal: { results: any[] };
  MoveDetailModal: undefined;
  AbilityDetailModal: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  TeamsTab: undefined;
  Search: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
