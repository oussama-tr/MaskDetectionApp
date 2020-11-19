import React, { useState, useEffect } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './LoadingScreenStyle'
import LottieView from 'lottie-react-native';
import { detectionService } from 'App/Service/DetectionService';

const LoadingScreen = (props) => {

  useEffect(() => {
    async function call() {
      const result = await detectionService.uploadVideo({uri: props.route.params.data.uri});
    }
    call();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Treating video. Please wait ..</Text>
      <LottieView source={require("App/Assets/Animations/scanner.json")} autoPlay loop />
    </View>
  )
}

export default LoadingScreen
