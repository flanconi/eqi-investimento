import GraficoComponent from "./grafico";
import * as S from '../style/style'

function ResultadoSimulacaoComponent(props) {
    return(
        <S.LayoutGeralResultado>
            <h2>Resultado da Simulação</h2>
            <S.LayoutInfoResultado>
                <S.containerInfo>
                    <h3>{props.tituloFinalBruto}</h3>
                    <p>{props.valorFinalBruto}</p>
                </S.containerInfo>

                <S.containerInfo>
                    <h3>{props.tituloAliquotaIR}</h3>
                    <p>{props.valorAliquotaIR}</p>
                </S.containerInfo>

                <S.containerInfo>
                    <h3>{props.tituloPagoIR}</h3>
                    <p>{props.valorPagoIR}</p>
                </S.containerInfo>

                <S.containerInfo>
                    <h3>{props.tituloFinalLiquido}</h3>
                    <p>{props.valorFinalLiquido}</p>
                </S.containerInfo>

                <S.containerInfo>
                    <h3>{props.tituloTotalInvestido}</h3>
                    <p>{props.valorTotalInvestido}</p>
                </S.containerInfo>

                <S.containerInfo>
                    <h3>{props.tituloGanhoLiquido}</h3>
                    <p>{props.valorGanhoLiquido}</p>
                </S.containerInfo>
            </S.LayoutInfoResultado>

            <div>
                <div>
                    <h3>Projeção de Valores</h3>
                    <GraficoComponent
                        cAporte0 = {props.cAporte0}
                        sAporte0 = {props.sAporte0}
                        cAporte1 = {props.cAporte1}
                        sAporte1 = {props.sAporte1}
                        cAporte2 = {props.cAporte2}
                        sAporte2 = {props.sAporte2}
                        cAporte3 = {props.cAporte3}
                        sAporte3 = {props.sAporte3}
                        cAporte4 = {props.cAporte4}
                        sAporte4 = {props.sAporte4}
                        cAporte5 = {props.cAporte5}
                        sAporte5 = {props.sAporte5}
                        cAporte6 = {props.cAporte6}
                        sAporte6 = {props.sAporte6}
                        cAporte7 = {props.cAporte7}
                        sAporte7= {props.sAporte7}
                        cAporte8 = {props.cAporte8}
                        sAporte8 = {props.sAporte8}
                        cAporte9 = {props.cAporte9}
                        sAporte9 = {props.sAporte9}
                        cAporte10 = {props.cAporte10}
                        sAporte10 = {props.sAporte10}
                    />
                </div>
            </div>
        </S.LayoutGeralResultado>
    )
}

export default ResultadoSimulacaoComponent;