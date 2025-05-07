import { View, Text, FlatList, Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from "react"
import getProductsByIds from "@/api/models/product/getProductsByIds"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"

const Productos = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            const ids = [
                "62btCzzrUTxfIoIe1RylHt",
                "3gLDrgLS4dDBmLCdn6CkgI",
                "3Dzbnw3mwVMSCzXtvbys74",
                "2jB4tmhNF4psCze281UClX",
                "3FdPP59uAxMp9QzXw8pOIU",
            ]
            const response = await getProductsByIds(ids)
            setProducts(response)
            setLoading(false)
        }
        fetchProducts()
    }, [])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Sabores extraordinarios
                <Text style={{ color: "green"}}>Ver más</Text>
            </Text>
            <Image
                style={styles.image}
                source={require("@/assets/images/home/SABOR-NUTRICION-MOBILE.png")}
            />
            {products.map((product) => (
                <Text key={product.sys.id} style={styles.productText}>
                    {product.fields.name} - Precio: S/
                    {product.fields.normalPrice}
                </Text>
            ))}
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
    productText: {
        padding: 10,
        fontSize: 14,
    },
})
