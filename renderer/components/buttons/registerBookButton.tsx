import {MouseEventHandler} from "react";

export default function RegisterBookButton({onClick}: {onClick?: MouseEventHandler<HTMLButtonElement>}) {
    return (
        <button onClick={onClick} className="font-medium px-3 bg-zinc-600 shadow-xl text-zinc-200 rounded-xl p-2 hover:bg-zinc-700 transition duration-200">
            Cadastrar livro
        </button>
    )
}