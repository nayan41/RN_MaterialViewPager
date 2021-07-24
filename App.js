import React, {Component} from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import AppNavigator from './src/navigation/AppNavigator';

class App extends Component {
  render() {
    return (
      <MenuProvider>
        <AppNavigator />
      </MenuProvider>
    );
  }
}
export default App;
