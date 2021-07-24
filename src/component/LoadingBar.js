import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../constants/Colors';
import { normalize } from '../stylesheets';

class LoadingBar extends Component {
  constructor(props) {
    super(props);

    //For text size increase from setting
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    this.state = { isLoading: false };
  }

  render() {
    const { isLoading, ...props } = this.props;

    return (
      <View style={styles.modelContainer}>
        <Modal
          visible={isLoading}
          animationType='fade'
          transparent={true}
          onOrientationChange={'portrait'}
        >
          <View style={styles.modelSubContainer}>
            <View style={styles.modelBgContainer}>
              <ActivityIndicator size='large' color={Colors.colorPrimary} />
              <Text
                style={styles.pleaseWaitTextStyle}
                {...props}
                allowFontScaling={false}
              >
                Please Wait...
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export { LoadingBar };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modelSubContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelBgContainer: {
    backgroundColor: 'white',
    padding: 10,
    height: hp('10%'),
    elevation: 10,
    borderRadius: 5,
    width: wp('80%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  pleaseWaitTextStyle: {
    fontSize: normalize(13),
    fontFamily: 'Roboto',
    marginLeft: wp('5%'),
  },
});
