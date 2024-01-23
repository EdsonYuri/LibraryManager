import React from "react"

type pageLinksProps = {
    link: string,
    children: React.ReactNode
}

export default function PageLinks({link, children}: pageLinksProps){
    return(
        <a href={`${link}`}>
            <li className="w-full bg-amber-600 text-center hover:bg-zinc-400 transition duration-200">{children}</li>
        </a>
    )
}