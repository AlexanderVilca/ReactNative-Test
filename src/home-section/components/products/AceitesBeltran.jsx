import { View, Text } from "react-native"
import React, { useState, useEffect } from "react"
import getProductsByIds from "@/api/models/product/getProductsByIds"

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
        <View>
            <Text style={{ fontSize: 15, padding: 10 }}>Calidad excepcional</Text>
            {products.map((product) => (
                <Text key={product.sys.id} style={{padding: 10}}>{product.fields.name}</Text>
            ))}
        </View>
    )
}

export default AceitesBeltran
