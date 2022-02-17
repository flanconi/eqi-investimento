import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';
import * as S from '../style/style'

function GraficoComponent(props){
    const data = [
        {name: '0', cAporte: props.cAporte0, sAporte: props.sAporte0},
        {name: '1', cAporte: props.cAporte1, sAporte: props.sAporte1},
        {name: '2', cAporte: props.cAporte2, sAporte: props.sAporte2},
        {name: '3', cAporte: props.cAporte3, sAporte: props.sAporte3},
        {name: '4', cAporte: props.cAporte4, sAporte: props.sAporte4},
        {name: '5', cAporte: props.cAporte5, sAporte: props.sAporte5},
        {name: '6', cAporte: props.cAporte6, sAporte: props.sAporte6},
        {name: '7', cAporte: props.cAporte7, sAporte: props.sAporte7},
        {name: '8', cAporte: props.cAporte8, sAporte: props.sAporte8},
        {name: '9', cAporte: props.cAporte9, sAporte: props.sAporte9},
        {name: '10', cAporte: props.cAporte10, sAporte: props.sAporte10}
    ];
    
    return(

        <S.LayoutGrafico>
            <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cAporte" fill="#ff6803" />
            <Bar dataKey="sAporte" fill="#121211" />
            </BarChart>
        </S.LayoutGrafico>
    )
}

export default GraficoComponent;