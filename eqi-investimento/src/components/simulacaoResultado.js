
function ResultadoSimulacaoComponent(props) {
    return(
        <div>
            <div>
                <div>
                    <h3>{props.tituloFinalBruto}</h3>
                    <p>{props.valorFinalBruto}</p>
                </div>

                <div>
                    <h3>{props.tituloAliquotaIR}</h3>
                    <p>{props.valorAliquotaIR}</p>
                </div>

                <div>
                    <h3>{props.tituloPagoIR}</h3>
                    <p>{props.valorPagoIR}</p>
                </div>

                <div>
                    <h3>{props.tituloFinalLiquido}</h3>
                    <p>{props.valorFinalLiquido}</p>
                </div>

                <div>
                    <h3>{props.tituloTotalInvestido}</h3>
                    <p>{props.valorTotalInvestido}</p>
                </div>

                <div>
                    <h3>{props.tituloGanhoLiquido}</h3>
                    <p>{props.valorGanhoLiquido}</p>
                </div>
            </div>
        </div>
    )
}

export default ResultadoSimulacaoComponent;