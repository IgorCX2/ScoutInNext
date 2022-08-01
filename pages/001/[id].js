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
    const id = props.id
    const resultado =  id.split("-");
    const [contador, updateContador] = useState([]);
    const esporte = resultado[1];
    return(
        <>
            <main className="w-full flex justify-center mt-20">
                <section className='flex flex-col drop-shadow-2xl bg-white rounded-xl px-5 py-4 gap-2 '>
                    <div className='flex gap-5'>
                        <div className='flex flex-col items-center'>
                            <h1 className='mb-3 font-black text-xl text-gray-700'>baixo</h1>
                            <button onClick={() => updateContador( arr => [...arr, `0`])} className='w-10 h-10 bg-green-500 mb-5'></button>
                            <button onClick={() => updateContador( arr => [...arr, `1`])} className='w-10 h-10 bg-rose-500'></button>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='mb-3 font-black text-xl text-gray-700'>cima</h1>
                            <button onClick={() => updateContador( arr => [...arr, `2`])} className='w-10 h-10 bg-green-500 mb-5'></button>
                            <button onClick={() => updateContador( arr => [...arr, `3`])} className='w-10 h-10 bg-rose-500'></button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={() => updateContador( arr => [...arr, `3`])} className='bg-white rounded-xl absolute text-sm drop-shadow-2xl px-2'> enviar</button>
                    </div>
                    {/*<div>
                        {contador.map( e =>
                            <div>{ e }</div>
                        )}
                    </div>*/}
                    
                </section> 
            </main>
        </>
    ) 
}
export default Scouts