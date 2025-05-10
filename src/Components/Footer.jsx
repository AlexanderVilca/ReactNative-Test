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
            {
                name: "Call Center - Vía WhatsApp",
                href: "https://api.whatsapp.com/send/?phone=51914399717&text=Hola%2C+quisiera+tener+m%C3%A1s+informaci%C3%B3n+de+los+productos+Beltr%C3%A1n+Per%C3%BA&type=phone_number&app_absent=0",
                follow: false,
                target: "_blank",
            },
            {
                name: "Av Cascanueces Mz M Lote 6 Sublote 1 Santa Anita, Lima 15011",
                href: "https://maps.app.goo.gl/KnDhzYv1EUptnX216",
                follow: false,
                target: "_blank",
            },
        ],
    },
    {
        title: "Tienda online",
        items: [
            {
                name: "Derechos ARCO",
                href: "https://forms.gle/t1sN7y6hc75yZiAE9",
                follow: false,
                target: "_blank",
            },
            {
                name: "Políticas de privacidad",
                href: "/politicas-de-privacidad",
                follow: true,
            },
            {
                name: "Política de envío",
                href: "/politica-de-envio",
                follow: true,
            },
            {
                name: "Términos y condiciones",
                href: "/terminos-y-condiciones-online",
                follow: true,
            },
            {
                name: "Comprobantes electrónicos",
                href: "/boletas-y-facturas",
                follow: true,
            },
        ],
    },
    {
        title: "Contáctenos",
        items: [
            {
                name: "Nuestras Tiendas",
                href: "https://beltranperu.com/conocenos/#tiendas",
                follow: false,
            },
            {
                name: "Nuestras plantas",
                href: "https://beltranperu.com/conocenos/#plantas",
                follow: false,
            },
            {
                name: "Zona de cobertura",
                href: "/lugares-de-entrega",
                follow: true,
            },
            {
                name: "Consultas y sugerencias",
                href: "/consultas-y-sugerencias",
                follow: true,
            },
            {
                name: "Correo: delivery@beltranperu.com",
                href: "mailto:delivery@beltranperu.com",
                follow: false,
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
