import axios from 'axios';
import { ButtonGroup, Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { baseURL } from '../endpoints/baseURL';
import useForm from '../hooks/useForm';
import ResultadoSimulacaoComponent from './simulacaoResultado';
import GlobalStateContext from '../globalContext/CreateContext'

function SimulacaoComponent(){

    //Estado Global
    const {cdi, ipca } = useContext(GlobalStateContext)

    //Endereçando método GET
    const [indexacao, setIndexacao] = useState('')
    const [rendimento, setRendimento] = useState('')

    //State para manipular dados
    const [simulacaoResultado, setSimulacaoResultado] = useState({})
    const [liberarResultado, setResultado] = useState(false)

    //Endpoint
    const GetSimulacao = (indexacao, rendimento) => {
        axios
        .get(`${baseURL}/simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`)
        .then( res => {
            setSimulacaoResultado(res.data[0])
            setResultado(true)
            console.log(simulacaoResultado)
        })
        .catch( error => {
            console.log(error.data.response)
        })
    };


    //Método Get
    const submitForm = (event) => {
        event.preventDefault()
        clear()
        GetSimulacao(indexacao, rendimento)
    } 

    //FORM 
    const { form, onChangeInput, clear } = useForm({ 
    aporteInicial: '', 
    prazo: '', 
    aporteMensal: '',
    rentabilidade: '' })

    return(
        <div>
            
                <form onSubmit={submitForm}>
                    <ButtonGroup variant="contained" aria-label="outlined button group" color='warning'>
                        <Button onClick={() => setRendimento('liquido')}>Liquído</Button>
                        <Button onClick={() => setRendimento('bruto')}>Bruto</Button>
                    </ButtonGroup>

                    <ButtonGroup variant="contained" aria-label="outlined button group" color='warning'>
                        <Button onClick={() => setIndexacao('pre')}>Pré</Button>
                        <Button onClick={() => setIndexacao('pos')}>Pos</Button>
                        <Button onClick={() => setIndexacao('ipca')}>Fixado</Button>
                    </ButtonGroup>

                    <TextField
                    name='aporteInicial'
                    value={form.aporteInicial}
                    onChange={onChangeInput}
                    id="standard-basic" 
                    label="Aporte Inicial" 
                    variant="standard" 
                    color='warning' 
                    size='normal'
                    pattern="[0-9]+$"
                    />

                    <TextField 
                    name='prazo'
                    value={form.prazo}
                    onChange={onChangeInput}
                    id="standard-basic" 
                    label="Prazo (em meses)" 
                    variant="standard" 
                    color='warning' 
                    size='normal'
                    pattern="[0-9]+$"/>

                    <TextField 
                    value={ipca}
                    id="standard-basic" 
                    label="IPCA (ao ano)" 
                    variant="standard" 
                    color='warning' 
                    size='normal'
                    InputProps={{
                        readOnly: true,
                    }}/>

                    <TextField 
                    name='aporteMensal'
                    value={form.aporteMensal}
                    onChange={onChangeInput}
                    id="standard-basic" 
                    label="Aporte Mensal" 
                    variant="standard" 
                    color='warning' 
                    size='normal'
                    pattern="[0-9]+$"/>

                    <TextField 
                    name='rentabilidade'
                    value={form.rentabilidade}
                    onChange={onChangeInput}
                    id="standard-basic" 
                    label="Rentabilidade" 
                    variant="standard" 
                    color='warning' 
                    size='normal'
                    pattern="[0-9]+$"/>

                    <TextField 
                    value= {cdi}
                    id="standard-basic" 
                    label="CDI (ao ano)" 
                    variant="standard" 
                    color='warning' 
                    size='normal'
                    InputProps={{
                        readOnly: true,
                    }}/>

                    <Button 
                    
                    variant="outlined" 
                    color='warning'>Limpar</Button>

                    <Button
                    type='submit'
                    variant="contained" 
                    color='warning'>Simular</Button>
                </form>
            
                {liberarResultado? <ResultadoSimulacaoComponent
                        tituloFinalBruto = 'Valor Final Bruto'
                        valorFinalBruto = {simulacaoResultado.valorFinalBruto}
                        tituloAliquotaIR = 'Valor Alíquota IR'
                        valorAliquotaIR = {simulacaoResultado.aliquotaIR}
                        tituloPagoIR = 'Valor Pago IR'
                        valorPagoIR = {simulacaoResultado.valorPagoIR}
                        tituloFinalLiquido = 'Valor Final Líquido'
                        valorFinalLiquido = {simulacaoResultado.valorFinalLiquido}
                        tituloTotalInvestido = 'Valor Total Investido'
                        valorTotalInvestido = {simulacaoResultado.valorTotalInvestido}
                        tituloGanhoLiquido = 'Ganho Liquido'
                        valorGanhoLiquido = {simulacaoResultado.ganhoLiquido}
                />: <></>}
                
        
        </div>
    )
}

export default SimulacaoComponent;