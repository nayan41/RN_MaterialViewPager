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
      selectedTab: 'Home',
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
            onPress={() => this.redirectToTab('Home')}
            style={StylesBottomTabComponent.subContainerStyle}>
            <Image
              style={StylesBottomTabComponent.iconStyle}
              source={
                selectedTab === 'Home'
                  ? require('../assets/icons/ic_home_active.png')
                  : require('../assets/icons/ic_home_inactive.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.redirectToTab('Survey')}
            style={StylesBottomTabComponent.subContainerStyle}>
            <Image
              style={StylesBottomTabComponent.iconStyle}
              source={
                selectedTab === 'Survey'
                  ? require('../assets/icons/ic_survey_active.png')
                  : require('../assets/icons/ic_survey_inactive.png')
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.redirectToTab('Favourite')}
            style={StylesBottomTabComponent.subContainerStyle}>
            <Image
              style={StylesBottomTabComponent.iconStyle}
              source={
                selectedTab === 'Favourite'
                  ? require('../assets/icons/ic_favorite_active.png')
                  : require('../assets/icons/ic_favorite_inactive.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.redirectToTab('Profile')}
            style={StylesBottomTabComponent.subContainerStyle}>
            <Image
              style={StylesBottomTabComponent.iconStyle}
              source={
                selectedTab === 'Profile'
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
