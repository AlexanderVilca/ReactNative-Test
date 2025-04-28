import { View, Image, StyleSheet } from "react-native"
import React from "react"
import CountDown from "react-native-countdown-component"

const date = new Date("2025-05-24T05:00:00.000Z")
const HomeCountdown = () => {
    return (
        <View>
            <Image
                style={styles.image}
                source={require("@/assets/images/SEMANA DE OFERTAS - VERSION MOBILE.png")}
            />
            <CountDown
                style={styles.countdown}
                size={15}
                timeToShow={["D", "H", "M", "S"]}
                timeLabels={{
                    d: "Días",
                    h: "Horas",
                    m: "Minutos",
                    s: "Segundos",
                }}
                ennDate={date}
                digitStyle={{ backgroundColor: "#333333" }}
                digitTxtStyle={{ color: "white" }}
                showSeparator
            />
        </View>
    )
}

export default HomeCountdown

const styles = StyleSheet.create({
    image: {
        width: 390,
        height: 120,
        resizeMode: "contain",
    },
})
