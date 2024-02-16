import { GiBlackBook } from "react-icons/gi";
import SearchBook from "../components/forms/searchBook";
import { useState, useEffect } from "react";

import Menu from "../components/menu/menu"
import Modal from "../components/modal/modal";
import RegisterBook from "../components/forms/registerbook";
import RegisterBookButton from "../components/buttons/registerBookButton";
import Table from "../components/tables/table";


export default function Books() {
    // abertura do modal
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    // recupera livros cadastrados

    const [books, setBooks] = useState([])
    const [booksSearched, setBooksSearched] = useState([])
    const [booksShown, setbooksShown] = useState([])

    const fetchBooks = () => {
        if (localStorage.getItem("id")) {
            let quantityBooks = Number(localStorage.getItem("id"))

            for (let i = 0; i < quantityBooks; i++) {
                setBooks(prevBooks => {
                    const newBook = [...prevBooks]
                    newBook[i] = JSON.parse(localStorage.getItem(`book_${i}`))
                    return newBook
                })
            }
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])
    useEffect(() => {
        if(booksSearched != null){
            setbooksShown(booksSearched)
        } else {
            setbooksShown(books)
        }
    }, [books, booksSearched])

    // filtra livros

    const showsFilteredBooks = (e) => {
        setBooksSearched(e)
    }

    return (
        <div className="flex">

            <Modal isOpen={isOpen}>
                <div className="flex justify-between mb-5">
                    <h1 className="text-xl font-semibold">Cadastrar livro</h1>
                    <button onClick={handleClose}>X</button>
                </div>

                <RegisterBook fetchBooks={fetchBooks} />
            </Modal>

            <Menu />

            <main className="m-5 mb-0 w-full">
                <div className="flex justify-between">
                    <div className="flex items-end">
                        <GiBlackBook className="w-10 h-10" />
                        <h1 className="text-2xl font-semibold">Livros</h1>
                    </div>
                    <RegisterBookButton onClick={handleOpen} />
                </div>

                <SearchBook books={books} recoverFilteredBooks={showsFilteredBooks} />

                <Table books={booksShown} />
            </main>

        </div>
    )
}