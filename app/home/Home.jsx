import { View, Text, ScrollView } from "react-native"
import React from "react"
import OurServices from "@/src/home-section/components/OurServices"
import Footer from "@/src/home-section/components/Footer"
import YapePromos from "@/src/home-section/components/YapePromos"

const Home = () => {
    return (
        <ScrollView>
            <Text>Home</Text>
            <YapePromos/>
            <OurServices />
            <Footer/>
        </ScrollView>
    )
}

export default Home
