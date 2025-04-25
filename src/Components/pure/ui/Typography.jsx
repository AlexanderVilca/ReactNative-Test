import React from "react"
import { Text, StyleSheet } from "react-native"

const variantStyles = StyleSheet.create({
    h1: {
        fontSize: 36,
        fontWeight: "500",
        textAlign: "center",
    },
    h2: {
        fontSize: 20,
        fontWeight: "600",
    },
    h3: {
        fontSize: 16,
        fontWeight: "600",
    },
    h4: {
        fontSize: 14,
        fontWeight: "600",
    },
    p: {
        fontSize: 14,
    },
    small: {
        fontSize: 12.5,
    },
    big: {
        fontSize: 24,
        fontWeight: "600",
    },
})

const colorStyles = {
    light: { color: "#FFFFFF" },
    dark: { color: "#333333" },
    primary: { color: "#4F8EF7" },
    secondary: { color: "#8F94A3" },
    transparent: { color: "transparent" },
    red: { color: "#FF3737" },
}

const Typography = ({
    as: Tag = "Text",
    color = "dark",
    variant = "p",
    style = {},
    children,
}) => {
    return (
        <Text style={[variantStyles[variant], colorStyles[color], style]}>
            {children}
        </Text>
    )
}

export default Typography
