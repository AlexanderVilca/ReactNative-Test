import React from "react"
import { TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const CustomLeftArrowProductsCarousel = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: [{ translateY: -20 }],
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "white",
                borderColor: "#333",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Ionicons name="arrow-back" size={24} color="#4F8EF7" />
        </TouchableOpacity>
    )
}

export default CustomLeftArrowProductsCarousel
