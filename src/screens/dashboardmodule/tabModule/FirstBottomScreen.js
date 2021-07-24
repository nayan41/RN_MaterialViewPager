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
import {StyleFirst} from '../../../stylesheets';

class FirstBottomScreen extends Component {
  constructor(props) {
    super(props);

    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      DeviceEventEmitter.emit('TabChange', {screen: 'FirstBottomScreen'});
    });
  }

  handleBackButtonClick = () => {
    this.props.navigation.goBack(null);
    return true;
  };

  render() {
    return (
      <SafeAreaView style={StyleFirst.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

        <MyToolbar titleName={'First Screen'} />

        <View style={StyleFirst.container}>
          <Text>First Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export {FirstBottomScreen};
