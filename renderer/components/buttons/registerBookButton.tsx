export default function RegisterBookButton({onClick}) {
    return (
        <button onClick={onClick} className="border p-2 hover:bg-zinc-400 transition duration-200">            
            Cadastrar livro
        </button>
    )
}