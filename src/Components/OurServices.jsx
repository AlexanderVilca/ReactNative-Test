import React, { useState } from "react"
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Linking,
} from "react-native"

const OurServices = () => {
    const [expanded, setExpanded] = useState(false)

    const handleToggle = () => {
        setExpanded((prev) => !prev)
    }

    const serviceImages = [
        {
            src: require("@/assets/images/porcentaje-de-descuento.webp"),
            alt: "Porcentaje de descuento",
        },
        {
            src: require("@/assets/images/WHATSAPP.png"),
            alt: "WhatsApp",
        },
        {
            src: require("@/assets/images/favicon.png"),
            alt: "Beltrán Perú favicon",
        },
        {
            src: require("@/assets/images/carrito-de-compras.webp"),
            alt: "Carrito de compras",
        },
    ]

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Nuestros servicios</Text>

            <View style={styles.imageGrid}>
                {serviceImages.map((img, index) => (
                    <Image
                        key={index}
                        source={img.src}
                        style={styles.image}
                        resizeMode="contain"
                    />
                ))}
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.heading}>Descuentos exclusivos</Text>
                <Text style={styles.text}>
                    Ofertas exclusivas disponibles en{" "}
                    <Text
                        style={styles.link}
                        onPress={() =>
                            Linking.openURL("http://beltrandelivery.com")
                        }
                    >
                        beltrandelivery.com
                    </Text>
                    . Si estás en búsqueda de productos de marcas como Beltrán,
                    Portola, Edimar, Belini, entre otras, en Beltrán Perú Online
                    encontrarás todo lo que necesitas y más. Destacándose entre
                    otros sitios de comercio electrónico, Beltrán Perú ofrece
                    atractivos descuentos y un programa de fidelización muy
                    popular: Los puntos Beltrán. Únete a nuestra tienda en línea
                    para acumular puntos, obtener cupones personalizados y
                    disfrutar de numerosos descuentos adicionales.
                </Text>
                <Text style={styles.text}>
                    En{" "}
                    <Text
                        style={styles.link}
                        onPress={() =>
                            Linking.openURL("https://beltranperu.com/")
                        }
                    >
                        Beltrán Perú
                    </Text>{" "}
                    nos esforzamos por brindarte las mejores ofertas y
                    descuentos, permitiéndote cuidar de ti y de tus seres
                    queridos sin dañar tu bolsillo. Pero no se trata solamente
                    de los descuentos; si estás interesado en trabajar y ser
                    parte de una empresa 100% peruana, puedes hacerlo a través
                    de{" "}
                    <Text
                        style={styles.link}
                        onPress={() =>
                            Linking.openURL("https://beltranperu.com/")
                        }
                    >
                        www.beltranperu.com
                    </Text>
                    , donde serás atendido las 24 horas del día, los 365 días
                    del año. Además, con nuestro servicio de entrega a domicilio
                    de productos de{" "}
                    <Text
                        style={styles.link}
                        onPress={() =>
                            Linking.openURL("https://beltranperu.com/")
                        }
                    >
                        Beltrán Perú
                    </Text>
                    , recibirás tus compras directamente en tu puerta. Ofrecemos
                    envíos programados. En{" "}
                    <Text
                        style={styles.link}
                        onPress={() =>
                            Linking.openURL("https://beltranperu.com/")
                        }
                    >
                        Beltrán Perú
                    </Text>
                    , tu bienestar es nuestra prioridad, y ahorra aún más con el
                    cuponera Beltrán.
                </Text>

                {expanded && (
                    <>
                        <Text style={styles.heading}>Cyber Wow en Beltrán</Text>
                        <Text style={styles.text}>
                            Ahorra más durante el Cyber Wow en{" "}
                            <Text
                                style={styles.link}
                                onPress={() =>
                                    Linking.openURL(
                                        "http://beltrandelivery.com"
                                    )
                                }
                            >
                                beltrandelivery.com
                            </Text>
                            , Durante solo 10 días, obtén descuentos exclusivos
                            en conservas, aceites, pastas , mermelada, durazno
                            en almíbar y mucho más. ¡Ahorra de una manera que
                            beneficia tu bienestar! Aumenta tus ahorros durante
                            este Cyber Wow al pagar con todas las Billeteras
                            electrónicas, Visa y MasterCard. Además aprovecha
                            las YAPE PROMOS.
                        </Text>
                        <Text style={styles.heading}>Cyber Beltrán</Text>
                        <Text style={styles.text}>
                            Ahora es el momento perfecto para hacer tus compras
                            en línea con descuentos en tus marcas preferidas,
                            incluyendo productos como nuestras conservas que
                            contribuyen a la nutrición de tus seres queridos,
                            proporcionándoles vitaminas esenciales. Regístrate
                            ahora y sé el primero en aprovechar todos los
                            beneficios que tenemos para ti durante el
                            <Text style={styles.link}> Cyber Beltrán</Text>.
                        </Text>
                        <Text style={styles.heading}>
                            Encuentra asesoría en Nuestro Call Center
                        </Text>
                        <Text style={styles.text}>
                            En{" "}
                            <Text
                                style={styles.link}
                                onPress={() =>
                                    Linking.openURL("https://beltranperu.com/")
                                }
                            >
                                Beltrán Perú
                            </Text>
                            , tu bienestar es nuestra prioridad. Encuentra la
                            guía que necesitas llamando al (01) 5963-522, opción
                            1101, y comunícate con nuestro equipo comercial
                            disponible durante el horario de oficina, de 09:00
                            am a 18:30 pm, los 365 días del año. Ellos te
                            ofrecerán la seguridad y confianza que buscas en tus
                            consultas, pedidos de productos Beltrán, Portola,
                            Belini, Edimar y otros más. Además de nuestra
                            atención personalizada, aprovecha el servicio de
                            Beltrán Delivery, donde recibirás tus pedidos
                            directamente en la puerta de tu hogar. Elige entre
                            nuestro método de pago contra entrega, ya sea en
                            efectivo o con tarjeta de crédito/débito, según te
                            convenga mejor.
                        </Text>

                        <Text style={styles.heading}>
                            ¿Cuál es la ventaja de comprar en Beltrán online?
                        </Text>
                        <Text style={styles.text}>
                            Comprar en Beltràn Online tiene varias ventajas. En
                            primer lugar, disfruta de la comodidad de comprar
                            desde casa y recibir los productos directamente en
                            tu puerta. Además, contamos con promociones y
                            descuentos exclusivos en muchos productos. Programa
                            tu entrega de acuerdo a tu disponibilidad y paga con
                            efectivo, tarjeta de crédito o débito desde la misma
                            web o al recibir tus productos. En{" "}
                            <Text
                                style={styles.link}
                                onPress={() =>
                                    Linking.openURL(
                                        "http://beltrandelivery.com"
                                    )
                                }
                            >
                                Beltrán Delivery
                            </Text>{" "}
                            la diferencia está en los descuentos.
                        </Text>
                        <Text style={styles.heading}>
                            ¿Cómo puedo realizar una compra en Beltrán Online?
                        </Text>
                        <Text style={styles.text}>
                            Para realizar una compra en{" "}
                            <Text
                                style={styles.link}
                                onPress={() =>
                                    Linking.openURL(
                                        "http://beltrandelivery.com"
                                    )
                                }
                            >
                                Beltrán Online
                            </Text>
                            , visita nuestra página web, busca los productos que
                            deseas adquirir con descuentos especiales, agrégalos
                            al carrito de compra y sigue los pasos indicados
                            para finalizar el pedido. En Beltrán Online
                            aceptamos diversos métodos de pago, como tarjetas de
                            crédito y débito, efectivo y transferencia bancaria.
                        </Text>
                        <Text style={styles.heading}>
                            ¿Cuánto tiempo tarda en llegar mi pedido?
                        </Text>
                        <Text style={styles.text}>
                            El tiempo de entrega de tu pedido dependerá de tu
                            ubicación y del método de envío seleccionado.{" "}
                            <Text
                                style={styles.link}
                                onPress={() =>
                                    Linking.openURL(
                                        "http://beltrandelivery.com"
                                    )
                                }
                            >
                                Beltrán Online
                            </Text>{" "}
                            se esfuerza por realizar envíos rápidos y eficientes
                            para que recibas tus productos en el menor tiempo
                            posible.
                        </Text>
                        <Text style={styles.heading}>
                            Categorías y marcas top en Beltrán Online
                        </Text>
                        <Text style={styles.text}>
                            Beltrán es una de las tiendas online preferidas por
                            quienes buscan promociones y descuentos en productos
                            del día a día como{" "}
                            <Text style={styles.link}>
                                conservas, aceites, mermeladas, jabones
                            </Text>
                            , entre otros, por su amplia gama de productos, que
                            incluyen marcas propias y marcas top del Perú en su
                            sector.
                        </Text>
                        <Text style={styles.heading}>
                            Beltrán Online en Conservas
                        </Text>
                        <Text style={styles.text}>
                            Nuestras conservas de pescado Beltrán se elaboran
                            exclusivamente con materia prima de origen peruano
                            al 100%. Además, somos los dueños de las reconocidas
                            marcas{" "}
                            <Text style={styles.link}>
                                {""}
                                Beltrán, Portola, Edimar y Belíni
                            </Text>
                            , las cuales comparten esta misma materia prima de
                            calidad. Este compromiso se respalda con un riguroso
                            sistema de calidad e inocuidad de alto estándar.
                        </Text>
                        <Text style={styles.heading}>
                            Beltrán Online en Aceites
                        </Text>
                        <Text style={styles.text}>
                            Nos enorgullece compartir que nuestras marcas de
                            aceite son líderes en el mercado nacional, y estamos
                            comprometidos con la calidad para asegurar una
                            experiencia excepcional para cada consumidor. En
                            cada gota de aceite, 100% de soya, de nuestras
                            marcas{" "}
                            <Text style={styles.link}>
                                {""}
                                Beltrán, Belíni y Portola
                            </Text>
                            , se refleja nuestro compromiso. Nos preocupamos por
                            mantener una calidad constante para garantizar que
                            cada persona que elige nuestros aceites se lleve a
                            casa una experiencia deliciosa y satisfactoria.
                        </Text>
                        <Text style={styles.heading}>
                            Beltrán Online desayunos
                        </Text>
                        <Text style={styles.text}>
                            <Text
                                style={styles.link}
                                onPress={() =>
                                    Linking.openURL("https://beltranperu.com/")
                                }
                            >
                                Beltrán Perú
                            </Text>
                            , como madre de marcas tan potentes como Beltrán,
                            encuentra su inspiración en seguir creando nuevos
                            productos para sus consumidores. Es por eso que
                            nuestra empresa ha lanzado al mercado nuestras
                            conservas de durazno en almíbar y nuestra exquisita
                            mermelada de fresa bajo la marca{" "}
                            <Text style={styles.link}>Beltrán</Text>. Esta línea
                            de productos encarna la confianza y calidad que
                            nuestros consumidores esperan de nosotros.
                        </Text>
                        <Text style={styles.heading}>
                            Beltrán Online Limpieza
                        </Text>
                        <Text style={styles.text}>
                            Nos complace continuar nuestro crecimiento,
                            observando cómo nuestros consumidores eligen cada
                            vez más una marca peruana que transmite confianza y
                            calidad en cada producto que ofrecemos. Por ello,
                            como empresa, nuestra visión es expandirnos y
                            diversificar nuestras ofertas, como es el caso de
                            nuestro jabón de barra blanco{" "}
                            <Text style={styles.link}>Beltrán</Text>. Este
                            producto continúa representando un equilibrio
                            perfecto entre calidad y precio, manteniendo así
                            nuestra reputación en el mercado.
                        </Text>
                        <Text style={styles.heading}>
                            ¡Tus puntos Beltrán es digital!
                        </Text>
                        <Text style={styles.text}>
                            Tus
                            <Text style={styles.link}> Puntos Beltrán</Text> es
                            el programa de fidelización de Beltrán Online que
                            ahora también es digital. Afíliate a tus{" "}
                            <Text style={styles.link}>Puntos Beltrán</Text> en
                            nuestra web para sumar puntos, tener cupones
                            personalizados y cientos de descuentos.
                        </Text>
                        <Text style={styles.heading}>
                            Beneficios exclusivos para socios Puntos Beltrán
                        </Text>
                        <Text style={styles.text}>
                            Acumula Puntos-Dinero: Puedes usar tus puntos dinero
                            para pagar parte o el total de tu compra. Cupones de
                            descuento. Tienes descuentos adicionales y con tus
                            <Text style={styles.link}>Puntos Beltrán</Text>{" "}
                            Digital tienes cupones personalizados. Compras con
                            descuentos. En muchas de tus compras puedes obtener
                            descuentos, que reducen el monto que tienes que
                            pagar. ¡El ahorro es inmediato!
                        </Text>
                        <Text style={styles.heading}>
                            ¿Cómo acumulo Puntos Dinero con Puntos Beltrán?
                        </Text>
                        <Text style={styles.text}>
                            Si estás afiliado a{" "}
                            <Text style={styles.link}>Puntos Beltrán</Text>{" "}
                            Digital acumularás 01 punto-dinero por cada S/0.50
                            de consumo en web. Por cada cien (100) Puntos -
                            Dinero acumulados obtendrás S/1.00 de descuento.
                            Entérate de los términos y condiciones del programa
                            :
                            <Text style={styles.link}>
                                {" "}
                                Términos y Condiciones
                            </Text>
                        </Text>
                        <Text style={styles.heading}>Beltrán Delivery</Text>
                        <Text style={styles.text}>
                            <Text style={styles.link}>Beltrán Online</Text> se
                            posiciona como una destacada empresa que sobresale
                            por su eficiente servicio de supermercado delivery.
                            Con un enfoque en la comodidad y accesibilidad,{" "}
                            <Text style={styles.link}>Beltrán Online</Text>{" "}
                            ofrece a sus clientes la conveniencia de recibir
                            medicamentos a domicilio. Este servicio de
                            Supermercado delivery garantiza que los clientes
                            puedan acceder de manera rápida y segura a una
                            amplia gama de productos, convirtiendo a{" "}
                            <Text style={styles.link}>Beltrán Online</Text> en
                            una opción confiable para satisfacer las necesidades
                            de abastecimiento para tu hogar.
                        </Text>
                        <Text style={styles.heading}>
                            Los Packs del Ahorro en Beltrán Online
                        </Text>
                        <Text style={styles.text}>
                            En{" "}
                            <Text
                                style={styles.link}
                                onPress={() =>
                                    Linking.openURL("https://beltranperu.com/")
                                }
                            >
                                beltrandelivery.com
                            </Text>{" "}
                            queremos verte siempre bien. Por esta razón, te
                            presentamos nuestro departamento de Packs del Ahorro
                            con mayores descuentos en tus productos y marcas de
                            tu preferencia como conservas, aceites y mucho más.
                            Si compras en Pack, ahorras más.
                        </Text>
                    </>
                )}

                <TouchableOpacity onPress={handleToggle} style={styles.button}>
                    <Text style={styles.buttonText}>
                        {expanded ? "Ver menos" : "Ver más"}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default OurServices

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 12,
    },
    imageGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    image: {
        width: 60,
        height: 80,
        margin: 2,
    },
    descriptionContainer: {
        gap: 12,
    },
    heading: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 12,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
    },
    link: {
        color: "green",
        textDecorationLine: "none",
    },
    button: {
        marginTop: 16,
        alignSelf: "center",
    },
    buttonText: {
        color: "green",
        fontWeight: "600",
    },
})
