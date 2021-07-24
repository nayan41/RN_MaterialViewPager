import React from 'react';
import {
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../constants/Colors';
import { StylesEditText } from '../stylesheets/component/StylesEditText';

const HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 56;
const PADDING_TOP = Platform.OS === 'ios' ? 20 : 0;

const EditTextComponent = ({
  placeHolder,
  hintLabel,
  value,
  onChangeText,
  keyboardType,
  autoCorrect,
  secureEntry,
  imageLeft,
  editable,
  maxLength,
  minLength,
  imageRight,
  autoCapitalize,
  isTextView,
  onRightImagePress,
  subContainer,
  editTextStyle,
  onPress,
  onSubmitEditing,
  returnKeyType,
  blurOnSubmit,
  ref,
  inputRef,
  externalSubContainer,
}) => (
  <View style={StylesEditText.container}>
    <View style={[StylesEditText.subContainer, externalSubContainer]}>
      <Text allowFontScaling={false} style={StylesEditText.hintTextStyle}>
        {hintLabel}
      </Text>
      <View style={StylesEditText.editTextContainer}>
        {imageLeft != null && (
          <Image style={StylesEditText.iconContainer} source={imageLeft} />
        )}
        <TextInput
          allowFontScaling={false}
          ref={(input) => inputRef && inputRef(input)}
          style={StylesEditText.editTextStyle}
          placeholderTextColor={Colors.colorPrimaryDark}
          editable={editable}
          secureTextEntry={secureEntry}
          autoCorrect={autoCorrect}
          value={value}
          placeholder={placeHolder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCompleteType='off'
          minLength={minLength}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
          isPhonenumber='on'
          onTouchStart={onPress}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
        />
        <TouchableOpacity
          onPress={onRightImagePress}
          style={{ padding: wp('1%') }}
        >
          <Image
            style={StylesEditText.iconRightContainer}
            source={imageRight}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export { EditTextComponent };

const styles = StyleSheet.create({
  divider: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#D3D3D3',
    width: '95%',
    height: 0.8,
  },
  selectedCountryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listViewRowContainer: {
    flexDirection: 'row',
    paddingStart: 15,
    margin: 10,
  },
  searchImageStyle: {
    width: 45,
    height: '100%',
    padding: 10,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
  countryNameTextStyle: {
    paddingLeft: 10,
    color: '#000',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  countryFlagContainer: {
    width: 32,
    paddingRight: 8,
    height: 25,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownImageStyle: {
    width: 10,
    marginLeft: 5,
    paddingRight: 5,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    paddingTop: PADDING_TOP,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    shadowRadius: 2,
    shadowOpacity: 1.0,
    backgroundColor: 'rgba(255,255,255,9)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: 'black',
    width: '100%',
  },
  backBtnContainer: {
    paddingStart: 20,
    height: '100%',
    justifyContent: 'center',
  },
  backImageStyle: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
});
