import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
export async function getServerSideProps(context){
    const id = context.query.id;
    return{
        props:{
            id
        }
    }
}
function Scoutf(props){
    const [response, setResponse] = useState({
        type: '',
        mensagem: ''
    })
    const id = props.id

    const [pontos, updatePontos] = useState([]);
    //contador
    const [pcerto, updatePcerto] = useState(0);
    const [perrado, updatePerrado] = useState(0);
    const [serrado, updateSerrado] = useState(0);
    const [scerto, updateScerto] = useState(0);
    //array
    const [apcerto, aupdatePcerto] = useState([]);
    const [aperrado, aupdatePerrado] = useState([]);
    const [aserrado, aupdateSerrado] = useState([]);
    const [ascerto, aupdateScerto] = useState([]);
    function arraysValores(){
        aupdatePcerto( arr => [...arr, pcerto]),
        aupdatePerrado( arr => [...arr, perrado]),
        aupdateSerrado( arr => [...arr, serrado]),
        aupdateScerto( arr => [...arr, scerto])
        updatePcerto(0)
        updatePerrado(0)
        updateSerrado(0)
        updateScerto(0)
    }
    const passarvalor = async e =>{
        updatePontos( arr => [...arr, 1])
        arraysValores();
    }
    const passarvalorp = async e =>{
        updatePontos( arr => [...arr, 2])
        arraysValores();
    }
    const sendS = async e =>{
        e.preventDefault();
        try{
            const res = await fetch('https://scoutinnextbackend.vercel.app/api/jogos/cad-000', {
                method: 'POST',
                body: JSON.stringify({"id": id, "pontos": pontos, "apcerto": apcerto, "aperrado": aperrado, "aserrado": aserrado, "ascerto": ascerto}),
                headers: { 'Content-Type': 'application/json' }
            });
            const responseEnv = await res.json();
            if(responseEnv.erro){
                setResponse({
                    type: 'error',
                    mensagem: "responseEnv.mensagem"
                });
            }else{
                setResponse({
                    type: 'success',
                    mensagem: "responseEnv.mensagem"
                });
            }
        }catch(err){
            setResponse({
                type: 'error',
                mensagem: "erro"
            });
        }
    }
    return(
        <>
            <main className="w-full flex justify-center mt-20">
                <section className='flex flex-col drop-shadow-2xl bg-white rounded-xl px-5 py-4 gap-2  '>
                    <div className='flex gap-5'>
                        <div className='flex flex-col items-center text-white font-black'>
                            <h1 className='mb-3 text-xl text-gray-700'>toq</h1>
                            <button onClick={() => updatePcerto(pcerto + 1)} className='w-10 h-10 bg-green-500 mb-5'>{pcerto}</button>
                            <button onClick={() => updatePerrado(perrado + 1)} className='w-10 h-10 bg-rose-500 mb-5'>{perrado}</button>
                            <button onClick={passarvalor} className='w-10 h-5 bg-orange-400 text-sm'>PN</button>
                        </div>
                        <div className='flex flex-col items-center text-white font-black'>
                            <h1 className='mb-3 text-xl text-gray-700'>man</h1>
                            <button onClick={() => updateScerto(scerto + 1)} className='w-10 h-10 bg-green-500 mb-5'>{scerto}</button>
                            <button onClick={() => updateSerrado(serrado + 1)} className='w-10 h-10 bg-rose-500 mb-5'>{serrado}</button>
                            <button onClick={passarvalorp} className='w-10 h-5 bg-orange-300 text-sm'>PD</button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={sendS} className='bg-white rounded-xl absolute text-sm drop-shadow-2xl px-2'> enviar</button>
                    </div>
                    {response.type === 'error' ? <p> erro,tente novamente </p>: ""}
                    {response.type === 'success' ? window.location.replace("/000"): ""}
                </section> 
            </main>
        </>
    ) 
}
export default Scoutf