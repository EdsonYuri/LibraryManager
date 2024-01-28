import RegisterBookButton from "../buttons/registerBookButton"

export default function RegisterBook() {
    return (
        <form action="" className="flex flex-col gap-5">
            <fieldset className="relative flex flex-wrap flex-col gap-5">
                <label htmlFor="title" className="w-full">Título:
                    <input type="text" id="title" placeholder="Título" className="w-full float-left" />
                </label>

                <label htmlFor="author">Autor:
                    <input type="text" id="author" placeholder="Autor" />
                </label>

                <label htmlFor="category">Categoria:
                    <input type="text" id="category" placeholder="Categoria" />
                </label>

                <label htmlFor="year" >Ano de lançamento:
                    <input type="number" id="year" className="w-28 ml-2" placeholder="Lançamento" />
                </label>

                <label htmlFor="copies">N° de exemplares:
                    <input type="number" id="copies" className="w-28 ml-5" placeholder="Exemplares" />
                </label>
            </fieldset>


            <RegisterBookButton onClick={null} />

        </form>
    )
}