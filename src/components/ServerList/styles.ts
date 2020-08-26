import styled from "styled-components";

export const Container = styled.div`
grid-area: SL;

display: flex;
flex-direction: column;
align-items:center;

background-color: var(--tertiary);
padding: 11px 0;

max-height: 100vh;
overflow-y: scroll; /**sempre que ultrapassar o limite da coluna usar uma barra de rolamento/scroll */

::-webkit-scrollbar {
display: none; /**retirar a barra, mas ainda existe o scrool */
}
`;

export const Separator = styled.div`
width: 32px;
border-bottom: 2px solid var(--quaternary); /**linha */

margin-bottom: 8px; /**distancia para baixo entre o outro elemento */
`;

