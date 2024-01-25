import { GiBlackBook } from "react-icons/gi";

import Menu from "../components/menu/menu"

export default function Books() {
    return (
        <div className="flex">
            <Menu />

            <main className="m-5 mb-0 w-full">
                <div className="flex justify-between mb-5">
                    <div className="flex items-end">
                        <GiBlackBook className="w-10 h-10" />
                        <h1 className="text-2xl font-semibold">Livros</h1>
                    </div>
                    <button className="border p-2 hover:bg-zinc-400 transition duration-200">Cadastrar livro</button>
                </div>

                <table className="border w-full">
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Título</th>
                            <th>Subtítulo</th>
                            <th>Exemplares</th>
                            <th>Disponíveis</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>9788869183157</td>
                            <td>Harry Potter e a Pedra Filosofal</td>
                            <td>Subtítulo</td>
                            <td>7</td>
                            <td>4</td>
                            <td>Fantasia</td>
                        </tr>

                        <tr>
                            <td>9788845292613</td>
                            <td>Senhor dos anéis</td>
                            <td> la ele</td>
                            <td>2</td>
                            <td>1</td>
                            <td>Fantasia</td>
                        </tr>

                        <tr>
                            <td>6500471571</td>
                            <td>O Diário de Hass</td>
                            <td>Vol.1</td>
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