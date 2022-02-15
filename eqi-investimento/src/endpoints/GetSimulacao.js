import axios from 'axios';
import { baseURL } from './baseURL';

export const GetSimulacao = (indexacao, rendimento) => {
    axios
    .get(`${baseURL}/simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`)
    .then( res => {
        console.log(res.data)
    })
    .catch( error => {
        console.log(error.data.response)
    })
};