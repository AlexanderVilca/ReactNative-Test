import { View, Text, StyleSheet, Image, FlatList } from "react-native"
import React, { useState, useEffect } from "react"
import getProductsByIds from "@/api/models/product/getProductsByIds"
import ProductoCard from "./ProductCard"

const AceitesBeltran = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            const ids = [
                "7mElMIvxpnbvEebC7LOcfT",
                "2hJaNvWpsQNV1TCQIjlT7Y",
                "2M9jrliJqg6Uq3vtbLyvU4",
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
                Calidad Excepcional <Text style={styles.link}>Ver más</Text>
            </Text>
            <Image
                style={styles.image}
                source={require("@/assets/images/home/BELTRAN-ACEITE-MOBILE.webp")}
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

export default AceitesBeltran

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