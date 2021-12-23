function HeaderItems({Icon, title}) {
    return (
        <div className="header-items">
            <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
                <Icon className="h-8 mb-1 group-hover:animate-bounce" />
                <p className="text-xs opacity-0 group-hover:md:opacity-100 tracking-widest">
                    {title}
                </p>
            </div>
        </div>
    )
}

export default HeaderItems
