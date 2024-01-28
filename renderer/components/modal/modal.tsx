import React from "react"

type modalProps = {
    isOpen: boolean,
    children: React.ReactNode
}

export default function Modal({ isOpen, children }: modalProps) {
    if (!isOpen) {
        return null
    }

    return (
        <>
            <div className="bg-black fixed inset-0 opacity-50 backdrop-blur-3xl"></div>

            <div className="w-2/5 h-5/6 p-5 bg-zinc-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {children}
            </div>
        </>
    )
}