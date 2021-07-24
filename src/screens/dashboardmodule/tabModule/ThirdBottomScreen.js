import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  BackHandler,
  DeviceEventEmitter,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {MyToolbar} from '../../../component';
import Colors from '../../../constants/Colors';
import {normalize, StyleThird} from '../../../stylesheets';

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);

    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {});
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

        <Text>FirstScreen</Text>
      </SafeAreaView>
    );
  }
}

class SecondScreen extends React.Component {
  constructor(props) {
    super(props);

    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {});
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

        <Text>SecondScreen</Text>
      </SafeAreaView>
    );
  }
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="First"
      allowFontScaling={false}
      tabBarOptions={{
        upperCaseLabel: false,
        scrollEnabled: false,
        inactiveBackgroundColor: 'white',
        allowFontScaling: false,
        indicatorStyle: {
          borderBottomColor: Colors.colorPrimary,
          borderBottomWidth: 2,
        },
        style: {
          height: hp('6%'),
          backgroundColor: Colors.white,
          elevation: 0,
          upperCaseLabel: false,
        },
        tabStyle: {
          alignItems: 'center',
          height: hp('6%'),
          flexDirection: 'row',
        },
        labelStyle: {
          color: Colors.greyDark,
          fontFamily: 'Poppins-Regular',
          fontSize: normalize(12.5),
          flexWrap: 'nowrap',
        },
      }}>
      <Tab.Screen
        name={'First'}
        component={FirstScreen}
        options={{title: 'First'}}
      />

      <Tab.Screen
        name={'Second'}
        component={SecondScreen}
        options={{title: 'Second'}}
      />
    </Tab.Navigator>
  );
}

var prp;
class ThirdBottomScreen extends Component {
  constructor(props) {
    super(props);

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.state = {
      reload: 0,
      isLoading: false,
      bearer_token: '',
      initRoot: 'Connect',
    };
    prp = props;
  }

  componentDidMount() {
    const {navigation} = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      DeviceEventEmitter.emit('TabChange', {
        screen: 'ThirdBottomScreen',
      });
      DeviceEventEmitter.emit('reload', {val: 'Yes'});
    });

    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick = () => {
    this.props.navigation.goBack(null);
    return true;
  };

  componentWillUnmount() {
    this.focusListener.remove();
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  render() {
    return (
      <SafeAreaView style={StyleThird.safeViewContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: Colors.colorWhiteBG,
          }}>
          <View
            style={{
              height: hp('7%'),
              width: '100%',
              backgroundColor: Colors.colorWhiteBG,
            }}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.black} />

            <MyToolbar titleName={'Third Screen'} />
          </View>

          <View style={{flex: 1, backgroundColor: Colors.colorWhiteBG}}>
            <NavigationContainer>
              <MyTabs context={this.context} />
            </NavigationContainer>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export {ThirdBottomScreen};
