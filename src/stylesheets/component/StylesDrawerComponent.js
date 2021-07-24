import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import { normalize } from '../StyleFont';

const StylesDrawerComponent = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.colorBlueBG,
    height: hp('100%'),
  },
  menuContainer: {
    width: wp('70%'),
    flexDirection: 'row',
    marginVertical: hp('4%'),
    justifyContent: 'center',
  },
  menuTitleTextStyle: {
    color: 'white',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  menuItemTab: {
    flexDirection: 'row',
    paddingTop: wp('4.5%'),
    paddingBottom: wp('2.5%'),
    paddingLeft: wp('2%'),
  },
  menuItemRedTab: {
    flexDirection: 'row',
    paddingTop: wp('4.5%'),
    paddingBottom: wp('3.5%'),
    paddingLeft: wp('2%'),
    backgroundColor: Colors.colorPrimary,
  },

  profileImageMain: {
    height: wp('20%'),
    width: wp('20%'),
    resizeMode: 'cover',
    borderRadius: wp('30%'),
  },
  keyboardAwareView: {
    width: wp('100%'),
    height: hp('100%'),
  },
  imgTopDrawer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gradientDarkBlue,
  },
  imageBorder: {
    //  position: 'absolute',
    height: wp('37.5%'),
    width: wp('37.5%'),
    borderRadius: wp('30%'),
    borderColor: Colors.black,
    borderWidth: wp('0.5%'),
  },
  headerLogo: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('8%'),
    //backgroundColor: Colors.primaryColor,
    flexDirection: 'column',
  },

  menuItemContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
  menuItemTabLogout: {
    flexDirection: 'row',
    paddingTop: wp('5.5%'),
    paddingBottom: wp('8%'),
    paddingLeft: wp('4%'),
  },
  menuItemLeftIcon: {
    marginLeft: 10,
    height: wp('6%'),
    width: wp('6%'),
    //resizeMode: 'stretch',
    alignSelf: 'center',
  },

  drawerContent: {
    flex: 1,
    backgroundColor: Colors.black,
    alignContent: 'stretch',
  },

  drawerTitle: {
    alignSelf: 'center',
    fontFamily: 'system font',
    fontSize: normalize(18),
    marginLeft: wp('2%'),
    color: Colors.black,
  },
  separatorStyle: {
    height: hp('0.2%'),
    width: wp('75%'),
    marginTop: hp('4%'),
    marginBottom: hp('2%'),
    backgroundColor: Colors.grayCommonDark,
  },
  menuItemTitle: {
    fontFamily: 'system font',
    fontSize: normalize(14),
    color: Colors.black,
    paddingLeft: wp('5%'),
  },
  menuItemRedTitle: {
    fontSize: normalize(14),
    color: Colors.red,
    paddingLeft: wp('5%'),
  },
  textSettingContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: wp('4%'),
  },
  textSettingStyle: {
    color: Colors.colorPrimary,
    fontSize: normalize(14),
    textTransform: 'uppercase',
    letterSpacing: wp('0.4%'),
  },
  imgFavIconStyle: {
    width: wp('5.5%'),
    height: hp('5.5%'),
    resizeMode: 'contain',
  },
  textContainerViewAll: {
    width: wp('85%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  sepratorLineStyle: {
    backgroundColor: Colors.colorPrimary,
    height: hp('0.1%'),
    width: wp('70%'),
    alignSelf: 'flex-start',
    marginHorizontal: wp('5%'),
    marginVertical: hp('2.5%'),
  },
  alertmodelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  alertmodelBgContainer: {
    width: wp('90%'),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.68,
    elevation: 10,
  },
  alertmodelHeadTextStyle: {
    color: Colors.black,
    fontSize: normalize(16),
    marginHorizontal: hp('3%'),
    marginTop: hp('1.5%'),
  },
  alertmodelSubHeadText: {
    color: Colors.black,
    fontSize: normalize(13.5),
    marginHorizontal: hp('3%'),
    marginTop: hp('1%'),
  },
  okTextStyle: {
    color: Colors.black,
    fontSize: normalize(13),
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
export { StylesDrawerComponent };
