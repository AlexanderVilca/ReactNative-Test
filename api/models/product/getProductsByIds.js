import axios from "axios"

const SPACE_ID = "vkdsye91qcu6"
const ACCESS_TOKEN = "ZUUqv5Hk84NsStGiU-O1o1PWJ87auWeqi79ZHGWlh2E"

const getProductsByIds = async (ids = []) => {
    try {
        const query = `sys.id[in]=${ids.join(",")}&content_type=product`
        const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?${query}&access_token=${ACCESS_TOKEN}`
        const response = await axios.get(url)
        return response.data.items
    } catch (error) {
        console.log("Error al obtener productos:", error.response?.data || error.message)
        throw error
    }
}


export default getProductsByIds
