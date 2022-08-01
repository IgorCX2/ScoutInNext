import Link from "next/link";
function Creatype(){
    const sendCad = async e =>{
    }
    return(
        <>
            <main className="w-full flex justify-center mt-20">
                <div className="flex flex-col text-center max-w-md w-full">
                    <div className="font-black text-5xl text-gray-800">
                        <h1>TIPO DE SCOUT</h1>
                        <h1>TOQUES</h1>
                    </div>
                    <div className="text-lg text-gray-800 mt-8">
                        <h2>faça o cadastro do jogo</h2>
                    </div>
                    {/* blocos */}
                    <form onSubmit={sendCad} className="mt-8 text-gray-800 text-left">
                        <div className="flex flex-col mb-3">
                            <span className="mb-1">esporte</span>
                            <input className="w-65 border-2 rounded-lg outline-lightblue p-2 mb-2" list="esporte" name="esporte"/>
                            <datalist id="esporte">
                                <option value="futebol">futebol</option>
                                <option value="volei">volei</option>
                                <option value="handebol">handebol</option>
                                <option value="queimada">queimada</option>
                            </datalist>
                        </div>
                        <div className="flex flex-col mb-3">
                            <span className="mb-1">adversario</span>
                            <input className="w-48 border-2 rounded-lg outline-gray-800 p-2 mb-2" list="adversario" name="adversario"/>
                            <datalist id="adversario">
                                <option value="9ºA">9ºA</option>
                                <option value="9ºB">9ºB</option>
                                <option value="1ºA">1ºA</option>
                                <option value="1ºB">1ºB</option>
                                <option value="2ºA">2ºA</option>
                                <option value="2ºB">2ºB</option>
                                <option value="3ºB">3ºB</option>
                            </datalist>
                        </div>
                        <div className="flex flex-col mb-3">
                            <span className="mb-1">sexo</span>
                            <input className="w-24 border-2 rounded-lg outline-gray-800 p-2 mb-2" list="sexo" name="sexo"/>
                            <datalist id="sexo">
                                <option value="masc">masc</option>
                                <option value="fem">fem</option>
                                <option value="mist">mist</option>
                            </datalist>
                        </div>
                        <div className="flex flex-col mb-3">
                            <span className="mb-1">tempo</span>
                            <input className="w-60 border-2 rounded-lg outline-lightblue p-2 mb-2" list="tempo" name="tempo"/>
                            <datalist id="tempo">
                                <option value="1° tempo">1° tempo</option>
                                <option value="2° tempo">2° tempo</option>
                                <option value="3° tempo">3° tempo</option>
                            </datalist>
                        </div>
                        <div className="flex flex-col mb-3 text-center  mt-12">
                            <input type="submit" className="bg-gray-800 rounded-lg text-white p-2 font-bold" value="crie o cadastro do jogo" />
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Creatype;