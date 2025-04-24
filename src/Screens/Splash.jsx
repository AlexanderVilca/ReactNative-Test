import { View, Text, StatusBar,Image } from 'react-native'
import React from 'react'
import { myColors } from '../Utils/MyColors'

const Splash = () => {
  return (
    <View style={{backgroundColor: myColors.primary, flex: 1, justifyContent: "center"}}>
      <StatusBar style="light"/>
      <View style={{justifyContent:"center", alignItems: "center"}}>
        <Image source={require("../../assets/images/logo-beltran-light.png")} />
      </View>
    </View>
  )
}

export default Splash