import { IoSearch } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { useEffect, useState } from "react";

export default function SearchBook({ books, recoverFilteredBooks }) {

    const [booksSearched, setBooksSearched] = useState(null)
    const [searchData, setSearchData] = useState({
        title: "",
        author: "",
        category: "",
        year: "",
        copies: ""
    })

    const addSearchData = e => setSearchData({ ...searchData, [e.target.name]: e.target.value })

    useEffect(() => {
        let filtered = books.filter((book) => {
            for (let key in searchData) {
                if (searchData[key] && !book[key].includes(searchData[key])) {
                    return false
                }
            }
            return true
        })

        setBooksSearched(filtered)

    }, [searchData])

    useEffect(() => {
        for (let i in searchData) {
            if (searchData[i] !== "") {
                recoverFilteredBooks(booksSearched)
                break;
            } else {
                recoverFilteredBooks(null)
            }
        }
    }, [booksSearched])

    return (
        <div className="my-10">
            <h2>Pesquisar</h2>
            <form action="" className="flex flex-wrap gap-4">
                <input type="text" name="title" placeholder="Título" onChange={addSearchData} />
                <input type="text" name="author" placeholder="Autor" onChange={addSearchData} />
                <input type="text" name="category" placeholder="Categorias" onChange={addSearchData} />
                <input type="number" name="year" className="w-28" placeholder="Ano" onChange={addSearchData} />
                <input type="number" name="copies" className="w-28" placeholder="Exemplares" onChange={addSearchData} />

                <button className="flex justify-center p-1 w-11 border">
                    <IoSearch />
                </button>

                <button className="flex justify-center p-1 w-11 border">
                    <GrPowerReset />
                </button>
            </form>
        </div>
    )
}