const BaseUrl = 'https://contestpartner.com/api/';
const StripeBaseUrl = 'https://api.stripe.com/v1/';

//User Auth
export const URL_USER_LOGIN = BaseUrl + 'login';
export const URL_USER_SIGN_UP_REQUEST = BaseUrl + 'user_register';
export const URL_USER_RESEND_VERIFICATION_LINK =
  BaseUrl + 'resend_verification_link';
export const URL_USER_FORGOT_PASSWORD_REQUEST = BaseUrl + 'forgot_password';
export const URL_USER_VERIFICATION_REQUEST_SEND =
  BaseUrl + 'send_verification_code';
export const URL_USER_OTP_VERIFICATION = BaseUrl + 'otp_verification';
export const URL_USER_RESET_PASSWORD_REQUEST = BaseUrl + 'reset_new_password';
export const URL_USER_CHANGE_PASSWORD_REQUEST = BaseUrl + 'change_password';
export const URL_USER_LOGOUT = BaseUrl + 'logout';

// Get and Selected Interest
export const URL_GET_INTEREST = BaseUrl + 'get_interest';
export const URL_SELECTED_INTEREST = BaseUrl + 'select_interest';

// TimeLine
export const URL_GET_TIMELINE_LIST = BaseUrl + 'timeline';
export const URL_GET_SURVEY_WINNER_TERN_CONDITION =
  BaseUrl + 'get_survey_winner_term_condition';
export const URL_TIMELINE_SURVEY_LIKE_DISLIKE = BaseUrl + 'survey_like_dislike';
export const URL_GET_TIMELINE_SURVEY_COMMENTS = BaseUrl + 'get_survey_comments';
export const URL_ADD_SURVEY_COMMENTS = BaseUrl + 'add_survey_comment';
export const URL_REMOVE_SURVEY_COMMENTS = BaseUrl + 'remove_survey_comment';

// Survey List
export const URL_GET_FILLED_SERVEY_LIST = BaseUrl + 'get_filled_survey_list';
export const URL_GET_FAVOURITE_SERVEY_LIST = BaseUrl + 'get_favorite_survey';
export const URL_FAVOURITE_SURVEY = BaseUrl + 'favorite_survey';

export const URL_GET_SURVEY_QUESTION = BaseUrl + 'get_survey';
export const URL_POST_SURVEY_QUESTION_BY_USER = BaseUrl + 'fill_survey_by_user';
export const URL_POST_SAVE_DRAFT_SURVEY_BY_USER = BaseUrl + 'save_survey_draft';
export const URL_GET_FILL_SURVEY_INFO = BaseUrl + 'fill_survey_info';

//User Profile Setting
export const URL_GET_USER_PROFILE = BaseUrl + 'get_profile_details';
export const URL_USER_UPADATE_PROFILE = BaseUrl + 'update_profile_details';
export const URL_USER_UPADATE_PROFILE_PICTURE =
  BaseUrl + 'update_profile_photo';

// Subscription
export const URL_GET_SUBSCRIPTION_PLAN = BaseUrl + 'get_subscription_plan';
export const URL_SET_SUBSCRIPTION_PLAN = BaseUrl + 'save_subscription_plan';
export const URL_CANCEL_SUBSCRIPTION_PLAN = BaseUrl + 'cancel_subscription';

// Transaction
export const URL_GET_TRANSACTION = BaseUrl + 'get_transaction';
export const URL_GET_WALLETS = BaseUrl + 'get_wallet';
export const URL_WALLETS_WITHDRAWAL_REQUEST =
  BaseUrl + 'wallet_withdrawal_request';
export const URL_WALLETS_CANCEL_WITHDRAWAL_REQUEST =
  BaseUrl + 'cancel_withdrawal_request';

export const URL_GET_USER_EARN_POINTS = BaseUrl + 'get_user_earned_points';

// Notification
export const URL_GET_NOTIFICATION = BaseUrl + 'get_notification';
export const URL_REMOVE_NOTIFICATION = BaseUrl + 'remove_notification';
export const URL_REMOVE_ALL_NOTIFICATION = BaseUrl + 'clear_notification';

// Friend
export const URL_GET_CONNECT_FRIENDS = BaseUrl + 'get_connect_friends';
export const URL_GET_PEDNING_FRIENDS = BaseUrl + 'get_pending_request';
export const URL_GET_ALL_CONTACT_FRIENDS = BaseUrl + 'get_all_contact';
export const URL_SEND_FRIEND_REQUEST = BaseUrl + 'send_user_request';
export const URL_ACCEPT_REJECT_FRIEND_REQUEST =
  BaseUrl + 'accept_reject_friend_request';
export const URL_REMOVE_FRIEND_REQUEST = BaseUrl + 'remove_friend';

//Stripe Payment Module
export const URL_CREATE_CUSTOMER_IN_STRIPE = StripeBaseUrl + 'customers';
export const URL_SAVE_STRIPE_CUSTOMER = BaseUrl + 'set_stripe_customer_id';

// contest
export const URL_SEND_ADVERTISEMENT_REPORT = BaseUrl + 'advertisement_report';
export const URL_CLICK_ADVERTISEMENT = BaseUrl + 'click_advertisement';
export const URL_CONTEST_LIKE_DISLIKE = BaseUrl + 'contest_like_dislike';
export const URL_GET_FAVOURITE_CONTEST_LIST = BaseUrl + 'contest_favorite_list';
export const URL_FAVOURITE_CONTEST = BaseUrl + 'favorite_contest';
export const URL_GET_TIMELINE_CONTEST_COMMENTS =
  BaseUrl + 'get_contest_comments';
export const URL_ADD_CONTEST_COMMENTS = BaseUrl + 'add_contest_comment';
export const URL_REMOVE_CONTEST_COMMENTS = BaseUrl + 'remove_contest_comment';
export const URL_APPLY_CONTEST_BY_USER = BaseUrl + 'apply_contest';

export const URL_GET_FILLED_CONTEST_LIST = BaseUrl + 'get_filled_contest_list';
export const URL_GET_CONTEST_PRIZE = BaseUrl + 'get_contest_prize';
