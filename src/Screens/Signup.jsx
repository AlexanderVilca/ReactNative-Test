import { View, Text } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { myColors } from "@/src/Utils/MyColors"

const Signup = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
            <Text>Signup</Text>
        </SafeAreaView>
    )
}

export default Signup
