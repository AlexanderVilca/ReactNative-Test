import { View, Text, ScrollView, Image, StyleSheet } from "react-native"
import React from "react"
import OurServices from "@/src/home-section/components/OurServices"
import Footer from "@/src/home-section/components/Footer"
import YapePromos from "@/src/home-section/components/YapePromos"
import Header from "@/src/home-section/components/Header"
import MainBanner from "@/src/home-section/components/MainBanner"
import HomeCountdown from "@/src/home-section/components/HomeCountdown"
import ProductosBeltran from "@/src/home-section/components/products/ProductosBeltran"
import AceitesBeltran from "@/src/home-section/components/products/AceitesBeltran"
import AceitesPortola from "@/src/home-section/components/products/AceitesPortola"

const Home = () => {
    return (
        <ScrollView>
            <Header />
            <MainBanner />
            {/* Imágenes promocionales */}
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../../assets/images/PAGA-CON-YAPE-O-PLIN.png")}
                />
                <Image
                    style={styles.image}
                    source={require("../../assets/images/APROVECHA-LAS-PROMOCIONES.png")}
                />
            </View>
            <HomeCountdown />
            <ProductosBeltran />
            <AceitesBeltran />
            <AceitesPortola />
            {/* <YapePromos /> */}
            <OurServices />
            <Footer />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 370,
        height: 70,
        resizeMode: "contain",
    },
})
