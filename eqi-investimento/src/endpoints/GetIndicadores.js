import axios from 'axios';
import { baseURL } from './baseURL';

export const GetIndicadorCDI = () => {
    axios
    .get(`${baseURL}/indicadores?nome=cdi`)
    .then( res => {
        console.log(res.data)
    })
    .catch( error => {
        console.log(error.data.response)
    })
};

export const GetIndicadorIPCA = () => {
    axios
    .get(`${baseURL}/indicadores?nome=ipca`)
    .then( res => {
        console.log(res.data)
    })
    .catch( error => {
        console.log(error.data.response)
    })
};