import Home from './components/home';
import { GlobalState } from './globalContext/GlobalState';

function App() {
  return (
    <GlobalState>
    <Home/>
    </GlobalState>
  );
}

export default App;
