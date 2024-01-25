import { useEffect, useState } from "react";
import getImages from "./utities/importData"
import ImageWrapper from "./ImageWrapper";

export default function Content({ item, count }) {
    const [images, setImages] = useState([]);
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
        <div className="flex flex-col items-center mt-5">
            <div className="grid gap-y-5 md:grid-cols-2 lg:grid-cols-3">
                {images.map((image) => {
                    return (
                        <div key={image.id} className="flex justify-center">
                            <ImageWrapper image={image} />
                        </div>
                    )
                })}
            </div>
            <button onClick={getNextImage} className="text-xl border-2 border-gray-600 rounded-lg hover:bg-slate-200 p-1 text-center">Next</button>
        </div>
    )
}

