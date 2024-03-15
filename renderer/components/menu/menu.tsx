import { IoMdSettings } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import Image from "next/image"

import PageLinks from "./pageLinks"

export default function Menu() {
    return (
        <div
            className="flex flex-col justify-between w-56 bg-zinc-100 h-screen shadow-xl border-zinc-400 flex-shrink-0 text-zinc-800">
            <nav className="mt-[100px]">
                <ul>
                    <PageLinks link={'/home'}>Página inicial</PageLinks>
                    <PageLinks link={'#'}>Registrar consulta</PageLinks>
                    <PageLinks link={'/books'}>Livros</PageLinks>
                </ul>
            </nav>
            
            <div className="flex items-center justify-around p-2">
                <button
                    className="flex items-center justify-between gap-1 hover:underline box-content p-1 rounded-3xl transition duration-200 hove">
                    <IoMdSettings className="text-xl"/>
                    <p>Configurações</p>
                </button>
                
                <button>
                    <IoMdMoon className="text-xl hover:text-zinc-500 transition duration-200 box-content p-1 rounded-full"/>
                </button>
            </div>
        
        </div>
    )
}