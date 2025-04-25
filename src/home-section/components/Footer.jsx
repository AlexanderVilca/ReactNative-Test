import React from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    ScrollView,
} from "react-native"
import { FontAwesome, Entypo, AntDesign, FontAwesome5, FontAwesomeIcon, FontAwesome6 } from "@expo/vector-icons"
import Ionicons from "@expo/vector-icons/Ionicons"

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
                href: "https://beltrandelivery.com/preguntas-frecuentes",
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
                href: "https://beltrandelivery.com/politicas-de-privacidad",
            },
            {
                name: "Política de envío",
                href: "https://beltrandelivery.com/politica-de-envio",
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
                href: "https://beltrandelivery.com/lugares-de-entrega",
            },
        ],
    },
]

const socialLinks = [
    {
        icon: <FontAwesome name="facebook-square" size={24} color="green" />,
        href: "https://www.facebook.com/BeltranPeru",
    },
    {
        icon: <FontAwesome name="instagram" size={24} color="green" />,
        href: "https://www.instagram.com/beltran_peru/",
    },
    {
        icon: <FontAwesome6 name="x-twitter" size={24} color="green" />,
        href: "https://twitter.com/BeltranPeru_",
    },
    {
        icon: <AntDesign name="linkedin-square" size={24} color="green" />,
        href: "https://www.linkedin.com/company/belt%C3%A1n-per%C3%BA/",
    },
    {
        icon: <Entypo name="youtube" size={24} color="green" />,
        href: "https://www.youtube.com/channel/UC2jimDM20ZgpI4tDmxEV6pw",
    },
    {
        icon: <FontAwesome5 name="tiktok" size={24} color="green" />,
        href: "https://www.tiktok.com/@beltranperu",
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
                    <Text style={styles.sectionTitle}>Libro de Reclamaciones</Text>
                    <Ionicons
                        name="book-sharp"
                        size={32}
                        color="green"
                        onPress={() =>
                            Linking.openURL(
                                "https://beltranperu.com/libro-de-reclamaciones-virtual"
                            )
                        }
                    />
                </View>
                        
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
        marginBottom: 15,
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
