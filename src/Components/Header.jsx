import {
    View,
    Image,
    TouchableOpacity,
    Text,
    Dimensions,
    StyleSheet,
} from "react-native"
import React from "react"
import Carousel from "react-native-reanimated-carousel"

const { width } = Dimensions.get("window")

const BannerMobile = [
    {
        src: require("@/assets/images/HEADER-BANNER-MOVIL.png"),
        alt: "Haz tu pedido a través de nuestro Whatsapp Banner",
    },
    {
        src: require("@/assets/images/HEADER-BANNER-MOVIL-2.png"),
        alt: "Encuentra todas nuestras promociones a través de nuestro Beltránfono",
    },
];
const Header = () => {
    return (
        <View style={styles.container}>
            <Carousel
                width={width}
                height={72}
                autoPlay
                autoPlayInterval={4000}
                data={BannerMobile}
                scrollAnimationDuration={1000}
                loop
                renderItem={({ item }) => (
                    <Image
                        source={item.src}
                        style={styles.image}
                        resizeMode="contain"
                        accessibilityLabel={item.alt}
                    />
                )}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: -15,
    },
    image: {
        width: "100%",
        height: 72,
    },
})
