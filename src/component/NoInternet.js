import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const NoInternet = () => (
  <View style={styles.container}>
    <Image
      style={{ width: '100%', height: '100%' }}
      source={require('../assets/icons/img_no_internet_connection.jpg')}
      resizeMode={'cover'}
    />
  </View>
);
export default NoInternet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
