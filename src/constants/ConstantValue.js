// Reg Ex for Validate Email & Password
const regExpValidEmailID =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regExpPassowrd =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/;
const regExpPhoneNumber = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
const regExpUSPhoneNumber =
  /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})( x\d{4})?$/;
//const regExpUSPhoneNumber = /(?:^|\D)\(([2-9])(?:\d(?!\1)\d|(?!\1)\d\d)\)\s*[2-9]\d{2}-\d{4}/;
const regExpOnlyNumber = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const regExpOnlyNumberAllowed = /^[0-9]*$/;
const regExpOnlyCharacter = /^(?:[A-Za-z]+|)$/;
const regExpOnlyCharacterWithSpace = /^[A-Za-z\s]+$/;
const regExpIFSCcode = /^[A-Za-z]{4}0[A-Z0-9]{6}$/;
const regExpCheckAll000 =
  /^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$/;

//Payment card reg
const regExpVisaCard = /^4[0-9]{4,}$/;
const regExpMasterCard =
  /^5[1-5][0-9]{2,}|222[1-9][0-9]{1,}|22[3-9][0-9]{1,}|2[3-6][0-9]{1,}|27[01][0-9]{2,}|2720[0-9]{3,}$/;
const regExpAmericanExpressCard = /^3[47][0-9]{2,}$/;
const regExpDinersClubCard = /^3(?:0[0-5]|[68][0-9])[0-9]{1,}$/;
const regExpDiscoverCard = /^6(?:011|5[0-9]{1})[0-9]{1,}$/;
const regExpJCBCard = /^(?:2131|1800|35[0-9]{1})[0-9]{1,}$/;

// Response code in error param
const USR_NOT_VERIFIED_ERROR = 10006;
const USR_DISABLE_ERROR = 10010;
const USR_DISABLE_ERROR_MSG = 'Unauthenticated';
const USER_DISABLE_SHOW_ERROR_MSG = 'Your session is expired';

// Request type for send Verification Type
const USER_ACCOUNT_VERIFICATION = 'account_verification';
const USER_PHONE_VERIFICATION_TYPE = 'phone_verification';
const USER_FORGOT_PASSWORD_VERIFICATION = 'forgot_password';
const USER_EMAIL_VERIFICATION_TYPE = 'Email';
const USER_PHONENUMBER_VERIFICATION_TYPE = 'Phone';
const USER_PHONENUMBER_LENGTH = 10;

const CURRENCY = 'usd';

export default {
  regExpValidEmailID,
  regExpPassowrd,
  regExpPhoneNumber,
  regExpUSPhoneNumber,
  regExpOnlyNumber,
  regExpIFSCcode,
  regExpCheckAll000,
  USR_NOT_VERIFIED_ERROR,
  USER_ACCOUNT_VERIFICATION,
  USER_FORGOT_PASSWORD_VERIFICATION,
  USER_EMAIL_VERIFICATION_TYPE,
  USER_PHONENUMBER_VERIFICATION_TYPE,
  USER_PHONENUMBER_LENGTH,
  USER_PHONE_VERIFICATION_TYPE,
  regExpOnlyCharacter,
  regExpOnlyCharacterWithSpace,
  USR_DISABLE_ERROR,
  USR_DISABLE_ERROR_MSG,
  USER_DISABLE_SHOW_ERROR_MSG,
  regExpOnlyNumberAllowed,
  CURRENCY,
  regExpVisaCard,
  regExpAmericanExpressCard,
  regExpMasterCard,
  regExpDiscoverCard,
  regExpJCBCard,
  regExpDinersClubCard,
};
