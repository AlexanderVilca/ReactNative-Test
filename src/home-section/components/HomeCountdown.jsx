import React from "react"
import { View, StyleSheet, Dimensions, ImageBackground } from "react-native"
import CountDown from "react-native-countdown-component"

const { width } = Dimensions.get("window")

const date = new Date("2025-05-12T05:00:00.000Z")
const secondsUntil = Math.floor((date.getTime() - new Date().getTime()) / 1000)

const HomeCountdown = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("@/assets/images/SEMANA-DE-OFERTAS-MADRE-MOBILE.webp")}
                style={styles.banner}
                resizeMode="contain"
            >
                <View style={styles.countdownContainer}>
                    <CountDown
                        until={secondsUntil}
                        size={20}
                        timeToShow={["D", "H", "M", "S"]}
                        timeLabels={{
                            d: "Días",
                            h: "Horas",
                            m: "Minutos",
                            s: "Segundos",
                        }}
                        digitStyle={styles.digit}
                        digitTxtStyle={styles.digitText}
                        timeLabelStyle={styles.label}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default HomeCountdown

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    banner: {
        width: width,
        height: 150,
        justifyContent: "flex-start", 
        alignItems: "flex-end",
        paddingTop: 40,
        paddingRight: 24,
    },
    digit: {
        backgroundColor: "#333333",
        borderRadius: 8,
        width: 38,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    digitText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    },
    countdownContainer: {
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 0,
    },
    label: {
        color: "white",
        fontSize: 8,
        fontWeight: "600",
        marginTop: 4,
    },
})
