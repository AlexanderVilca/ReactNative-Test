import { View, Text, StatusBar, Image } from "react-native"
import React, { useEffect } from "react"
import { myColors } from "../Utils/MyColors"
import { useNavigation } from "@react-navigation/native"

const Splash = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 2000)
    }, [])

    return (
        <View
            style={{
                backgroundColor: myColors.primary,
                flex: 1,
                justifyContent: "center",
            }}
        >
            <StatusBar style="light" />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                    source={require("../../assets/images/logo-beltran-light.png")}
                />
            </View>
        </View>
    )
}

export default Splash
