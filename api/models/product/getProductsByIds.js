import axios from "axios"
import { SPACE_ID, ACCESS_TOKEN } from "../../../constants"

const getProductsByIds = async (ids = []) => {
    try {
        const query = `sys.id[in]=${ids.join(
            ","
        )}&content_type=product&include=2`
        const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?${query}&access_token=${ACCESS_TOKEN}`
        const response = await axios.get(url)

        const items = response.data.items
        const includes = response.data.includes

        const assets = includes?.Asset || []
        const entries = includes?.Entry || []

        const resolveReference = (ref) => {
            return (
                assets.find((a) => a.sys.id === ref?.sys?.id) ||
                entries.find((e) => e.sys.id === ref?.sys?.id)
            )
        }

        const enrichedProducts = items.map((item) => {
            const fields = item.fields

            const mainPictureAsset = resolveReference(fields.mainPicture)
            const brandEntry = resolveReference(fields.brand)

            return {
                id: item.sys.id,
                fields: {
                    ...fields,
                    brand: brandEntry?.fields || {},
                    mainPicture: mainPictureAsset?.fields?.file?.url
                        ? `https:${mainPictureAsset.fields.file.url}`
                        : "",
                    discountPercent:
                        fields.discountPrice && fields.normalPrice
                            ? Math.ceil(
                                  ((fields.normalPrice - fields.discountPrice) /
                                      fields.normalPrice) *
                                      100
                              )
                            : 0,
                },
            }
        })

        return enrichedProducts
    } catch (error) {
        console.log(
            "Error al obtener productos:",
            error.response?.data || error.message
        )
        throw error
    }
}

export default getProductsByIds
