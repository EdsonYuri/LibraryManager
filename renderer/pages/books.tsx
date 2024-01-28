import { GiBlackBook } from "react-icons/gi";
import SearchBook from "../components/forms/searchBook";
import { useState } from "react";

import Menu from "../components/menu/menu"
import Modal from "../components/modal/modal";
import RegisterBook from "../components/forms/ registerbook";


export default function Books() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    return (
        <div className="flex">

            <Modal isOpen={isOpen}>
                <div className="flex justify-between">
                    <h1 className="text-xl font-semibold">Cadastrar livro</h1>
                    <button onClick={handleClose}>X</button>
                </div>

                <div>
                    <div className="my-10">
                        <RegisterBook/>
                    </div>
                </div>
            </Modal>

            <Menu />

            <main className="m-5 mb-0 w-full">
                <div className="flex justify-between">
                    <div className="flex items-end">
                        <GiBlackBook className="w-10 h-10" />
                        <h1 className="text-2xl font-semibold">Livros</h1>
                    </div>
                    <button className="border p-2 hover:bg-zinc-400 transition duration-200"
                        onClick={handleOpen}>
                        Cadastrar livro
                    </button>
                </div>

                <SearchBook />

                <table className="w-full">
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Exemplares</th>
                            <th>Disponíveis</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>9788869183157</td>
                            <td>Harry Potter e a Pedra Filosofal</td>
                            <td>J. K. Rowling</td>
                            <td>7</td>
                            <td>4</td>
                            <td>Fantasia</td>
                        </tr>

                        <tr>
                            <td>9788845292613</td>
                            <td>Senhor dos anéis</td>
                            <td> J. R. R. Tolkien</td>
                            <td>2</td>
                            <td>1</td>
                            <td>Fantasia</td>
                        </tr>

                        <tr>
                            <td>6500471571</td>
                            <td>O Diário de Hass</td>
                            <td>Heliel Ferraz Pessoa</td>
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