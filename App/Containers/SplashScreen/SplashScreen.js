import React, { useState, useEffect } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './SplashScreenStyle'
import LottieView from 'lottie-react-native';

function SplashScreen({navigation}) {

  useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 2000)
  }, []);

  return (
    <View style={styles.container}>
      <LottieView source={require("App/Assets/Animations/mask.json")} autoPlay loop />
    </View>
  )
}

export default SplashScreen
