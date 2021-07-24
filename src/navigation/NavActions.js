import {StackActions, NavigationActions} from 'react-navigation';
export const goToSplashScreen = passNavigation => {
  passNavigation.navigate('SplashScreen');
};

export const goToInterestScreen = passNavigation => {
  passNavigation.navigate('InterestScreen');
};
export const goToHomeScreen = passNavigation => {
  passNavigation.navigate('Home');
};
export const goToSurvey = passNavigation => {
  passNavigation.navigate('Survey');
};
export const goToFavourite = passNavigation => {
  passNavigation.navigate('Favourite');
};
export const goToProfile = passNavigation => {
  passNavigation.navigate('Profile');
};
export const goToMyAccount = passNavigation => {
  passNavigation.navigate('MyAccountScreen');
};
export const goToSubsriptionPlan = (
  passNavigation,
  isFromLogin,
  cardDetails,
) => {
  passNavigation.navigate('SubsriptionPlanScreen', {
    isFromLogin,
    cardDetails,
  });
};
export const goToChangePassword = passNavigation => {
  passNavigation.navigate('ChangePasswordScreen');
};
export const goToMyCardList = passNavigation => {
  passNavigation.navigate('MyCardListScreen');
};
export const goToSelectCardList = passNavigation => {
  passNavigation.navigate('SelectCardScreenForSubscription');
};
export const goToTransaction = passNavigation => {
  passNavigation.navigate('TransactionScreen');
};
export const goToMyWallet = passNavigation => {
  passNavigation.navigate('MyWalletScreen');
};
export const goToFriendList = passNavigation => {
  passNavigation.navigate('FriendListScreen');
};
export const goToNotification = passNavigation => {
  passNavigation.navigate('NotificationScreen');
};
export const goToViewFilledSurveyScreen = (passNavigation, surveyUUID) => {
  passNavigation.navigate('ViewFilledSurveyScreen', {surveyUUID});
};
export const goToQuestion = (passNavigation, surveyUUID) => {
  passNavigation.navigate('QuestionScreen', {surveyUUID});
};

export const goToComment = (passNavigation, surveyID) => {
  passNavigation.navigate('CommentScreen', {surveyID});
};

export const goToFillContestScreen = (
  passNavigation,
  contestUUID,
  contestTitle,
) => {
  passNavigation.navigate('FillContestScreen', {contestUUID, contestTitle});
};

export const goToViewFilledContestScreen = (
  passNavigation,
  contestUUID,
  contestTitle,
) => {
  passNavigation.navigate('ViewFilledContestScreen', {
    contestUUID,
    contestTitle,
  });
};

export const goToContestComment = (passNavigation, contestID) => {
  passNavigation.navigate('ContestCommentScreen', {contestID});
};
