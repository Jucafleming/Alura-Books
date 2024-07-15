import styled from 'styled-components';

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante'];

const Opcoes = styled.ul`
  display: flex;
`

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0px 5px;
    cursor: pointer;
`

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao>{texto}</Opcao>
            ))}
        </Opcoes>
    );
}

export default OpcoesHeader;