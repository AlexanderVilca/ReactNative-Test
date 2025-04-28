import { View, Text, ScrollView, Image, StyleSheet } from "react-native"
import React from "react"
import OurServices from "@/src/home-section/components/OurServices"
import Footer from "@/src/home-section/components/Footer"
import YapePromos from "@/src/home-section/components/YapePromos"
import Header from "@/src/home-section/components/Header"
import MainBanner from "@/src/home-section/components/MainBanner"

const Home = () => {
    return (
        <ScrollView>
            <Header />
            <Text>Home</Text>
            <MainBanner />
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
            <YapePromos />
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
