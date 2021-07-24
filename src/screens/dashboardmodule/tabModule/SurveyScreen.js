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
import {StyleSurvey} from '../../../stylesheets';

class SurveyScreen extends Component {
  constructor(props) {
    super(props);

    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      DeviceEventEmitter.emit('TabChange', {
        screen: 'Survey',
      });
    });
  }

  render() {
    return (
      <SafeAreaView style={StyleSurvey.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

        <MyToolbar
          titleName={'Filled Survey'}
          leftImage={require('../../../assets/icons/ic_cp_logo.png')}
        />

        <View style={StyleSurvey.container}>
          <Text>Filled Survey</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export {SurveyScreen};
