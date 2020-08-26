import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
grid-area: CD;

display: flex;
flex-direction: column;
justify-content: space-between;

background-color: var(--primary);

`;


export const Messages = styled.div`
padding: 20px 0;

display: flex;
flex-direction:column;
 
max-height: calc(100vh - 46px - 68px);
color: var(--white);
overflow-y: scroll; /***se ultrapassar em coluna coloque a barra de rolagem */

::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-thumb{
  background-color: var(--tertiary);
  border-radius: 4px; /**borda aredondada */
}
::-webkit-scrollbar-track{
  background-color: var(--secondary);
}
`;
export const InputWrapper = styled.div`
width: 100%;
padding: 0 16px;
`;
export const Input = styled.input`
width: 100%;
height: 44px;

padding: 0 10px 0 57px;
border-radius: 7px;

color: var(--white);
background-color: var(--chat-input);

position: relative; /**usado para usar hackeno css */

&::placeholder{
  color: var(--gray);
}

~ svg {
  /**hack para deixar o icone junto */
  position: relative;
  top: -50%;
  left: 14px;
  transition: 180ms ease-in-out;
}
`;
export const InputIcon = styled(AlternateEmail)`
width: 24px;
height: 24px;

color: var(--gray);
`;