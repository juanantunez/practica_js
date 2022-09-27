import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const VarConstLet = () => {


    const nombre ="Juan"
    let edad=35

    console.log(nombre)
    console.log(edad)

    console.log(edad+11)
/*
otra forma de modificar variable:
    const nombre ="Juan"
    let edad=35

    console.log(nombre)
    console.log(edad)

    edad=20

    console.log(edad)

para concatenar:

    const nombr ="Juan"
    const ape="loo"
    let ed=35

    console.log(nombr, ape)
    console.log(ed + nombr)
    console.log(nombr+ " "+ ape)
    */
   /*
    export const TemplateString = () => {
        const nombre="Juan"
        const apellido="Az"
        console.log(`Hola ${ nombre } ${ apellido }`)   
        */ 


    return (
        <>
            <h2>Var Const Let</h2>
            <p>Diferencia entre</p>
            <ul>
                <li>
                    <code>var</code>
                </li>
                <li>
                    <code>const</code>
                </li>
                <li>
                    <code>let</code>
                </li>
            </ul>
            <h6>Temas relacionados</h6>
            <ul>
                <li>Fragmet</li>
                <li>Function</li>
            </ul>
            <BtnPrimary 
                url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const'}
                targ={'_blank'}
                btnTxt={'CONST'}
            />
            <BtnPrimary 
                url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let'}
                targ={'_blank'}
                btnTxt={'LET'}
            />

            <hr />
        </>

    )
}
