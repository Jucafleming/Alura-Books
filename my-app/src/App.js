import Header from './components/Header/header';
import styled from 'styled-components';
import Pesquisa from './components/Pesquisa/pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos/ultimosLancamentos';

const AppContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
       <Header />
       <Pesquisa />
       <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
