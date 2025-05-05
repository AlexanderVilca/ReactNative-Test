import { View, Text } from "react-native"
import React, { useState, useEffect } from "react"
import getProductsByIds from "@/api/models/product/getProductsByIds"

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
        <View>
            <Text style={{ fontSize: 15, padding: 10 }}>Mayo sabroso</Text>
            {products.map((product) => (
                <Text key={product.sys.id} style={{padding: 10}}>{product.fields.name}</Text>
            ))}
        </View>
    )
}

export default AceitesPortola
