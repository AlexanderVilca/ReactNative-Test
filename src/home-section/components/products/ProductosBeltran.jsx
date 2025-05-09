// components/Productos.tsx
import { View, Text, FlatList, Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from "react"
import getProductsByIds from "@/api/models/product/getProductsByIds"
import ProductCard from "./ProductCard"

const Productos = () => {
    const [products, setProducts] = useState([])

    const hasDiscount = (discountPrice, normalPrice) => {
        return discountPrice && discountPrice < normalPrice
    }

    const fetchProducts = async () => {
        const ids = [
            "62btCzzrUTxfIoIe1RylHt",
            "3gLDrgLS4dDBmLCdn6CkgI",
            "3Dzbnw3mwVMSCzXtvbys74",
            "2jB4tmhNF4psCze281UClX",
            "3FdPP59uAxMp9QzXw8pOIU",
        ]

        const response = await getProductsByIds(ids)

        const productsWithData = response.map((p) => {
            const { normalPrice, discountPrice } = p.fields
            const discountPercent = hasDiscount(discountPrice, normalPrice)
                ? Math.ceil(((normalPrice - discountPrice) / normalPrice) * 100)
                : 0

            return {
                ...p,
                fields: {
                    ...p.fields,
                    discountPercent,
                },
            }
        })

        setProducts(productsWithData)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Sabores extraordinarios
                    <Text style={styles.link}> Ver más</Text>
                </Text>
            </View>
            <Image
                style={styles.image}
                source={require("@/assets/images/home/SABOR-NUTRICION-MOBILE.png")}
            />
            <FlatList
                horizontal
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProductCard product={item} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Productos

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: 300,
        alignSelf: "center",
        resizeMode: "contain",
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
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
})
