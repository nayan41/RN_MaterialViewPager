import { StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StylesSplash = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgContainer: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: wp('40%'),
    height: wp('40%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoViewContainer: { position: 'absolute', zIndex: 5 },
});

export { StylesSplash };
