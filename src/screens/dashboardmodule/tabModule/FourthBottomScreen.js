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
import {StyleFourth} from '../../../stylesheets';

class FourthBottomScreen extends Component {
  constructor(props) {
    super(props);
    if (TextInput.defaultProps == null) TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      DeviceEventEmitter.emit('TabChange', {
        screen: 'FourthBottomScreen',
      });
    });
  }

  render() {
    return (
      <SafeAreaView style={StyleFourth.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.colorPrimary}
        />
        <MyToolbar
          titleName={'Fourth Screen'}
          leftImage={require('../../../assets/icons/ic_back.png')}
        />
        <View style={StyleFourth.container}>
          <Text>Fourth Screens</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export {FourthBottomScreen};
