// components/ProductoCard.tsx
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import React from "react"

const ProductoCard = ({ product }) => {
    const hasDiscount =
        product.fields.discountPrice &&
        product.fields.discountPrice < product.fields.normalPrice

    return (
        <View style={styles.card}>
            <Image
                source={{ uri: product.fields.mainPicture }}
                style={styles.productImage}
            />
            <Text style={styles.marca}>{product.fields.brand.name}</Text>
            <Text style={styles.nombre}>{product.fields.name}</Text>
            <View style={styles.precios}>
                {hasDiscount ? (
                    <>
                        <Text style={styles.precioAntes}>
                            S/ {product.fields.normalPrice.toFixed(2)}
                        </Text>
                        <Text style={styles.precioDescuento}>
                            S/ {Number(product.fields.discountPrice).toFixed(2)}
                        </Text>
                        <Text style={styles.descuento}>
                            - {product.fields.discountPercent}%
                        </Text>
                    </>
                ) : (
                    <View style={styles.precioPrincipalContainer}>
                        <Text style={styles.precioPrincipal}>
                            S/ {product.fields.normalPrice.toFixed(2)}
                        </Text>
                    </View>
                )}
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
        width: 160,
        height: 280,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        marginRight: 10,
        justifyContent: "space-between",
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
        color: "green",
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
    precioPrincipalContainer: {
        alignItems: "flex-end",
    },
    precioPrincipal: {
        fontSize: 14,
        fontWeight: "bold",
        color: "green",
    },
})
