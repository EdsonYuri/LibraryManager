import { IoMdSettings } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import Image from "next/image"

import PageLinks from "./pageLinks"

export default function Menu() {
    return (
        <div className="flex flex-col justify-between w-56 bg-zinc-300 h-screen border-r border-zinc-400 flex-shrink-0">
            <div>
                <figure className="flex justify-center items-center border-b border-zinc-400 py-2">
                    <Image src='/images/logo.png' width={150} height={150}></Image>
                </figure>

                <nav>
                    <ul>
                        <PageLinks link={'/home'}>Página inicial</PageLinks>
                        <PageLinks link={'#'}>Registrar consulta</PageLinks>
                        <PageLinks link={'/books'}>Livros</PageLinks>
                    </ul>
                </nav>
            </div>

            <div className="flex items-center justify-around p-2">
                <button className="flex items-center justify-between gap-1 hover:bg-zinc-400 box-content p-1 rounded-3xl transition duration-200">
                    <IoMdSettings className="text-xl"/>
                    <p>Configurações</p>
                </button>

                <button>
                    <IoMdMoon className="text-xl hover:bg-zinc-400 box-content p-1 rounded-full"/>
                </button>
            </div>

        </div>
    )
}