import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import {normalize} from '../StyleFont';

const StylesBottomTabComponent = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
    borderTopColor: Colors.grayCommonDark,
    borderTopWidth: 0.2,
    shadowColor: Colors.colorPrimaryLight,
  },
  keyboardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.colorWhiteBG,
  },
  tabItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  labelStyleNormal: {
    fontSize: normalize(12),
    padding: 0,
    fontFamily: 'system font',
    color: Colors.tabBarIconUnSelected,
  },
  labelStyleSelected: {
    color: Colors.tabBarIconSelected,
    fontSize: normalize(12),
    padding: 0,
    fontFamily: 'system font',
  },
  tabBarOptionStyle: {
    backgroundColor: Colors.tabBar,
    height: hp('6%'),
    borderTopWidth: 1,
    borderTopColor: Colors.tabBar,
    elevation: 10,
  },
  iconStyle: {
    height: wp('7%'),
    width: wp('7%'),
  },

  counterView: {
    position: 'absolute',
    right: 0,
    top: -4,
    zIndex: 10,
    borderRadius: wp('2%'),
    width: wp('3%'),
    height: wp('3%'),
    backgroundColor: 'red',
    alignContent: 'center',
  },
  counterTextView: {
    textAlign: 'center',
    fontSize: normalize(8),
    color: 'white',
  },
  subContainerStyle: {
    padding: wp('1%'),
  },
});

export {StylesBottomTabComponent};
