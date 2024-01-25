import { heart } from "./utities/svgs"
export default function ImageWrapper({ image }) {
    return (
        <div className="w-10/12 max-w-[450px] border-2 border-gray-600 mx-2 shadow-lg hover:shadow-gray-500 rounded-lg overflow-hidden col-span-1">
            <img className="h-[450px] md:h-[430px] w-full rounded-lg rounded-b-none hover:opacity-85" src={image.url} alt={image.alt_description} />
            <div className="flex justify-between items-center">
                <a className="flex items-center m-2" href={image.user.portfolio_url}>
                    <img className="rounded-full h-12 m-1" src={image.user.profile_image} alt={image.user.name} />
                    <div className="hover:font-bold">{image.user.name}</div>
                </a>
                <div className="flex m-1 hover:font-bold">
                    {heart} {image.likes}
                </div>
            </div>
            <div className="hover:font-bold p-1 text-wrap text-center">{image.description || "❤️ ❤️ ❤️"}</div>
        </div>
    )
}
