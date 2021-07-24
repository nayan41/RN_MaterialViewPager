import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {MyToolbar} from '../../../component';
import Colors from '../../../constants/Colors';
import {StyleProfile} from '../../../stylesheets';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    if (TextInput.defaultProps == null) TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      DeviceEventEmitter.emit('TabChange', {
        screen: 'Profile',
      });
    });
  }

  render() {
    return (
      <SafeAreaView style={StyleProfile.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.colorPrimary}
        />
        <MyToolbar
          titleName={'ProfileScreen'}
          leftImage={require('../../../assets/icons/ic_back.png')}
        />
        <View style={StyleProfile.container}>
          <Text>ProfileScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export {ProfileScreen};
