import React, { useState } from 'react'
import { Button } from './Components'
import * as math from 'mathjs'
// https://codesandbox.io/s/calculadora-final-2potg?file=/src/App.js

const arrOperacoes = ["*","/","+","-"]

const Index = () =>{

    const [input, setInput] = useState('')
    
    const insereNum = (val) =>{
        console.log(val)
        setInput(input + val)
    }

    const insereOperacao = (val) =>{
        if( input === "" || ( arrOperacoes.includes(input[input.length - 1]) && arrOperacoes.includes(val) ) ){
            return 
        }else{
            console.log( setInput(input + val) )
            setInput(input + val)
        }
    }

    const calcular = () =>{
        if( input === "" || arrOperacoes.includes(input[input.length - 1]) ){
            return input
        }else{
            setInput(math.evaluate(input))
        }
    }

    return(
        <>
            <div className="container">
                <header className='text-center mt-4 mb-4' >
                    <h1>Calculadora com React</h1>
                </header>
                <div className="calc-wrapper">
                    <Button isInput>{input}</Button>
                    <div className="linha">
                        <Button onClick={insereNum} >7</Button>
                        <Button onClick={insereNum} >8</Button>
                        <Button onClick={insereNum} >9</Button>
                        <Button onClick={insereOperacao} >/</Button>
                    </div>
                    <div className="linha">
                        <Button onClick={insereNum} >4</Button>
                        <Button onClick={insereNum} >5</Button>
                        <Button onClick={insereNum} >6</Button>
                        <Button onClick={insereOperacao} >*</Button>
                    </div>
                    <div className="linha">
                        <Button onClick={insereNum} >1</Button>
                        <Button onClick={insereNum} >2</Button>
                        <Button onClick={insereNum} >3</Button>
                        <Button onClick={insereOperacao} >+</Button>
                    </div>
                    <div className="linha">
                        <Button onClick={insereOperacao} >.</Button>
                        <Button onClick={insereNum} >0</Button>
                        <Button onClick={ () => setInput("") } >C</Button>
                        <Button onClick={insereOperacao} >-</Button>
                    </div>
                    <div className='linha' >
                        <Button onClick={calcular} >=</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index