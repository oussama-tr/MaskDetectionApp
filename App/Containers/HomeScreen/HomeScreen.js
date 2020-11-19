import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  PermissionsAndroid,
  ImageBackground
} from 'react-native'
import styles from './HomeScreenStyle'
import { checkMultiplePermissions } from 'App/Service/PermissionsService'
import VideoRecorder from 'react-native-beautiful-video-recorder';
import Entypo from 'react-native-vector-icons/Entypo'

const PERMISSIONS = [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
   PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.RECORD_AUDIO];

function HomeScreen({navigation}) {

  const videoRecorder = useRef(null);
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    async function checkPermissions() {
  		const isPermissionGranted = await checkMultiplePermissions(PERMISSIONS);
      setGranted(isPermissionGranted);
    }
    checkPermissions();
  }, []);

  const handleButtonClick = async () => {
    if(granted)
      start();
    else {
      const hasGranted = await checkMultiplePermissions(PERMISSIONS);
      setGranted(hasGranted);
      if(hasGranted) start();
    }
  }

  const start = () => {
  	// 30 seconds
  	videoRecorder.current.open({ maxLength: 30, zoom: 0 },(data) => {
      navigation.navigate("Loading", {data : data});
  	});
  }

  return (
    <ImageBackground source={require('App/Assets/Images/background.png')} style={styles.image}>
      <Text style={styles.header}>MASK DETECTION APP</Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <View style={styles.iconContainer}>
          {
            granted?
            <Entypo name="video-camera" color="white" size={48} /> :
            <Entypo name="hand" color="white" size={48} />
          }

        </View>
      </TouchableOpacity>
      <VideoRecorder ref={videoRecorder} compressQuality={'medium'} orientation="portrait"/>
    </ImageBackground>
  )
}

export default HomeScreen
