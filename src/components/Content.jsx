import { useEffect, useMemo, useState } from "react";
import getImages from "./utities/importData"
import ImageWrapper from "./ImageWrapper";

export default function Content({ item, count }) {
    const initial = useMemo(() => {
        return {
            id: "fIq0tET6llw",
            description: "The focus",
            alt_description: "person holding light bulb",
            url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNzc4NjZ8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHx8fHwxNzA1ODYwMzczfDA&ixlib=rb-4.0.3&q=80&w=400",
            download: "https://unsplash.com/photos/fIq0tET6llw/download?ixid=M3wxNzc4NjZ8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHx8fHwxNzA1ODYwMzczfDA",
            likes: 8735,
            user: {
                id: "wdrZcuVyaXg",
                username: "jdiegoph",
                name: "Diego PH",
                twitter: "j_diegoph",
                portfolio_url: "http://www.instagram.com/j.diegoph/",
                profile_image: "https://images.unsplash.com/profile-1553882437332-2aaadee4ff49?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64"
            }
        }
    })
    const [images, setImages] = useState([initial]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchFunc = async () => {
            const response = await getImages(item, count)
            setImages(response);
        }
        fetchFunc();
    }, [item])

    useEffect(() => {
        const fetchFunc = async () => {
            const response = await getImages(item, count, page)
            setImages([...images, ...response]);
        }
        fetchFunc();
    }, [page])
    const getNextImage = async () => {
        setPage(prev => prev + 1)
    }

    return (
        <div className="flex flex-col items-center">
            <div className="">
                {images.map((image) => {
                    return (
                        <div key={image.id} className="w-full">
                            <ImageWrapper image={image} />
                        </div>
                    )
                })}
            </div>
            <button onClick={getNextImage} className="text-xl border-2 border-gray-600 rounded-lg hover:bg-slate-200 p-1 text-center">Next</button>
        </div>
    )
}

