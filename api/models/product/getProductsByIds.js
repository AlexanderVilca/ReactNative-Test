import axios from "axios";

const SPACE_ID = "vkdsye91qcu6";
const ACCESS_TOKEN = "ZUUqv5Hk84NsStGiU-O1o1PWJ87auWeqi79ZHGWlh2E";

const getProductsByIds = async (ids = []) => {
    try {
        const query = ids.map((id) => `sys.id=${id}`).join("&");
        const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?${query}&access_token=${ACCESS_TOKEN}`;
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        
    }
}