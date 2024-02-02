import { useState } from "react"

import RegisterBookButton from "../buttons/registerBookButton"

export default function RegisterBook({fetchBooks}) {

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
        <form action="" className="flex flex-col gap-5">
            <fieldset className="relative flex flex-wrap flex-col gap-5">
                <label htmlFor="title" className="w-full">Título:
                    <input type="text" id="title" placeholder="Título" className="w-full float-left" onChange={addBookValues} />
                </label>

                <label htmlFor="author">Autor:
                    <input type="text" id="author" placeholder="Autor" onChange={addBookValues} />
                </label>

                <label htmlFor="category">Categoria:
                    <input type="text" id="category" placeholder="Categoria" onChange={addBookValues} />
                </label>

                <label htmlFor="year" >Ano de lançamento:
                    <input type="number" id="year" className="w-28 ml-2" placeholder="Lançamento" onChange={addBookValues} />
                </label>

                <label htmlFor="copies">N° de exemplares:
                    <input type="number" id="copies" className="w-28 ml-5" placeholder="Exemplares" onChange={addBookValues} />
                </label>
            </fieldset>


            <RegisterBookButton onClick={registerbook} />

        </form>
    )
}