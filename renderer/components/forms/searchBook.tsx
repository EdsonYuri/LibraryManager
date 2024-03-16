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
            <p className="mb-1 font-semibold ">Pesquisar</p>
            <form action="" className="flex flex-wrap gap-4">
                <input className="bg-zinc-300 placeholder:text-zinc-800 border-none px-3 py-1 rounded-md shadow-md focus:outline-zinc-700" type="text" name="title" placeholder="Título" onChange={addSearchData} />
                <input className="bg-zinc-300 placeholder:text-zinc-800 border-none px-3 py-1 rounded-md shadow-md focus:outline-zinc-700" type="text" name="author" placeholder="Autor" onChange={addSearchData} />
                <input className="bg-zinc-300 placeholder:text-zinc-800 border-none px-3 py-1 rounded-md shadow-md focus:outline-zinc-700" type="text" name="category" placeholder="Categorias" onChange={addSearchData} />
                <input className="bg-zinc-300 placeholder:text-zinc-800 border-none px-3 py-1 rounded-md shadow-md focus:outline-zinc-700" type="number" name="year" placeholder="Ano" onChange={addSearchData} />
                <input className="bg-zinc-300 placeholder:text-zinc-800 border-none px-3 py-1 rounded-md shadow-md focus:outline-zinc-700" type="number" name="copies" placeholder="Exemplares" onChange={addSearchData} />

                <button className="text-[16px]">
                    <IoSearch />
                </button>

                <button className="text-[16px]">
                    <GrPowerReset />
                </button>
            </form>
        </div>
    )
}