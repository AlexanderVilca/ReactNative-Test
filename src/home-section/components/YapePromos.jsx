import React from "react"
import { View, Image, TouchableOpacity, Text } from "react-native"
import Carousel from "react-native-reanimated-carousel"
import CustomLeftArrowProductsCarousel from "@/src/Components/carousel/custom-options/CustomLeftArrowProductsCarousel"
import CustomRightArrowProductsCarousel from "@/src/Components/carousel/custom-options/CustomRightArrowProductsCarousel"
import Typography from "@/src/Components/pure/ui/Typography"

const responsive = {
    desktop: {
        breakpoint: { max: 5000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 0,
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
        partialVisibilityGutter: 0,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        partialVisibilityGutter: 0,
    },
}

const yapePromosItems = [
    {
        src: require("../../../assets/images/yape-promos/YAPE-PROMO-1.webp"),
        name: "Oval Sardina Peruana X 425 Gr X 12 Uni + Aceite de Soya Portola X 200 Ml X 24 Uni - PROMO YAPE",
        href: "/producto/oval-sardina-peruana-x-425-gr-x-12-uni-aceite-de-soya-portola-x-200-ml-x-24-uni-promo-yape",
    },
    {
        src: require("../../../assets/images/yape-promos/YAPE-PROMO-1.webp"),
        name: "Oval Sardina Peruana X 425 Gr X 12 Uni + Aceite de Soya Beltrán X 5 Lt Pet - PROMO YAPE",
        href: "/producto/oval-sardina-peruana-x-425-gr-x-12-uni-aceite-de-soya-beltran-x-5-lt-pet",
    },
    {
        src: require("../../../assets/images/yape-promos/YAPE-PROMO-1.webp"),
        name: "Sardina Peruana Entera Portola En S/Tomate Tall X 425 Gr X 12 Uni + Aceite De Soya Beltrán X 5 Lt - PROMO YAPE",
        href: "/producto/sardina-peruana-entera-portola-en-s-tomate-tall-x-425-gr-x-12-uni-aceite-de-soya-beltran-x-5-lt-promo-yape",
    },
]

const YapePromosCarousel = ({ deviceType, title, href, navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: "column", gap: 16 }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography style={{ fontSize: 24 }}>{title}</Typography>
                <TouchableOpacity onPress={() => navigation.navigate(href)}>
                    <Text style={{ color: "blue", fontSize: 16 }}>Ver más</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, aspectRatio: 1 }}>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    partialVisbile={false}
                    draggable={true}
                    rewind={true}
                    deviceType={deviceType}
                    rewindWithAnimation={true}
                    shouldResetAutoplay={false}
                    pauseOnHover={true}
                    customRightArrow={<CustomRightArrowProductsCarousel />}
                    customLeftArrow={<CustomLeftArrowProductsCarousel />}
                    showDots={false}
                    autoPlaySpeed={4000}
                    itemClass="pr-2 md:pr-3"
                >
                    {yapePromosItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate(item.href)}
                        >
                            <Image
                                source={item.src}
                                style={{ width: "100%", aspectRatio: 1 }}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    ))}
                </Carousel>
            </View>
        </View>
    )
}

export default YapePromosCarousel
