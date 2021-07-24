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
import {StyleSecond} from '../../../stylesheets';

class SecondBottomScreen extends Component {
  constructor(props) {
    super(props);

    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      DeviceEventEmitter.emit('TabChange', {
        screen: 'SecondBottomScreen',
      });
    });
  }

  render() {
    return (
      <SafeAreaView style={StyleSecond.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

        <MyToolbar titleName={'Second Screen'} />

        <View style={StyleSecond.container}>
          <Text>Second Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export {SecondBottomScreen};
