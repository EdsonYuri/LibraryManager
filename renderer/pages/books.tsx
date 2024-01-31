import { GiBlackBook } from "react-icons/gi";
import SearchBook from "../components/forms/searchBook";
import { useState } from "react";

import Menu from "../components/menu/menu"
import Modal from "../components/modal/modal";
import RegisterBook from "../components/forms/registerbook";
import RegisterBookButton from "../components/buttons/registerBookButton";


export default function Books() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    return (
        <div className="flex">

            <Modal isOpen={isOpen}>
                <div className="flex justify-between mb-5">
                    <h1 className="text-xl font-semibold">Cadastrar livro</h1>
                    <button onClick={handleClose}>X</button>
                </div>

                <RegisterBook />
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

                <SearchBook />

                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Ano de lançamento</th>
                            <th>Exemplares</th>
                            <th>Disponíveis</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Harry Potter e a Pedra Filosofal</td>
                            <td>J. K. Rowling</td>
                            <td>1997</td>
                            <td>7</td>
                            <td>4</td>
                            <td>Fantasia</td>
                        </tr>

                        <tr>
                            <td>Senhor dos anéis</td>
                            <td> J. R. R. Tolkien</td>
                            <td>1954</td>
                            <td>2</td>
                            <td>1</td>
                            <td>Fantasia</td>
                        </tr>

                        <tr>
                            <td>O Diário de Hass</td>
                            <td>Heliel Ferraz Pessoa</td>
                            <td>2008</td>
                            <td>6</td>
                            <td>5</td>
                            <td>Terror</td>
                        </tr>
                    </tbody>
                </table>
            </main>

        </div>
    )
}