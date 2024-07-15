import Logo from '../Logo/logo';
import OpcoesHeader from '../OpcoesHeader/opcoes';
import IconesHeader from '../IconesHeader/iconesHeader';
import styled from 'styled-components';


const HeaderConatiner = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
    list-style: none;
  }
`

function Header(){
    return(
        <HeaderConatiner>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>                                 
      </HeaderConatiner>
    );
}

export default Header;