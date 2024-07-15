import Perfil from '../../images/perfil.svg'
import Sacola from '../../images/sacola.svg'
import styled from 'styled-components';


const Icone = styled.li`
  margin-right: 40px;
    width: 25px;
    cursor: pointer;
    list-style: none;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [Perfil, Sacola]


function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone> <img src={icone} alt = "Icones"></img></Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;

