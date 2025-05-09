import React, { useRef } from "react"
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    Dimensions,
    StyleSheet,
} from "react-native"
import Carousel from "react-native-reanimated-carousel"
import { useNavigation } from "@react-navigation/native"
import { AntDesign } from "@expo/vector-icons"

const { width } = Dimensions.get("window")

const yapePromosItems = [
    {
        src: require("../../../assets/images/yape-promos/YAPE-PROMO-1.webp"),
        name: "Oval Sardina Peruana X 425 Gr X 12 Uni + Aceite de Soya Portola X 200 Ml X 24 Uni - PROMO YAPE",
        href: "https://beltrandelivery.com/producto/oval-sardina-peruana-x-425-gr-x-12-uni-aceite-de-soya-portola-x-200-ml-x-24-uni-promo-yape",
    },
    {
        src: require("../../../assets/images/yape-promos/YAPE-PROMO-2.webp"),
        name: "Oval Sardina Peruana X 425 Gr X 12 Uni + Aceite de Soya Beltrán X 5 Lt Pet - PROMO YAPE",
        href: "https://beltrandelivery.com/producto/oval-sardina-peruana-x-425-gr-x-12-uni-aceite-de-soya-beltran-x-5-lt-pet",
    },
    {
        src: require("../../../assets/images/yape-promos/YAPE-PROMO-3.webp"),
        name: "Sardina Peruana Entera Portola En S/Tomate Tall X 425 Gr X 12 Uni + Aceite De Soya Beltrán X 5 Lt - PROMO YAPE",
        href: "https://beltrandelivery.com/producto/sardina-peruana-entera-portola-en-s-tomate-tall-x-425-gr-x-12-uni-aceite-de-soya-beltran-x-5-lt-promo-yape",
    },
]

const YapePromosCarousel = ({ title = "Yape Promos", href }) => {
    const navigation = useNavigation()
    const carouselRef = useRef(null)

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next()
        }
    }

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev()
        }
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={() => navigation.navigate(href)}>
                    <Text style={styles.link}>Ver más</Text>
                </TouchableOpacity>
            </View>

            {/* Carousel */}
            <View style={styles.carouselContainer}>
                <Carousel
                    width={width * 0.8}
                    height={width * 0.8}
                    data={yapePromosItems}
                    autoPlay
                    autoPlayInterval={4000}
                    loop
                    scrollAnimationDuration={1000}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(item.href)}
                        >
                            <Image
                                source={item.src}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 12,
                                }}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    )}
                />

                {/* Botón Izquierdo */}
                <TouchableOpacity style={styles.leftArrow} onPress={handlePrev}>
                    <AntDesign name="leftcircleo" size={32} color="white" />
                </TouchableOpacity>

                {/* Botón Derecho */}
                <TouchableOpacity
                    style={styles.rightArrow}
                    onPress={handleNext}
                >
                    <AntDesign name="rightcircleo" size={32} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default YapePromosCarousel

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    link: {
        fontSize: 16,
        color: "green",
        fontWeight: "bold",
    },
    carouselContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 16,
    },
    leftArrow: {
        position: "absolute",
        left: 10,
        top: "45%",
        zIndex: 10,
    },
    rightArrow: {
        position: "absolute",
        right: 10,
        top: "45%",
        zIndex: 10,
    },
})
