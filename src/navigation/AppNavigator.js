import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {SplashScreen} from '../screens/dashboardmodule';
import DashboardNavigator from './DashboardNavigator';

export default createAppContainer(
  createSwitchNavigator({
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
    Dashboard: DashboardNavigator,
  }),
);
