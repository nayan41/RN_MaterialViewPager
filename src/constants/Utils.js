import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import Snackbar from 'react-native-snackbar';
import {goToLogin} from '../navigation/NavActions';
import Colors from './Colors';

export const fireSnackBar = message => {
  if (message) {
    setTimeout(() => {
      Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.colorPrimary,
        textColor: 'white',
        action: {
          numberOfLines: 3,
        },
      });
    }, 400);
  }
};

export const isEmpty = data => {
  if (data !== null && data !== '' && data !== undefined) {
    return false;
  }
  return true;
};

export const isValidURL = string => {
  if (
    string.match(
      /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
    )
  ) {
    return false;
  }
  return true;
};

//Get user fcm token
export const getToken = async () => {
  let fcmToken;
  if (!fcmToken) {
    fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('@@@FCMToken utils' + fcmToken);
      AsyncStorage.setItem('fcm_token', fcmToken);
      // global.gcmID = fcmToken;
      // AsyncStorage.getItem('isLoggedIn').then((val) => {
      //   if (val === 'true') {
      //     AsyncStorage.getItem('username').then((uID) => {
      //       updateFCMToken(fcmToken, uID).then((res) => {
      //         console.log('FCM token Update', res);
      //       });
      //     });
      //   }
      // });
      return fcmToken;
    }
  }
};

//logoutUser
export const logoutUser = (context, prp) => {
  context.setToInitState();
  AsyncStorage.clear();
  goToLogin(prp);
};
