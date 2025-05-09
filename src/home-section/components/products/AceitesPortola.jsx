import { View, Text, StyleSheet, Image, FlatList } from "react-native"
import React, { useState, useEffect } from "react"
import getProductsByIds from "@/api/models/product/getProductsByIds"
import ProductoCard from "./ProductCard"

const AceitesPortola = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            const ids = [
                "47GA4uEakDIABkJ63dvaks",
                "7nRGmWppbIUPUB9AIk9D1N",
                "2KAf4z5f8ZuRnITO1qrkpF",
            ]
            const response = await getProductsByIds(ids)
            setProducts(response)
            setLoading(false)
        }
        fetchProducts()
    }, [])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>
                Mayo Sabroso <Text style={styles.link}>Ver más</Text>
            </Text>
            <Image
                style={styles.image}
                source={require("@/assets/images/home/SABOR-PURO-NATURAL-MOBILE.webp")}
            />
            <FlatList
                horizontal
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProductoCard product={item} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default AceitesPortola

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 300,
        alignSelf: "center",
        resizeMode: "contain",
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        padding: 10,
        fontWeight: "bold",
    },
    link: {
        fontSize: 16,
        color: "green",
        fontWeight: "bold",
    },
})
