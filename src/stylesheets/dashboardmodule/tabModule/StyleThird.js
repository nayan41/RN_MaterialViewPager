import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import {normalize} from '../../StyleFont';

const StyleThird = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorWhiteBG,
  },
  safeViewContainer: {
    flex: 1,
    backgroundColor: Colors.colorWhiteBG,
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export {StyleThird};
