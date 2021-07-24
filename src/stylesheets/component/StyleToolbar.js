import { StyleSheet, Platform, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import { normalize } from '../StyleFont';

const StyleToolbar = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('7%'),
    backgroundColor: Colors.colorWhiteBG,
  },
  innerContainerStyle: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('7%'),
    alignItems: 'center',
    borderBottomColor: Colors.grayCommonDark,
    borderBottomWidth: hp('0.12%'),
  },
  drawerIconViewStyle: {
    flexGrow: 0.1,
    alignItems: 'center',
  },
  imageLeftStyle: {
    height: wp('6%'),
    width: wp('6%'),
  },
  titleViewStyle: {
    flex: 1,
  },
  titleTextStyle: {
    color: Colors.colorSecondary,
    fontSize: normalize(16.5),
    fontFamily: 'Poppins-Medium',
  },
  rightContainer: {
    flexGrow: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageStyleRightSub: {
    height: wp('6%'),
    width: wp('6%'),
  },
});

export { StyleToolbar };
