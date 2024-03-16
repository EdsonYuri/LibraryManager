import { GiBlackBook } from "react-icons/gi";
import SearchBook from "../components/forms/searchBook";
import { useState, useEffect } from "react";

import Menu from "../components/menu/menu"
import Modal from "../components/modal/modal";
import RegisterBook from "../components/forms/registerbook";
import RegisterBookButton from "../components/buttons/registerBookButton";
import Table from "../components/tables/table";


export default function Books() {
    // abre e fecha modal
    const [modalState, setModalState] = useState(false)
    const toggleModal = () => setModalState(!modalState)
    

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
        <div className="flex bg-zinc-100">

            <Modal modalState={modalState} toggleModal={toggleModal}>
                <RegisterBook fetchBooks={fetchBooks} />
            </Modal>

            <Menu />

            <main className="m-5 mb-0 w-full">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <GiBlackBook className="text-[30px]" />
                        <h1 className="text-2xl font-bold">Livros</h1>
                    </div>
                    <RegisterBookButton onClick={toggleModal} />
                </div>

                <SearchBook books={books} recoverFilteredBooks={showsFilteredBooks} />

                <Table books={booksShown} />
            </main>

        </div>
    )
}