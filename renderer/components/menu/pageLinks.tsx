import React from "react"

type pageLinksProps = {
    link: string,
    children: React.ReactNode
}

export default function PageLinks({link, children}: pageLinksProps){
    return(
        <a href={`${link}`} className="w-full flex justify-center items-center text-center h-10 hover:bg-zinc-400 transition duration-200 border-b border-zinc-400">
            <li>{children}</li>
        </a>
    )
}