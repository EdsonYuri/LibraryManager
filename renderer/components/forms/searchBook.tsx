import { IoSearch } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";

export default function SearchBook() {
    return (
        <div className="my-10">
            <h2>Pesquisar</h2>
            <form action="" className="flex flex-wrap gap-4">
                <input type="text" placeholder="Título" />
                <input type="text" placeholder="Autor" />
                <input type="text" placeholder="Categorias" />
                <input type="number" className="w-28" placeholder="Exemplares" />
                <input type="number" className="w-28" placeholder="Disponíveis" />

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