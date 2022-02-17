import styled, { createGlobalStyle } from 'styled-components';

//Estilização Global 

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
}
`

//Estilização Home
export const LayoutPrincipal = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LayoutForm = styled.form `
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(2, 200px);
    column-gap: 50px;
    justify-items: center;
    align-items: center;
    padding: 0 75px;
`

//Estilização Resultado

export const LayoutGeralResultado = styled.div `
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const LayoutInfoResultado = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 225px);
    column-gap: 40px;
    row-gap: 25px;
    margin: 25px 50px;
    justify-items: stretch;
`

export const containerInfo = styled.div `
    padding: 0 10px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 3px 2px 10px grey;
`

//Estilização Gráfico

export const LayoutGrafico = styled.div `
    
`