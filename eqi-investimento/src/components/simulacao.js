import { ButtonGroup, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { GetSimulacao } from '../endpoints/GetSimulacao';
import useForm from '../hooks/useForm';

function SimulacaoComponent(){
    //Endereçando método GET
    const [indexacao, setIndexacao] = useState('')
    const [rendimento, setRendimento] = useState('')

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
                value="123"
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
                value= ''
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
        </div>
    )
}

export default SimulacaoComponent;