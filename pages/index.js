import Container  from '../components/container'
import Link from "next/link";
import Image from 'next/image'
import img_logo from '../public/logo3.png'
function Home(props){
    console.log(props.jogos)
    const jogos = props.jogos
    return(
        <>
            <div className="absolute w-full left-0 top-0">
                <div className='w-full min-h-screen h-full bg-fundo'>
                    <Container>
                        <main className="flex justify-between w-full text-white mt-10 gap-7">
                            <section className='flex flex-col gap-7 max-w-xs w-full'>
                                <div className='bg-telapro border border-gray-800 pt-5 relative'>
                                    <div className='px-8'>
                                        <h1 className='text-2xl font-medium mb-2'>Scout De:</h1>
                                        <div className='flex'>
                                            <span className='text-sm'>Esporte</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-4 bg-fundoshadow px-8 relative'>
                                        <div className='w-full h-px bg-gray-800 absolute left-0'></div>
                                        <div className='py-3 border-b-2 border-gray-800'>
                                            <strong>Volei</strong>
                                        </div>
                                        <div className='py-3 border-b-2 border-gray-800'>
                                            <strong>Futebol</strong>
                                        </div>

                                        <div className='py-3 border-b-2 border-gray-800'>
                                            <strong>Handebol</strong>
                                        </div>
                                        <div className='py-3'>
                                            <strong>Queimada</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-telapro border border-gray-800 py-5 relative'>
                                    <div className='px-8'>
                                        <div className='flex justify-between'>
                                            <h1 className='text-2xl font-medium mb-2'>Qtd de Jogos:</h1>
                                            <h2 className='text-2xl font-medium mb-2'>{Number(props.idjogos) + 1}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-telapro border border-gray-800 pt-5 relative'>
                                    <div className='px-8'>
                                        <h1 className='text-2xl font-medium mb-2'>Participantes:</h1>
                                        <div className='flex justify-between'>
                                            <span className='text-sm'>Nomes</span>
                                            <span className='text-sm text-right'>Ano</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-4 bg-fundoshadow px-8 relative'>
                                        <div className='w-full h-px bg-gray-800 absolute left-0'></div>
                                        <div className='flex justify-between py-3 border-b-2 border-gray-800'>
                                            <strong>-------</strong>
                                            <p className='text-right'>--</p>
                                        </div>
                                        <div className='flex justify-between py-3 border-b-2 border-gray-800'>
                                            <strong>----</strong>
                                            <p className='text-right'>--</p>
                                        </div>

                                        <div className='flex justify-between py-3 border-b-2 border-gray-800'>
                                            <strong>----- ----</strong>
                                            <p className='text-right'>--</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='flex flex-col gap-7 w-full'>
                                <div className='w-full bg-telapro flex flex-col pt-5 px-8 border border-gray-800'>
                                    <h1 className='mb-7 font-medium text-2xl'>Filtrar por Esporte</h1>
                                    <div className='flex justify-between'>
                                        <Link href="/">
                                            <div className='h-36 w-36 bg-gradient-to-t from-sky-400/50 to-fundoshadow/0 flex flex-col relative justify-center items-center'>
                                                <div className='flex flex-col text-center'>
                                                    <span className='text-sm'>ESPORTE</span>
                                                    <h1 className='text-xl font-bold'>FUTEBOL</h1>
                                                </div>
                                                <div className='bottom-0 absolute bg-sky-400 w-full h-1.5'></div>
                                            </div>
                                        </Link>
                                        <Link href="/">
                                            <div className='h-36 w-36 bg-gradient-to-t from-purple-500/50 to-fundoshadow/0 flex flex-col relative justify-center items-center'>
                                                <div className='flex flex-col text-center'>
                                                    <span className='text-sm'>ESPORTE</span>
                                                    <h1 className='text-xl font-bold'>HANDEBOL</h1>
                                                </div>
                                                <div className='bottom-0 absolute bg-purple-500 w-full h-1.5'></div>
                                            </div>
                                        </Link>
                                        <Link href="/esporte/volei">
                                            <div className='h-36 w-36 bg-gradient-to-t from-emerald-600/50 to-fundoshadow/0 flex flex-col relative justify-center items-center'>
                                                <div className='flex flex-col text-center'>
                                                    <span className='text-sm'>ESPORTE</span>
                                                    <h1 className='text-xl font-bold'>VOLEI</h1>
                                                </div>
                                                <div className='bottom-0 absolute bg-emerald-600 w-full h-1.5'></div>
                                            </div>
                                        </Link>
                                        <Link href="/">
                                            <div className='h-36 w-36 bg-gradient-to-t from-rose-500/50 to-fundoshadow/0 flex flex-col relative justify-center items-center'>
                                                <div className='flex flex-col text-center'>
                                                    <span className='text-sm'>ESPORTE</span>
                                                    <h1 className='text-xl font-bold'>QUEIMADA</h1>
                                                </div>
                                                <div className='bottom-0 absolute bg-rose-500 w-full h-1.5'></div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col gap-5'>
                                    <h1 className='mb-2 font-medium text-2xl'>Ultimos Jogos</h1>
                                    {jogos.map((jogo)=>{
                                        //pontos
                                        const arrpontos = JSON.parse("[" + jogo.pontos + "]");
                                        const pontosnossos = arrpontos.filter(ponto => ponto === 1).length;
                                        const pontosdeles = arrpontos.length - pontosnossos

                                        //manc certo
                                        const mcerto = JSON.parse("[" + jogo.mcerto + "]");
                                        let valormcerto = 0;
                                        for(var i = 0; i < mcerto.length; i++) {
                                            valormcerto += mcerto[i];
                                        }
                                        //manc errada
                                        const merrado = JSON.parse("[" + jogo.merrado + "]");
                                        let valormerrado = 0;
                                        for(var i = 0; i < merrado.length; i++) {
                                            valormerrado += merrado[i];
                                        }
                                        //to certo
                                        const tcerto = JSON.parse("[" + jogo.tcerto + "]");
                                        let valortcerto = 0;
                                        for(var i = 0; i < tcerto.length; i++) {
                                            valortcerto += tcerto[i];
                                        }
                                        //to errado
                                        const terrado = JSON.parse("[" + jogo.terrado + "]");
                                        let valorterrado = 0;
                                        for(var i = 0; i < terrado.length; i++) {
                                            valorterrado += terrado[i];
                                        }
                                        return(
                                            <div className='w-full flex flex-col relative'>
                                                <div className='w-full bg-telapro flex px-8 border border-gray-800 justify-between items-center relative'>
                                                    <div className={pontosnossos > pontosdeles ? "left-0 absolute bg-emerald-400 w-1 h-3/5": 'absolute'}></div>
                                                    <div className={pontosnossos > pontosdeles ? "left-0 absolute bg-gradient-to-r from-emerald-600/50 to-fundoshadow/0 w-80 h-full": 'absolute'}></div>
                                                    <div className='flex items-center z-10'>
                                                        <Image
                                                            src={img_logo}
                                                            alt='logo'
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <p className='text-2xl'>X<span className='text-5xl font-medium'> {jogo.adversario}</span></p>
                                                    </div>
                                                    <div className='flex flex-col items-center'>
                                                        <div className='flex text-2xl'><span className='text-verde font-bold'>{pontosnossos}</span>x<span className='text-vermelho font-bold'>{pontosdeles}</span></div>
                                                        <div className='text-sm bg-fundoshadow py-1 px-1 font-semibold rounded-full'>{jogo.tempo}</div>
                                                    </div>
                                                    <div className='flex items-center gap-10'>
                                                        <div className='text-center'>
                                                            <div className='flex text-xl'><span className='font-bold'>{valormcerto}</span>/<span className='text-vermelho font-bold'>{valormerrado}</span></div>
                                                            <div className='text-sm font-semibold'>
                                                                {jogo.esporte === 'volei' ? "manchetes": ""}
                                                                {jogo.esporte === 'futebol' ? "chute": ""}
                                                                {jogo.esporte === 'queimada' ? "": ""}
                                                                {jogo.esporte === 'handebol' ? "": ""}

                                                            </div>
                                                        </div>
                                                        <div className='text-center'>
                                                            <div className='flex text-xl'><span className='font-bold'>{valortcerto}</span>/<span className='text-vermelho font-bold'>{valorterrado}</span></div>
                                                            <div className='text-sm font-semibold'>
                                                                {jogo.esporte === 'volei' ? "toques": ""}
                                                                {jogo.esporte === 'futebol' ? "passes": ""}
                                                                {jogo.esporte === 'queimada' ? "": ""}
                                                                {jogo.esporte === 'handebol' ? "": ""}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col items-center'>
                                                        <div className='text-xl'>{jogo.esporte}</div>
                                                        <div className='text-sm'>{jogo.sexo}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        </main>
                    </Container>
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps(){
    const response = await fetch(`https://scoutinnextbackend.vercel.app/api/jogos/all`)
    const data = await response.json();
    return{
        props:{
            jogos: data.jogos,
            idjogos: data.idjogo
        }
    }
}
export default Home;
