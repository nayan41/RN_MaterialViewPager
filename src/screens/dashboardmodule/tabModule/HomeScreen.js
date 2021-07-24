import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {MyToolbar} from '../../../component';
import Colors from '../../../constants/Colors';
import {StyleHome} from '../../../stylesheets';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      DeviceEventEmitter.emit('TabChange', {screen: 'Home'});
    });
  }

  handleBackButtonClick = () => {
    this.props.navigation.goBack(null);
    return true;
  };

  render() {
    return (
      <SafeAreaView style={StyleHome.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

        <MyToolbar
          titleName={'HomeScreen'}
          leftImage={require('../../../assets/icons/ic_cp_logo.png')}
        />

        <View style={StyleHome.container}>
          <Text>HomeScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export {HomeScreen};
