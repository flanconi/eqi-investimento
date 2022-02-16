import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURL } from '../endpoints/baseURL';
import GlobalStateContext from './CreateContext';

export const GlobalState = (props) => {

    const [cdi, setCdi] = useState('')
    const [ipca, setIpca] = useState('')

    const GetIndicadorCDI = () => {
        axios
        .get(`${baseURL}/indicadores?nome=cdi`)
        .then( res => {
            setCdi(res.data[0].valor)
        })
        .catch( error => {
            console.log(error.data.response)
        })
    };

    const GetIndicadorIPCA = () => {
        axios
        .get(`${baseURL}/indicadores?nome=ipca`)
        .then( res => {
            setIpca(res.data[0].valor)
        })
        .catch( error => {
            console.log(error.data.response)
        })
    };

    useEffect(() => {
        GetIndicadorCDI()
        GetIndicadorIPCA()
    },[])

    return (
        <GlobalStateContext.Provider
            value={{cdi, ipca}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}