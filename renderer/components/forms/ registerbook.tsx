export default function RegisterBook() {
    return (
        <form action="">
            <fieldset className="relative flex flex-wrap flex-col gap-y-4">
                <label htmlFor="title">Título</label>
                <input type="text" id="title" placeholder="Título" />

                <label htmlFor="author">Autor</label>
                <input type="text" id="author" placeholder="Autor" />

                <label htmlFor="category">Categoria</label>
                <input type="text" id="category" placeholder="Categoria" />

                <label htmlFor="year">Ano de lançamento</label>
                <input type="number" id="year" className="w-28" placeholder="Lançamento" />
                
                <label htmlFor="copies">N° de exemplares</label>
                <input type="number" id="copies" className="w-28" placeholder="Exemplares" />
            </fieldset>


        </form>
    )
}