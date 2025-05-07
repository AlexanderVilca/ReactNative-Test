// components/ProductoCard.tsx
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import React from "react"

const ProductoCard = ({ product }) => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: product.fields.imageUrl }}
                style={styles.productImage}
            />
            <Text style={styles.marca}>BELTRÁN</Text>
            <Text style={styles.nombre}>{product.fields.name}</Text>
            <View style={styles.precios}>
                <Text style={styles.precioAntes}>S/ {product.fields.normalPrice}</Text>
                <Text style={styles.precioDescuento}>S/ {product.fields.discountPrice}</Text>
                <Text style={styles.descuento}>{product.fields.discountPercent}%</Text>
            </View>
            <TouchableOpacity style={styles.boton}>
                <Text style={styles.textoBoton}>Agregar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductoCard

const styles = StyleSheet.create({
    card: {
        width: 170,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productImage: {
        width: "100%",
        height: 100,
        resizeMode: "contain",
    },
    marca: {
        fontSize: 12,
        color: "#999",
        marginTop: 4,
    },
    nombre: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 4,
    },
    precios: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8,
    },
    precioAntes: {
        fontSize: 12,
        color: "#999",
        textDecorationLine: "line-through",
    },
    precioDescuento: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
    },
    descuento: {
        fontSize: 12,
        color: "green",
        fontWeight: "bold",
    },
    boton: {
        backgroundColor: "#0A8F47",
        borderRadius: 6,
        paddingVertical: 6,
        marginTop: 10,
        alignItems: "center",
    },
    textoBoton: {
        color: "#fff",
        fontWeight: "bold",
    },
})
