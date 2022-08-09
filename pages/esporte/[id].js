import Link from "next/link";
import Container  from '../../components/container'
import Image from 'next/image'
import img_logo from '../../public/logo3.png'
function Volei(props){
    const jogos = props.jogos
    console.log(props.id)
    return(
        <>
            <div className='w-full min-h-screen h-full bg-fundo absolute left-0 '>
                <Container>
                    <main className="flex flex-col items-center justify-center w-full text-white mt-10 gap-7">
                    {jogos.map(jogo => {
                        const pontos = jogo.pontos.split(",")
                        if(jogo.esporte.toString() == props.id){
                            return(
                                <section className="flex items-center flex-col justify-center w-full">
                                    <div className="relative text-center flex flex-col items-center justify-center">
                                        <div>
                                            <h1 className="font-extrabold text-white/30 text-7xl">MASCULINO</h1>
                                        </div>
                                        <div className="absolute flex">
                                            <div><span className="font-black text-8xl text-verde">13 </span> <span className="font-bold text-6xl">x </span> <span className="font-black text-8xl text-vermelho"> 11</span></div>
                                            <div className="font-black text-3xl rotate-90 -ml-12 -mb-2">{jogo.adversario}</div>
                                        </div>
                                    </div>
                                        <div className="flex gap-7 mt-20">
                                            {pontos.map(ponto => {
                                            if(ponto == 1){
                                                return(
                                                    <div className="w-9 h-80 bg-verde"></div>
                                                )    
                                            }else{
                                                return(
                                                    <div className="w-9 h-80 bg-vermelho"></div>
                                                )
                                            };
                                        })}
                                    </div>
                                </section>
                                );
                            }
                        })}
                    </main>
                </Container>
            </div>
        </>
    )
}
export async function getServerSideProps(context){
    const id = context.query.id;
    const response = await fetch(`https://scoutinnextbackend.vercel.app/api/jogos/all`)
    const data = await response.json();
    return{
        props:{
            jogos: data.jogos,
            idjogos: data.idjogo,
            id
        }
    }
}
export default Volei;
