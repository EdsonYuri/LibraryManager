import PageLinks from "./pageLinks"

export default function Menu() {
    return (
        <div className="w-64 bg-zinc-300 h-screen">
            <nav>
                <ul>
                    <PageLinks link={'#'}>Página inicial</PageLinks>
                    <PageLinks link={'#'}>Registrar consulta</PageLinks>
                    <PageLinks link={'#'}>Cadastrar livro</PageLinks>
                </ul>
            </nav>
        </div>
    )
}