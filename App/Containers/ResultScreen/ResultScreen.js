import React, { useState, useEffect } from 'react'
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

const ResultScreen = (props) => {

  useEffect(() => {

  }, []);

  return (
    <ImageBackground source={require('App/Assets/Images/resultBackground.png')} style={styles.image}>
      <Text style={styles.text}>Mask was not detected</Text>
      <Image source={require("App/Assets/Images/noMask1.png")} style={styles.vector} />
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 60}}>
        <TouchableOpacity style={{marginRight: 30}}>
          <Ionicons name="reload-circle-sharp" color="white" size={48} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="eye" color="white" size={48} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default ResultScreen
