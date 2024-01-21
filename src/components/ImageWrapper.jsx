import { heart } from "./utities/svgs"
export default function ImageWrapper({ image }) {
    return (
        <div className="grid grid-cols-1 border-2 border-gray-600 p-1 m-1 rounded-lg">
            <div className="col-span-1 flex justify-center">
                <img className="rounded-lg h-full w-full hover:opacity-85" src={image.url} alt={image.alt_description} />
            </div>
            <div className="col-span-1 flex justify-between">
                <a className="flex items-center" href={image.user.portfolio_url}>
                    <img className="rounded-full h-12 m-1" src={image.user.profile_image} alt={image.user.name} />
                    <div className="hover:font-bold">{image.user.name}</div>
                </a>
                <div className="flex m-1 hover:font-bold">
                    {heart} {image.likes}
                </div>
            </div>
            <div className="col-span-1 flex justify-center hover:font-bold ">{image.description}</div>
        </div>
    )
}
