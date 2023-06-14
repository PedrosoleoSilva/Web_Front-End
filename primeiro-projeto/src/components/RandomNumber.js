import { useState } from "react";
import Box from "./Box";

const RandomNumber = () => {
    const [RandomNumber, setRandomNumber] = useState(0)

    const generateRandomNumber= ()=>{
        const generatedNumber = Math.floor(Math.random()* 100)
        setRandomNumber(generatedNumber)
    }

    return (
        <Box fontColor="#fff">
            <button onClick={generateRandomNumber}>Clique aqui para sortear</button>
            <h3>O numero aleatorio é : {RandomNumber}</h3>
        </Box>
    );
}

export default RandomNumber;