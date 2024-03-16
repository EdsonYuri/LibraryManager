import { useState } from "react"

import RegisterBookButton from "../buttons/registerBookButton"

export default function RegisterBook({ fetchBooks }) {

    if (!localStorage.getItem('id')) localStorage.setItem("id", '0')

    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        category: "",
        year: "",
        copies: ""
    })

    const addBookValues = e => setBookData({ ...bookData, [e.target.id]: e.target.value })

    const registerbook = e => {
        e.preventDefault()
        let registerId = Number(localStorage.getItem('id'))

        localStorage.setItem(`book_${registerId}`, JSON.stringify(bookData))
        localStorage.setItem("id", String(registerId + 1))

        fetchBooks()
    }

    return (
        <form action="" className="flex flex-col gap-5 rounded-xl">
            <fieldset className="relative flex flex-wrap flex-col gap-5">
                <label htmlFor="title" className="w-full">Título:
                    <input type="text" id="title" placeholder="Macunaíma" className="w-full float-left bg-zinc-600 placeholder:text-zinc-200 text-zinc-200 border-none px-3 py-1 rounded-md shadow-md focus:outline-zinc-900" onChange={addBookValues} />
                </label>

                <label htmlFor="author">Autor:
                    <input type="text" id="author" placeholder="Autor" className="bg-zinc-600 placeholder:text-zinc-200 text-zinc-200 border-none px-3 py-1 rounded-md shadow-md focus:outline-zinc-900" onChange={addBookValues} />
                </label>

                {/*
                    Melhor colocar um select para Categorias
                */}
                <label htmlFor="category">Categoria:
                    <input type="text" id="category" placeholder="Categoria" className="bg-zinc-600 placeholder:text-zinc-200 text-zinc-200 border-none px-3 py-1 rounded-md shadow-md focus:outline-zinc-900" onChange={addBookValues} />
                </label>
                <hr className="text-zinc-800" />
                <div className="flex gap-2">
                    <label htmlFor="year" className="w-1/2">Ano de lançamento:
                        <input type="number" id="year"
                            className="bg-zinc-600 placeholder:text-zinc-200 text-zinc-200 border-none px-3 py-1 rounded-md shadow-md focus:outline-zinc-900"
                            placeholder="Lançamento" onChange={addBookValues} />
                    </label>

                    <label htmlFor="copies" className="w-1/2">N° de exemplares:
                        <input type="number" id="copies"
                            className="bg-zinc-600 placeholder:text-zinc-200 text-zinc-200 border-none px-3 py-1 rounded-md shadow-md focus:outline-zinc-900"
                            placeholder="Exemplares" onChange={addBookValues} />
                    </label>
                </div>
            </fieldset>


            <RegisterBookButton onClick={registerbook} />

        </form>
    )
}