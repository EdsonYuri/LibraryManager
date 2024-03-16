import React from "react"

type modalProps = {
    modalState: boolean,
    children: React.ReactNode,
    toggleModal: () => void;
}

export default function Modal({ modalState, children, toggleModal }: modalProps) {
    if (!modalState) {
        return null
    }

    return (
        <>
            <div className="bg-black fixed inset-0 opacity-50 backdrop-blur-3xl"></div>

            <div className="w-2/5 p-5 bg-zinc-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto ">
                <div className="flex justify-between mb-5 rounded-md">
                    <h1 className="text-xl font-semibold">Cadastrar livro</h1>
                    <button onClick={toggleModal}>X</button>
                </div>

                {children}
            </div>
        </>
    )
}