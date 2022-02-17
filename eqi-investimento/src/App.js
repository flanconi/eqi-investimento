import SimulacaoComponent from './components/simulacao';
import { GlobalState } from './globalContext/GlobalState';
import * as S from './style/style'

function App() {
  return (
    <GlobalState>
    <S.GlobalStyle/>
    <SimulacaoComponent/>
    </GlobalState>
  );
}

export default App;
