import React from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    ScrollView,
} from "react-native"
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons"

const footerData = [
    {
        title: "Beltrán",
        items: [
            {
                name: "Catálogo del mes",
                href: "https://beltranperu.com/catalogo",
            },
            {
                name: "Preguntas frecuentes",
                href: "https://beltranperu.com/preguntas-frecuentes",
            },
            {
                name: "Términos y condiciones",
                href: "https://beltranperu.com/terminos-y-condiciones-beltran-peru-eirl",
            },
        ],
    },
    {
        title: "Tienda online",
        items: [
            {
                name: "Políticas de privacidad",
                href: "https://beltranperu.com/politicas-de-privacidad",
            },
            {
                name: "Política de envío",
                href: "https://beltranperu.com/politica-de-envio",
            },
        ],
    },
    {
        title: "Contáctenos",
        items: [
            {
                name: "Correo: delivery@beltranperu.com",
                href: "mailto:delivery@beltranperu.com",
            },
            {
                name: "Zona de cobertura",
                href: "https://beltranperu.com/lugares-de-entrega",
            },
        ],
    },
]

const socialLinks = [
    {
        icon: <FontAwesome name="facebook" size={24} color="#4267B2" />,
        href: "https://www.facebook.com/BeltranPeru",
    },
    {
        icon: <FontAwesome name="instagram" size={24} color="#E1306C" />,
        href: "https://www.instagram.com/beltran_peru/",
    },
    {
        icon: <AntDesign name="linkedin-square" size={24} color="#0A66C2" />,
        href: "https://www.linkedin.com/company/belt%C3%A1n-per%C3%BA/",
    },
    {
        icon: <Entypo name="youtube" size={24} color="red" />,
        href: "https://www.youtube.com/channel/UC2jimDM20ZgpI4tDmxEV6pw",
    },
]

const Footer = () => {
    const handleOpenURL = (url) => {
        Linking.openURL(url)
    }

    return (
        <ScrollView style={styles.container}>
            {footerData.map((section, idx) => (
                <View key={idx} style={styles.section}>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    {section.items.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleOpenURL(item.href)}
                        >
                            <Text style={styles.link}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Síguenos</Text>
                <View style={styles.socials}>
                    {socialLinks.map((item, idx) => (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => handleOpenURL(item.href)}
                        >
                            {item.icon}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 16,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        color: "green",
    },
    link: {
        fontSize: 14,
        color: "black",
        marginBottom: 6,
    },
    socials: {
        flexDirection: "row",
        gap: 16,
        flexWrap: "wrap",
    },
})
