import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {goToFirstBottomScreen} from '../navigation/NavActions';
import {StylesSplash} from '../stylesheets';

class SplashScreen extends Component {
  constructor() {
    super();
    //For text size increase from setting
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    setTimeout(() => {
      goToFirstBottomScreen(this.props.navigation);
    }, 1500);
  }

  render() {
    return (
      <SafeAreaView style={StylesSplash.container}>
        <StatusBar hidden={Platform.OS === 'ios' ? false : true} />
        <View style={StylesSplash.bgContainer}>
          <ImageBackground
            style={StylesSplash.bgContainer}
            source={require('../assets/background/ic_splash_icon_1.png')}
            // resizeMode='cover'
            resizeMode="cover"></ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}
export {SplashScreen};
