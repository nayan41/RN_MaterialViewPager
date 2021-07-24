import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import { normalize } from '../StyleFont';

const StylesEditText = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  subContainer: {
    marginTop: hp('2%'),
  },
  editTextContainer: {
    flexDirection: 'row',
    borderColor: Colors.greyDark2,
    borderWidth: 1,
    //backgroundColor: Colors.white,
    alignItems: 'center',
  },
  iconContainer: {
    height: wp('5.%'),
    width: wp('5.5%'),
  },

  iconRightContainer: {
    height: wp('5.%'),
    width: wp('5.5%'),
  },
  hintTextStyle: {
    color: Colors.greyDark,
    fontSize: normalize(12.5),
    fontFamily: 'Poppins-Regular',
  },

  editTextStyle: {
    width: wp('85%'),
    fontSize: normalize(13.5),
    color: Colors.black,
    fontFamily: 'Poppins-Regular',
    paddingVertical: hp('1%'),
  },
});

export { StylesEditText };
