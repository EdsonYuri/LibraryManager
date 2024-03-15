import { useEffect, useState } from "react"

export default function Table({books}) {

    const [listBooks, setListBooks] = useState([])

    useEffect(() => {
        setListBooks(books)
    }, [books])

    return (
        <table className="w-full ">
            <thead>
                <tr>
                    <th className="w-1/4">Título</th>
                    <th className="w-1/4">Autor</th>
                    <th className="w-1/5">Ano de lançamento</th>
                    <th className="w-1/12">Exemplares</th>
                    <th className="w-1/12">Disponíveis</th>
                    <th className="w-3/4">Categoria</th>
                </tr>
            </thead>

            <tbody>
                {listBooks.map((book, index) => ( 
                    <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.year}</td>
                        <td>{book.copies}</td>
                        <td>undefined</td>
                        <td>{book.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}