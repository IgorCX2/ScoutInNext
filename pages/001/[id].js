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
function Scouts(props){
    const id = props.id;
    console.log({id})
    const [response, setResponse] = useState({
        type: '',
        mensagem: ''
    })
    const [contador, updateContador] = useState([]);
    const sendS = async e =>{
        e.preventDefault();
        try{
            const res = await fetch('https://scoutinnextbackend.vercel.app/api/jogos/cad-001', {
                method: 'POST',
                body: JSON.stringify({"id": id, "contador": contador}),
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
                <section className='flex flex-col drop-shadow-2xl bg-white rounded-xl px-5 py-4 gap-2 '>
                    <div className='flex gap-5'>
                        <div className='flex flex-col items-center'>
                            <h1 className='mb-3 font-black text-xl text-gray-700'>baixo</h1>
                            <button onClick={() => updateContador( arr => [...arr, `1`])} className='w-10 h-10 bg-green-500 mb-5'></button>
                            <button onClick={() => updateContador( arr => [...arr, `2`])} className='w-10 h-10 bg-rose-500'></button>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='mb-3 font-black text-xl text-gray-700'>cima</h1>
                            <button onClick={() => updateContador( arr => [...arr, `3`])} className='w-10 h-10 bg-green-500 mb-5'></button>
                            <button onClick={() => updateContador( arr => [...arr, `4`])} className='w-10 h-10 bg-rose-500'></button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={sendS} className='bg-white rounded-xl absolute text-sm drop-shadow-2xl px-2'> enviar</button>
                    </div>
                        {response.type === 'error' ? <p> erro,tente novamente </p>: ""}
                        {response.type === 'success' ? window.location.replace("/001"): ""}
                </section> 
            </main>
        </>
    ) 
}
export default Scouts