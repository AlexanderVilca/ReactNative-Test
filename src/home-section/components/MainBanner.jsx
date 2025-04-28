import { View, Image, StyleSheet, Dimensions } from "react-native"
import React from "react"
import Carousel from "react-native-reanimated-carousel"

const { width } = Dimensions.get("window")

const MainBannerImages = [
    {
        src: require("../../../assets/images/BANNER-MOBILE-TU-SEMANA-PERFECTA-1.png"),
        alt: "Semana perfecta parte 1",
    },
    {
        src: require("../../../assets/images/BANNER-MOBILE-TU-SEMANA-PERFECTA-2.png"),
        alt: "Semana perfecta parte 2",
    },
    {
        src: require("../../../assets/images/BANNER-MOBILE-TU-SEMANA-PERFECTA-3.png"),
        alt: "Semana perfecta parte 3",
    },
    {
        src: require("../../../assets/images/HORA-DEL-LUNCH-MOBILE.png"),
        alt: "Hora del Lunch",
    },
    {
        src: require("../../../assets/images/BANNER-MOBILE-APROVECHA-NUESTROS-GRANDES-DESCUENTOS.png"),
        alt: "Aprovecha nuestros grandes descuentos",
    },
    {
        src: require("../../../assets/images/QUE-TEAM-ERES-PORTOLA-MOBILE.png"),
        alt: "Que team eres Portola",
    },
    {
        src: require("../../../assets/images/BANNER-MOBILE-UNETE-A-NUESTROS-CANALES.png"),
        alt: "Unete a nuestros canales",
    },
]

const MainBanner = () => {
    return (
        <View style={styles.container}>
            <Carousel
                width={width * 1}
                height={width * 0.8}
                data={MainBannerImages}
                autoPlay
                autoPlayInterval={4000}
                loop
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <Image
                        source={item.src}
                        style={styles.image}
                        resizeMode="contain"
                        accessibilityLabel={item.alt}
                    />
                )}
            />
        </View>
    )
}

export default MainBanner

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    }
})
