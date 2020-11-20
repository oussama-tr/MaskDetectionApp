import React from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import styles from './ResultScreenStyle'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RNFetchBlob from 'rn-fetch-blob';
import { Config } from 'App/Config'

const ResultScreen = (props) => {

  const download = () => {
    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob
    .config({
      path : dirs.DownloadDir,
      addAndroidDownloads : {
        useDownloadManager : true,
        mime : 'video/mp4',
        title: "resultVideo.mp4",
        notification : true,
        mediaScannable : true,
      },
    })
    .fetch('GET', Config.UPLOAD_URL + "getVideo")
    .then((res) => {})
  }

  const resultText = props.route.params.result? "Mask was detected" : "Mask was not detected";
  const resultImage = props.route.params.result? require("App/Assets/Images/mask.png") : require("App/Assets/Images/noMask1.png");

  return (
    <ImageBackground source={require('App/Assets/Images/resultBackground.png')} style={styles.image}>
      <Text style={styles.text}>{resultText}</Text>
      <Image source={resultImage} style={styles.vector} />
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 60}}>
        <TouchableOpacity style={{marginRight: 30}} onPress={() => props.navigation.navigate("Home")}>
          <Ionicons name="reload-circle-sharp" color="white" size={48} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {download()}}>
          <Entypo name="download" color="white" size={48} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default ResultScreen
