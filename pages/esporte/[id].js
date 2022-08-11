import Link from "next/link";
import Container  from '../../components/container'
import Image from 'next/image'
import img_logo from '../../public/logo3.png'
function Volei(props){
    const jogos = props.jogos
    console.log(props.id)
    var contador = -1;
    return(
        <div className="absolute w-full left-0">
            <div className='w-full min-h-screen h-full bg-fundo pb-10 pt-10'>
                <Container>
                    <main className="flex flex-col items-center justify-center w-full text-white gap-48">
                    {jogos.map(jogo => {
                        if(jogo.esporte.toString() == props.id){
                            const arrpontos = JSON.parse("[" + jogo.pontos + "]");
                            const pontosnossos = arrpontos.filter(ponto => ponto === 1).length;
                            const arrsaques = JSON.parse("[" + jogo.saques + "]");
                            const saquesbaixocerto = arrsaques.filter(pont => pont === 1).length;
                            const saquesaltocerto = arrsaques.filter(onto => onto === 3).length;
                            const saquesbaixoerrado = arrsaques.filter(pnto => pnto === 2).length;
                            const saquesaltoerrado = arrsaques.filter(poto => poto === 4).length;
                            const pontosdeles = arrpontos.length - pontosnossos
                            const pontos = jogo.pontos.split(",");
                            const tcerto = jogo.tcerto.split(",");
                            const mcerto = jogo.mcerto.split(",");
                            const terrado = jogo.terrado.split(",");
                            const merrado = jogo.merrado.split(",");
                            const mtcertos = [];
                            var tcertosoma = 0;
                            var mcertosoma = 0;
                            var terradosoma = 0;
                            var merradosoma = 0;
                            for (var mi = 0; mi < tcerto.length; mi++) {tcertosoma = tcertosoma + Number(tcerto[mi])}
                            for (var fi = 0; fi < mcerto.length; fi++) {mcertosoma = mcertosoma + Number(mcerto[fi])}

                            for (var si = 0; si < terrado.length; si++) {terradosoma = terradosoma + Number(terrado[si])}
                            for (var di = 0; di < merrado.length; di++) {merradosoma = merradosoma + Number(merrado[di])}
                            for (var i = 0; i < tcerto.length; i++) {mtcertos.push(Number(tcerto[i]) + Number(mcerto[i])); }
                            console.log(tcerto[19],mcerto[19])
                            return(
                                <section className="flex items-center flex-col justify-center w-full ">
                                    <div className="relative text-center flex flex-col items-center justify-center">
                                        <div>
                                            <h1 className="font-extrabold text-white/20 text-7xl">{jogo.sexo}</h1>
                                        </div>
                                        <div className="absolute flex">
                                            <div><span className="font-black text-8xl text-verde">{pontosnossos} </span> <span className="font-bold text-6xl">x </span> <span className="font-black text-8xl text-vermelho"> {pontosdeles}</span></div>
                                            <div className="font-black text-3xl rotate-90 -ml-12 -mb-2">{jogo.adversario}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-7 mt-20 justify-start items-end text-center overflow-auto max-w-5xl max-h-96 w-full scrollbonito scroll-pt-5"> 
                                        {pontos.map(ponto => {
                                            contador++ 
                                            const multiplic = Number(mtcertos[contador])*30+'px'
                                            if(ponto == 1){
                                                return(
                                                    <div className="flex flex-col pb-6">
                                                        <div style={{height: multiplic == '0px' ? '15px': multiplic}} className="w-9 bg-verde "></div>
                                                        <strong>{mtcertos[contador]}</strong>
                                                    </div>
                                                )  
                                            }else{
                                                return(
                                                    <div className="flex flex-col pb-6">
                                                        <div style={{height: multiplic == '0px' ? '15px': multiplic}} className="w-9 bg-vermelho"></div>
                                                        <strong>{mtcertos[contador]}</strong>
                                                    </div>
                                                )
                                            };
                                        })}
                                    </div>
                                    <div className="w-full py-5 px-10 bg-fundoshadow mt-5 max-w-5xl rounded-xl flex justify-between">
                                        <div className="flex gap-16">
                                            <div className="flex flex-col gap-2 items-center relative">
                                                <strong className="text-lg">Saques</strong>
                                                <div className="flex gap-7">
                                                    <div className="flex flex-col gap-2">
                                                        <strong className="text-verde">{saquesbaixocerto}</strong>
                                                        <strong className="text-vermelho">{saquesbaixoerrado}</strong>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <strong className="text-verde">{saquesaltocerto}</strong>
                                                        <strong className="text-vermelho">{saquesaltoerrado}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 items-center relative">
                                                <strong className="text-lg">Toques</strong>
                                                <div className="flex">
                                                    <div className="flex flex-col gap-2">
                                                        <strong className="text-verde">{tcertosoma}</strong>
                                                        <strong className="text-vermelho">{terradosoma}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 items-center relative">
                                                <strong className="text-lg">Manchetes</strong>
                                                <div className="flex">
                                                    <div className="flex flex-col gap-2">
                                                        <strong className="text-verde">{mcertosoma}</strong>
                                                        <strong className="text-vermelho">{merradosoma}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="font-bold text-xl rotate-90 -mb-2">{jogo.tempo}</div>
                                    </div>
                                </section>
                                );
                            }
                        })}
                    </main>
                </Container>
            </div>
        </div>
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
