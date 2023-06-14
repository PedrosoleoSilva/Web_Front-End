import { useState } from "react";

const Name = () => {
    const [nome, setNome] = useState()
    const handleShowName = () =>{
        if(nome){
            setNome(undefined)
        }else {
            setNome("leo")
        }
    }
    return (
        <box fontColor='#fff'>
             <button onClick={handleShowName}>Clique</button>
            <h4>Nome: {nome}</h4>
           
        </box>
    );
}

export default Name;