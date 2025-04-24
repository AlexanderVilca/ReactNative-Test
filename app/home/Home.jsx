import { View, Text, ScrollView } from "react-native"
import React from "react"
import OurServices from "@/src/Components/OurServices"
import Footer from "@/src/Components/Footer"

const Home = () => {
    return (
        <ScrollView>
            <Text>Home</Text>
            <OurServices />
            <Footer/>
        </ScrollView>
    )
}

export default Home
