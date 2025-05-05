import { View, Text, FlatList, Image } from "react-native"
import React, { useState, useEffect } from "react"
import getProductsByIds from "@/api/models/product/getProductsByIds"
import { SafeAreaView } from "react-native-safe-area-context"

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
        <SafeAreaView>
            <FlatList
                data={products}
                ListHeaderComponent={
                    <Text style={{ fontSize: 15 }}>
                        Lista de productos Beltrán Enlatados
                    </Text>
                }
                renderItem={({ item }) => (
                    <View style={{ padding: 10 }}>
                        <Text>{item.fields.name}</Text>
                        <Text>Stock: {item.fields.stock}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.sys.id}
            />
        </SafeAreaView>
    )
}

export default Productos
