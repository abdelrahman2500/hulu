import { useRouter } from "next/router"
import requests from "../utils/requests"

function Nav() {
    const router = useRouter()
    return (
        <nav className="relative">
            <div className="flex justify-between overflow-x-scroll px-10 sm:px-20 whitespace-nowrap scrollbar-hide">
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2 
                    onClick={() => router.push(`/?genre=${key}`)}
                    className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-400  mx-3 sm:mx-4" key={key}>{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202a] " />
        </nav>
    )
}

export default Nav