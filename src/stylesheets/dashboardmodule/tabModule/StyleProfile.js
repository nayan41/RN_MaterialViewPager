import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import { normalize } from '../../StyleFont';

const StyleProfile = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
  scrollContentContainer: {
    flex: 1,
  },
  headerLogo: {
    width: wp('100%'),
    borderBottomColor: Colors.colorPrimary,
    borderBottomWidth: hp('0.20%'),
    flexDirection: 'row',
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('3%'),
  },
  profileImageStyle: {
    width: wp('25%'),
    height: wp('25%'),
    alignSelf: 'center',
    borderColor: Colors.colorPrimary,
    borderWidth: hp('0.20%'),
    borderRadius: 100,
  },
  profileNameStyle: {
    flex: 1,
    color: Colors.colorPrimary,
    fontSize: normalize(14.5),
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
    paddingRight: wp('1%'),
  },
  textContainerStyleSub: {
    borderBottomColor: Colors.colorWhiteBG,
    borderBottomWidth: hp('0.20%'),
  },
  textContainerViewAll: {
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('0.5%'),
    paddingHorizontal: wp('4%'),
  },
  textSettingContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: wp('4%'),
  },
  textSettingStyle: {
    flex: 1,
    color: Colors.black,
    fontSize: normalize(13),
    fontFamily: 'Poppins-Regular',
  },
  imgNextIconStyle: {
    width: wp('6%'),
    height: hp('6%'),
    resizeMode: 'contain',
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
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.68,
    elevation: 5,
  },
  alertmodelHeadTextStyle: {
    backgroundColor: Colors.colorPrimary,
    color: Colors.white,
    fontSize: normalize(15.5),
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('2%'),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  alertmodelSubHeadText: {
    color: Colors.black,
    fontSize: normalize(13),
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: wp('5%'),
    marginTop: hp('1%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    width: wp('40%'),
    marginVertical: hp('1.5%'),
    marginRight: wp('5%'),
  },
  yesButtonStyle: {
    backgroundColor: Colors.colorPrimary,
    alignSelf: 'flex-start',
    borderRadius: 5,
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('0.5%'),
    marginRight: wp('2%'),
  },
  noButtonStyle: {
    alignSelf: 'flex-start',
    borderRadius: 5,
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('0.5%'),
    backgroundColor: Colors.white,
    borderColor: Colors.greyDark2,
    borderWidth: 1,
  },
  okTextStyle: {
    color: Colors.greyDark,
    fontSize: normalize(13.5),
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
    padding: wp('1.5%'),
  },
  textVersionContainer: {
    marginVertical: hp('1%'),
    alignItems: 'center',
  },
  textVersionStyle: {
    color: Colors.grey,
    fontSize: normalize(13),
    fontFamily: 'Poppins-Regular',
  },
  textMainContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    padding: wp('1%'),
  },
  textSubContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp('0.5%'),
    paddingHorizontal: wp('1%'),
  },
  progressLineStyle: {
    flex: 1,
    flexDirection: 'row',
    height: hp('0.5%'),
    backgroundColor: '#e0e0e0',
    borderRadius: 100,
    marginHorizontal: wp('1%'),
  },
  imgCPStyle: {
    width: wp('6%'),
    height: wp('6%'),
    alignSelf: 'center',
  },
  textEarnPointStyle: {
    color: Colors.black,
    fontSize: normalize(12),
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
  },
  textStartEndPointStyle: {
    color: Colors.black,
    fontSize: normalize(11.5),
    fontFamily: 'Poppins-Regular',
  },
});
export { StyleProfile };
