import Image from "next/image"
import {ThumbUpIcon} from "@heroicons/react/solid"

function Thumbnail({data}) {
    console.log(data)
    const BASE_URL = "https://image.tmdb.org/t/p/original"
    return (
        <div className="relative group cursor-pointer m-3 3xl:w-min">
            <Image 
                className="transition transform hover:scale-125"
                layout="responsive"
                src={`${BASE_URL}${data.backdrop_path || data.poster_path}` || `${BASE_URL}${result.poster_path}`}
                height={1080}
                width={1920}
            />
            <div>
                <p className="truncate max-w-md">{data.overview}</p>
                <h2 className="text-2xl text-white">{data.title || data.name}</h2>
                <p className="flex items-center transition opacity-0 group-hover:opacity-100">
                    {data.media_type && `${data.media_type} .`}{" "}
                    {data.release_date || data.fisrt_air_date}
                    <span className="absolute top-2 right-2 p-1 transition group-hover:bg-[#06202A] group-hover:text-white flex items-center m-2 rounded ">
                        <ThumbUpIcon className="h-5 mx-2" />{data.vote_count} 
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
