import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BottomTabComponent from '../component/BottomTabComponent';
import {
  ThirdBottomScreen,
  FirstBottomScreen,
  FourthBottomScreen,
  SecondBottomScreen,
} from '../screens/dashboardmodule';

//For Bottom Tab Navigation
const AppBottomTabNavigation = createBottomTabNavigator(
  {
    FirstBottomScreen: {
      screen: FirstBottomScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SecondBottomScreen: {
      screen: SecondBottomScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ThirdBottomScreen: {
      screen: ThirdBottomScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    FourthBottomScreen: {
      screen: FourthBottomScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'FirstBottomScreen',
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
