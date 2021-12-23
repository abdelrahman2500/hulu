import Image from "next/image"
import HeaderItems from "./HeaderItems"
import {HomeIcon, LightningBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon} from "@heroicons/react/outline"

function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-grow justify-evenly m-5 max-w-xl">
                <HeaderItems Icon={HomeIcon} title="HOME" />
                <HeaderItems Icon={LightningBoltIcon} title="TRENDING" />
                <HeaderItems Icon={BadgeCheckIcon} title="VERIFIED" />
                <HeaderItems Icon={CollectionIcon} title="COLLECTIONS" />
                <HeaderItems Icon={SearchIcon} title="SEARCH" />
                <HeaderItems Icon={UserIcon} title="ACCOUNT" />
            </div>
            <div className="text-center">
                <Image src="https://links.papareact.com/ua6" className="" width={200} height={100} />
            </div>
        </header>
    )
}

export default Header
