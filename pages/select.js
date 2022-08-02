import Link from "next/link";
function Selectype(props){
    const jogo_ativo = props.jogos[props.idjogos]
    console.log(jogo_ativo)
    return(
        <>
            <main className="w-full flex justify-center mt-20">
                <div className="flex flex-col text-center max-w-md w-full">
                    <div className="font-black text-5xl text-gray-800">
                        <h1>TIPO DE SCOUT</h1>
                        <h1>SAQUES</h1>
                    </div>
                    <div className="text-lg text-gray-800 mt-8">
                        <h2>selecione um jogo, caso não tenha nenhum jogo disponivel espere/recarrege a pagina, caso apareca em vermelho, espere/recarrege, pois o mesmo esta com o status fechado</h2>
                    </div>
                    {/* blocos */}
                    <div className="mt-5">
                        <Link href={`/002/${jogo_ativo.status === 'aberto' ? props.idjogos: ""}`}>
                            <div className="flex gap-10 items-center drop-shadow-2xl bg-white rounded-xl px-5 py-2 mt-5">
                                <div className={jogo_ativo.status === 'aberto' ? "bg-green-500 rounded-full w-16 h-16": "bg-rose-500 rounded-full w-16 h-16"}></div>
                                <div className="flex">
                                    <h1><span className="font-black text-lg">Adversário: </span>{jogo_ativo.adversario}</h1>
                                </div> 
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
export async function getServerSideProps(){
    const response = await fetch(`https://scoutinnextbackend.vercel.app/api/jogos/listar`)
    const data = await response.json();
    return{
        props:{
            jogos: data.jogos,
            idjogos: data.idjogo
        }
    }
}
export default Selectype;
