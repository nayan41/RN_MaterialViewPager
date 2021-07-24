import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BottomTabComponent from '../component/BottomTabComponent';
import {
  FavouriteScreen,
  HomeScreen,
  ProfileScreen,
  SurveyScreen,
} from '../screens/dashboardmodule';

//For Bottom Tab Navigation
const AppBottomTabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Survey: {
      screen: SurveyScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Favourite: {
      screen: FavouriteScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: props => <BottomTabComponent {...props} />,
    tabBarPosition: 'bottom',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppStackNavigation = createStackNavigator(
  {
    DashboardTab: {
      screen: AppBottomTabNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'DashboardTab',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(AppStackNavigation);
