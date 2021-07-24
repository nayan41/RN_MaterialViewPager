import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import { normalize } from '../../StyleFont';

const StyleHome = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  cardContainer: {
    width: wp('100%'),
    minHeight: hp('25%'),
    backgroundColor: Colors.white,
    marginVertical: hp('0.5%'),
  },
  cardTopContainer: {
    width: wp('100%'),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('1.5%'),
    borderBottomColor: Colors.grayCommonDark,
    borderBottomWidth: hp('0.15%'),
  },
  imgProfileStyle: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: 100,
  },
  textSurveyCreatorStyle: {
    fontSize: normalize(15),
    color: Colors.colorSecondary,
    fontFamily: 'Poppins-Medium',
  },
  textDateStyle: {
    fontSize: normalize(12),
    color: Colors.greyDark2,
    fontFamily: 'Poppins-Regular',
  },
  textSurveyNameStyle: {
    flexWrap: 'wrap',
    fontSize: normalize(17),
    color: Colors.black,
    paddingVertical: hp('0.5%'),
    fontFamily: 'Poppins-Regular',
  },
  textSurveyDetailsStyle: {
    textAlign: 'auto',
    fontSize: normalize(13),
    fontFamily: 'Poppins-Regular',
    color: Colors.greyDark,
  },
  cardBottomContainer: {
    width: wp('100%'),
    flexDirection: 'row',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('1%'),
    justifyContent: 'space-between',
  },
  textViewSurveyTextStyle: {
    fontSize: normalize(14),
    color: Colors.colorPrimary,
    fontFamily: 'Poppins-Regular',
  },
  imgIconStyle: {
    width: wp('6.5%'),
    height: wp('6.5%'),
  },
  imgCupIconStyle: {
    width: wp('7%'),
    height: wp('7%'),
  },
  textAmountStyle: {
    alignSelf: 'center',
    fontSize: normalize(14),
    color: Colors.greyDark,
    paddingHorizontal: wp('1%'),
    fontFamily: 'Poppins-Regular',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLastBottomContainer: {
    width: wp('100%'),
    flexDirection: 'row',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('1%'),
    justifyContent: 'space-between',
    borderTopColor: Colors.grayCommonDark,
    borderTopWidth: hp('0.12%'),
  },
  likeTextStyle: {
    alignSelf: 'center',
    fontSize: normalize(14),
    fontFamily: 'Poppins-Regular',
    color: Colors.greyDark,
    paddingHorizontal: wp('1%'),
  },
  commentTextStyle: {
    alignSelf: 'center',
    fontSize: normalize(14),
    fontFamily: 'Poppins-Regular',
    color: Colors.greyDark,
    paddingHorizontal: wp('1%'),
  },
  surveyorTextStyle: {
    alignSelf: 'center',
    fontSize: normalize(14),
    fontFamily: 'Poppins-Regular',
    color: Colors.greyDark,
    paddingHorizontal: wp('1%'),
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modelContainer: {
    flex: 1,
    minHeight: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modelBgContainer: {
    width: wp('95%'),
    backgroundColor: 'white',
    borderRadius: wp('0.7%'),
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
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
    minHeight: hp('20%'),
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
    right: -4,
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
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
  reportmodelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  reportmodelBgContainer: {
    width: wp('90%'),
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.68,
    elevation: 5,
  },
  reportmodelHeadTextStyle: {
    backgroundColor: Colors.colorPrimary,
    color: Colors.white,
    textAlign: 'center',
    fontSize: normalize(15.5),
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('2%'),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  reportmodelSubHeadText: {
    color: Colors.black,
    fontSize: normalize(13),
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: wp('5%'),
    marginTop: hp('1%'),
  },
  reportCloseContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    padding: hp('0.5%'),
    position: 'absolute',
    right: 0,
  },
  reportEditTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(13),
    width: wp('80%'),
    height: hp('15%'),
    borderRadius: wp('1%'),
    marginVertical: hp('1.5%'),
    borderWidth: 1,
    borderColor: Colors.grayCommonDark,
    overflow: 'hidden',
    textAlignVertical: 'top',
    alignSelf: 'center',
  },
  reportSubmitStyle: {
    backgroundColor: Colors.colorPrimary,
    alignSelf: 'flex-start',
    borderRadius: 5,
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('1%'),
    marginVertical: hp('1.5%'),
    marginLeft: wp('5%'),
  },
  reportSubmitTextStyle: {
    color: Colors.white,
    fontSize: normalize(13.5),
    fontFamily: 'Poppins-Regular',
  },
  contestInformationHeadStyle: {
    color: Colors.colorPrimary,
    fontSize: normalize(13.5),
    fontFamily: 'Poppins-Medium',
  },
  contestInformationSubStyle: {
    fontSize: normalize(12.5),
    fontFamily: 'Poppins-Regular',
  },

  priceModelContainer: {
    flex: 1,
    minHeight: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.4)',
  },
  priceModelBgContainer: {
    width: wp('95%'),
    backgroundColor: 'white',
    borderRadius: wp('0.7%'),
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  pricefirstMainContainer: {
    flexDirection: 'row',
    marginVertical: hp('2%'),
    width: wp('90%'),
  },
  pricesecondMainContainer: {
    marginVertical: hp('1%'),
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    minHeight: hp('20%'),
  },

  winningMainContainer: {
    width: wp('95%'),
    flexDirection: 'column',
    marginVertical: hp('0.5%'),
  },
  winningTitleStyle: {
    color: Colors.colorPrimary,
    fontSize: normalize(13.5),
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
    textAlign: 'center',
  },
  winningSubTitleStyle: {
    color: Colors.colorPrimary,
    fontSize: normalize(12.5),
    fontFamily: 'Poppins-Medium',
  },
  winningItemTextStyle: {
    color: Colors.colorSecondary,
    fontSize: normalize(11),
    fontFamily: 'Poppins-Regular',
  },
  incrementContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  winningItemIncrementTextStyle: {
    color: Colors.colorSecondary,
    fontSize: normalize(11),
    fontFamily: 'Poppins-Regular',
    flex: 0.5,
    textAlign: 'center',
  },
  incrementPriceListStyle: {
    marginVertical: hp('0.7%'),
    borderTopWidth: hp('0.1%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  indexPriceTextStyle: {
    flex: 0.2,
    color: Colors.colorPrimary,
    fontSize: normalize(12.5),
    fontFamily: 'Poppins-Medium',
    marginHorizontal: wp('1%'),
  },
});

export { StyleHome };
