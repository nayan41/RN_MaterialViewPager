import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  DeviceEventEmitter,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {normalize, StyleToolbar} from '../stylesheets';
import Colors from '../constants/Colors';

import PropTypes from 'prop-types';

class MyToolbar extends Component {
  constructor(props) {
    super(props);
    //For text size increase from setting
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;

    this.state = {
      notifcationCount: 0,
      isFocused: false,
    };
  }

  componentDidMount() {
    this.eventListener = DeviceEventEmitter.addListener(
      'NotificationCount',
      this.handleNotificationCountEvent,
    );
  }

  handleNotificationCountEvent = event => {
    this.setState({notifcationCount: event.count});
  };

  componentWillUnmount() {
    this._animatedIsFocused = new Animated.Value(
      this.props.value === '' ? 0 : 1,
    );
    this.eventListener.remove();
  }

  render() {
    const {
      leftImage,
      titleName,
      rightFirstImage,
      rightSecondImage,
      rightFirstImageStyle,
      rightSecondImageStyle,
      onLeftImagePress,
      onRightFirstImagePress,
      onRightSecondImagePress,
      containerStyle,
    } = this.props;

    return (
      <View style={StyleToolbar.containerView}>
        <View style={[StyleToolbar.innerContainerStyle, containerStyle]}>
          {/* <View style={StyleToolbar.drawerIconViewStyle}>
            <TouchableOpacity onPress={onLeftImagePress}>
              <Image style={StyleToolbar.imageLeftStyle} source={leftImage} />
            </TouchableOpacity>
          </View> */}
          <View style={StyleToolbar.titleViewStyle}>
            <Text
              style={StyleToolbar.titleTextStyle}
              allowFontScaling={false}
              numberOfLines={1}>
              {titleName}
            </Text>
          </View>

          <View style={StyleToolbar.rightContainer}>
            <TouchableOpacity
              onPress={onRightFirstImagePress}
              activeOpacity={0.5}>
              <Image
                style={StyleToolbar.imageStyleRightSub}
                source={rightFirstImage}
              />
            </TouchableOpacity>
            {rightSecondImage != null && (
              <TouchableOpacity
                onPress={onRightSecondImagePress}
                activeOpacity={0.5}>
                <Image
                  style={StyleToolbar.imageStyleRightSub}
                  source={rightSecondImage}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}
export {MyToolbar};

MyToolbar.defaultProps = {
  containerStyle: {},
};

MyToolbar.propTypes = {
  containerStyle: PropTypes.object,
};
