import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StylesBottomTabComponent} from '../stylesheets';

class BottomTabComponent extends Component {
  constructor(props) {
    super(props);
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;

    this.state = {
      selectedTab: 'FirstBottomScreen',
    };
  }

  componentDidMount() {
    this.eventListener = DeviceEventEmitter.addListener(
      'TabChange',
      this.handleEvent,
    );
  }

  handleEvent = event => {
    this.setState({selectedTab: event.screen});
  };

  componentWillUnmount() {
    this.eventListener.remove();
  }

  redirectToTab(tabName) {
    this.setState({selectedTab: tabName});
    this.props.navigation.navigate(tabName);
  }

  render() {
    var {selectedTab} = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <View style={StylesBottomTabComponent.container}>
          <TouchableOpacity
            onPress={() => this.redirectToTab('FirstBottomScreen')}
            style={StylesBottomTabComponent.subContainerStyle}>
            <Image
              style={StylesBottomTabComponent.iconStyle}
              source={
                selectedTab === 'FirstBottomScreen'
                  ? require('../assets/icons/ic_home_active.png')
                  : require('../assets/icons/ic_home_inactive.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.redirectToTab('SecondBottomScreen')}
            style={StylesBottomTabComponent.subContainerStyle}>
            <Image
              style={StylesBottomTabComponent.iconStyle}
              source={
                selectedTab === 'SecondBottomScreen'
                  ? require('../assets/icons/ic_survey_active.png')
                  : require('../assets/icons/ic_survey_inactive.png')
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.redirectToTab('ThirdBottomScreen')}
            style={StylesBottomTabComponent.subContainerStyle}>
            <Image
              style={StylesBottomTabComponent.iconStyle}
              source={
                selectedTab === 'ThirdBottomScreen'
                  ? require('../assets/icons/ic_favorite_active.png')
                  : require('../assets/icons/ic_favorite_inactive.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.redirectToTab('FourthBottomScreen')}
            style={StylesBottomTabComponent.subContainerStyle}>
            <Image
              style={StylesBottomTabComponent.iconStyle}
              source={
                selectedTab === 'FourthBottomScreen'
                  ? require('../assets/icons/ic_profile_active.png')
                  : require('../assets/icons/ic_profile_Inactive.png.png')
              }
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default BottomTabComponent;
