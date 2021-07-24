import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import { normalize } from '../../StyleFont';

const StyleSurvey = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  editTextContainer: {
    width: wp('95%'),
    height: hp('6%'),
    flexDirection: 'row',
    borderRadius: wp('2%'),
    backgroundColor: Colors.grayCommonDark,
    alignItems: 'center',
  },
  editTextStyle: {
    flex: 1,
    borderTopLeftRadius: wp('2%'),
    borderBottomLeftRadius: wp('2%'),
    flexDirection: 'row',
    fontSize: normalize(13),
    color: Colors.black,
    paddingHorizontal: wp('2%'),
  },
  imgCloseIconStyle: {
    height: wp('5%'),
    width: wp('5%'),
    marginHorizontal: wp('2%'),
    resizeMode: 'contain',
  },
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modelBgContainer: {
    width: wp('95%'),
    backgroundColor: 'white',
    borderRadius: wp('0.7%'),
  },
  firstMainContainer: {
    flexDirection: 'row',
    marginVertical: hp('2%'),
    width: wp('90%'),
  },
  secondMainContainer: {
    marginVertical: hp('1%'),
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  winnerTrophyStyle: {
    height: wp('20%'),
    width: wp('20%'),
  },
  imageStyleLeftSub: {
    height: wp('5%'),
    width: wp('5%'),
    marginRight: wp('2%'),
  },
  textWinnerTitleStyle: {
    flexGrow: 1.2,
    color: Colors.grey,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(13.5),
    flexWrap: 'wrap',
  },
  closeContainerStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    padding: hp('0.5%'),
    position: 'absolute',
    right: -5,
  },
  listMainContainer: {
    marginVertical: hp('1%'),
    flexDirection: 'row',
    width: wp('90%'),
  },
  imagePointStyle: {
    height: wp('2%'),
    width: wp('2%'),
    margin: hp('1%'),
  },
  termConditionTextStyle: {
    fontSize: normalize(12.5),
    flex: 1,
    paddingHorizontal: wp('0.5%'),
  },
  textNoWinnerTermCondition: {
    fontSize: normalize(12.5),
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
export { StyleSurvey };
