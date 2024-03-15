import React from "react"
import Link from "next/link";

type pageLinksProps = {
    link: string,
    children: React.ReactNode
}

export default function PageLinks({link, children}: pageLinksProps){
    return(
        <a href={`${link}`} className="w-full flex justify-center items-center h-10 font-semibold hover:bg-zinc-200 transition duration-200">
            <li>{children}</li>
        </a>
    )
}