import { View, Text, FlatList, Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from "react"
import getProductsByIds from "@/api/models/product/getProductsByIds"
import { SafeAreaView } from "react-native-safe-area-context"
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
            const normal = p.normalPrice
            const discount = p.discountPrice

            return {
                ...p,
                imageUrl: p.mainPicture?.url || "",
                discountPercent: hasDiscount(discount, normal)
                    ? Math.ceil(((normal - discount) / normal) * 100)
                    : 0,
            }
        })

        setProducts(productsWithData)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>
                Sabores extraordinarios <Text style={{ color: "green" }}>Ver más</Text>
            </Text>
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
})
