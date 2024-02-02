import { useEffect, useState } from "react"

export default function Table({books}) {

    const [listBooks, setListBooks] = useState([])

    useEffect(() => {
        setListBooks(books)
    }, [books])

    return (
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