import axios from 'axios';
import React from 'react';
import { ButtonGroup, Button, TextField} from '@mui/material';
import { useContext, useState } from 'react';
import { baseURL } from '../endpoints/baseURL';
import useForm from '../hooks/useForm';
import ResultadoSimulacaoComponent from './simulacaoResultado';
import GlobalStateContext from '../globalContext/CreateContext'
import * as S from '../style/style';

function SimulacaoComponent(){

    //Estado Global
    const {cdi, ipca } = useContext(GlobalStateContext)

    //Endereçando método GET
    const [indexacao, setIndexacao] = useState('')
    const [rendimento, setRendimento] = useState('')

    //State para manipular dados
    const [simulacaoResultado, setSimulacaoResultado] = useState({})
    const [liberarResultado, setResultado] = useState(false)
    const [simulacaoComAporte, setsimulacaoComAporte] = useState({})
    const [simulacaoSemAporte, setsimulacaoSemAporte] = useState({})

    //Método Get
    const GetSimulacao = (indexacao, rendimento) => {
        axios
        .get(`${baseURL}/simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`)
        .then( res => {
            setSimulacaoResultado(res.data[0])
            setResultado(true)
            setsimulacaoComAporte(res.data[0].graficoValores.comAporte)
            setsimulacaoSemAporte(res.data[0].graficoValores.semAporte)
        })
        .catch( error => {
            console.log(error.data.response)
        })
    };


    //Submit Form
    const submitForm = (event) => {
        event.preventDefault()
        GetSimulacao(indexacao, rendimento)
    } 

    //FORM 
    const { form, onChangeInput, clear } = useForm({ 
    aporteInicial: '', 
    aporteMensal: '',
    prazo: '', 
    rentabilidade: '' })

    const limparForm = () => {
        clear()
        setIndexacao('')
        setRendimento('')
        setResultado(false)
    }

    //Validação Form 
    const numberRegex = new RegExp('[\d,.?!]*')
    
    
    return(
        
        <S.LayoutPrincipal>
                
                <S.LayoutForm onSubmit={submitForm}>
                    
                    <div>
                        <p>Rendimento*</p>
                        <ButtonGroup variant="contained" aria-label="outlined button group" color='warning'>
                            <Button onClick={() => setRendimento('liquido')}>Liquído</Button>
                            <Button onClick={() => setRendimento('bruto')}>Bruto</Button>
                        </ButtonGroup>
                    </div>

                    <div>
                        <p>Indexação*</p>
                        <ButtonGroup variant="contained" aria-label="outlined button group" color='warning'>
                            <Button onClick={() => setIndexacao('pre')}>Pré</Button>
                            <Button onClick={() => setIndexacao('pos')}>Pos</Button>
                            <Button onClick={() => setIndexacao('ipca')}>Fixado</Button>
                        </ButtonGroup>
                    </div>

                    <TextField
                    name='aporteInicial'
                    value={form.aporteInicial}
                    onChange={onChangeInput}
                    id="standard-basic" 
                    label="Aporte Inicial" 
                    variant="standard" 
                    color='warning' 
                    size='normal'
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    helperText="Apenas números"
                    />

                    <TextField 
                    name='aporteMensal'
                    value={form.aporteMensal}
                    onChange={onChangeInput}
                    id="standard-basic" 
                    label="Aporte Mensal" 
                    variant="standard" 
                    color='warning' 
                    size='normal'
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    helperText="Apenas números"
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
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    helperText="Apenas números"
                    />

                    <TextField 
                    name='rentabilidade'
                    value={form.rentabilidade}
                    onChange={onChangeInput}
                    id="standard-basic" 
                    label="Rentabilidade %" 
                    variant="standard" 
                    color='warning' 
                    size='normal'
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    helperText="Apenas números"
                    />

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
                    onClick={limparForm}
                    variant="outlined" 
                    color='warning'>Limpar</Button>

                    <Button
                    type='submit'
                    variant="contained" 
                    color='warning'>Simular</Button>
                </S.LayoutForm>
               
            
                {liberarResultado? <ResultadoSimulacaoComponent
                        tituloFinalBruto = 'Valor Final Bruto'
                        valorFinalBruto = {`R$ ${simulacaoResultado.valorFinalBruto}`}
                        tituloAliquotaIR = 'Valor Alíquota IR'
                        valorAliquotaIR = {`${simulacaoResultado.aliquotaIR} %`}
                        tituloPagoIR = 'Valor Pago IR'
                        valorPagoIR = {`R$ ${simulacaoResultado.valorPagoIR}`}
                        tituloFinalLiquido = 'Valor Final Líquido'
                        valorFinalLiquido = {`R$ ${simulacaoResultado.valorFinalLiquido}`}
                        tituloTotalInvestido = 'Valor Total Investido'
                        valorTotalInvestido = {`R$ ${simulacaoResultado.valorTotalInvestido}`}
                        tituloGanhoLiquido = 'Ganho Liquido'
                        valorGanhoLiquido = {`R$ ${simulacaoResultado.ganhoLiquido}`}
                        cAporte0 = {simulacaoComAporte[0]}
                        sAporte0 = {simulacaoSemAporte[0]}
                        cAporte1 = {simulacaoComAporte[1]}
                        sAporte1 = {simulacaoSemAporte[1]}
                        cAporte2 = {simulacaoComAporte[2]}
                        sAporte2 = {simulacaoSemAporte[2]}
                        cAporte3 = {simulacaoComAporte[3]}
                        sAporte3 = {simulacaoSemAporte[3]}
                        cAporte4 = {simulacaoComAporte[4]}
                        sAporte4 = {simulacaoSemAporte[4]}
                        cAporte5 = {simulacaoComAporte[5]}
                        sAporte5 = {simulacaoSemAporte[5]}
                        cAporte6 = {simulacaoComAporte[6]}
                        sAporte6 = {simulacaoSemAporte[6]}
                        cAporte7 = {simulacaoComAporte[7]}
                        sAporte7= {simulacaoSemAporte[7]}
                        cAporte8 = {simulacaoComAporte[8]}
                        sAporte8 = {simulacaoSemAporte[8]}
                        cAporte9 = {simulacaoComAporte[9]}
                        sAporte9 = {simulacaoSemAporte[9]}
                        cAporte10 = {simulacaoComAporte[10]}
                        sAporte10 = {simulacaoSemAporte[10]}
                />: <></>}            
        </S.LayoutPrincipal>
    )
}

export default SimulacaoComponent;