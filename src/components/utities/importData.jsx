import axios from "axios";
import acessKey from "../../config";

export default async function getImages(item = "beautiful", count = 5, page = 1) {
    const images = await getData(item, count, page);
    const requireInfo = images.map((img) => {
        const result = {
            id: img.id,
            description: img.description,
            alt_description: img.alt_description,
            url: img.urls.small,
            download: img.links.download,
            likes: img.likes,
            user: {
                id: img.user.id,
                username: img.user.username,
                name: img.user.name,
                twitter: img.user.twitter_username,
                portfolio_url: img.user.portfolio_url,
                profile_image: img.user.profile_image.medium,
            }
        }
        return result;
    })
    return requireInfo;
}

export async function getData(item, count, page) {
    const key = "Client-ID " + acessKey();
    let apiUrl = `https://api.unsplash.com/search/photos?query=${item}&per_page=${count}&page=${page}`;
    const response = await axios.get(apiUrl, {
        headers: { 'Authorization': key }
    })
    return response.data.results;
}
