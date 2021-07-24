import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import { normalize } from '../../StyleFont';

const StyleFavorate = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorWhiteBG,
  },
  safeViewContainer: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: Colors.colorWhiteBG,
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  scrollContentContainer: {
    flex: 1,
  },
  mainContainer: {
    width: wp('100%'),
    backgroundColor: Colors.white,
    marginVertical: hp('1%'),
  },
  firstStyleContainer: {
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('0.3%'),
  },
  progressBarStyle: {
    width: wp('100%'),
    height: hp('0.3%'),
    backgroundColor: Colors.progressBar,
  },
  surveyNameStyle: {
    flex: 1,
    alignSelf: 'center',
    flexWrap: 'wrap',
    fontSize: normalize(14),
    color: Colors.black,
    fontFamily: 'Poppins-Regular',
  },
  surveyDateStyle: {
    alignSelf: 'center',
    fontSize: normalize(11),
    color: Colors.greyDark,
    fontFamily: 'Poppins-Regular',
  },
  secondStyleContainer: {
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('0.3%'),
  },
  thirdStyleContainer: {
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('0.3%'),
  },
  thirdSubStyleContainer: {
    flexDirection: 'row',
    flexGrow: 0.07,
    justifyContent: 'space-between',
  },
  textHintSurveyStyle: {
    alignSelf: 'center',
    fontSize: normalize(12),
    color: Colors.greyDark,
    fontFamily: 'Poppins-Regular',
  },
  textSurveyStyle: {
    alignSelf: 'center',
    fontSize: normalize(12),
    color: Colors.black,
    fontFamily: 'Poppins-Regular',
  },
  textSurveyStatusStyle: {
    alignSelf: 'center',
    fontSize: normalize(12.5),
    color: Colors.red,
    fontFamily: 'Poppins-Regular',
  },
  viewSurveyTextStyle: {
    fontSize: normalize(12),
    color: Colors.colorPrimary,
    fontFamily: 'Poppins-Regular',
  },
  imgLeftStyle: {
    width: wp('5.5%'),
    height: wp('5.5%'),
  },
  imgRightStyle: {
    width: wp('6%'),
    height: wp('6%'),
    resizeMode: 'contain',
  },
});

export { StyleFavorate };
