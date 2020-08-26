import styled from 'styled-components';

export const Container = styled.div`
grid-area: UL;

display: flex;
flex-direction: column; /**elementos em colunas */


padding: 3px 6px 0px 16px; /**padding editar en sentido horario */
background-color: var(--secondary);

max-height: calc(100vh - 46px); /**100% da tela menos o pequeno espaço de 46px */
overflow-y: scroll; /**barra de rolamento */

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

export const Role = styled.div`
margin-top:20px; /**distanciar a cima */

text-transform: uppercase; /**deixar letras maiuscula */
font-size: 12px;
font-weight: 500;
color: var(--gray);
`;

export const User = styled.div`
margin-top: 5px; /**distanciar a cima referente ao elemnto */
padding: 5px; /**padding editar en sentido horario */

display: flex;
align-items: center;

cursor: pointer;

border-radius: 4px;
background: transparent;
transition: background 0.2s;

&:hover {
  background: rgba(255, 255, 255, 0.1);
}
> strong {
  margin-left: 13px; /**afastar para a direita */
  font-weight: 500;
  color: var(--white);
  opacity: 0.2s;

  white-space: nowrap; /**fazer com que nao texto nao quebre linha */
  text-overflow: ellipsis; /**adicionar  tres pontinhos no final do texto */
  overflow: hidden;/**utdo que passar para fora da tela nao vai aparecer */
}
   > span {
     margin-left: 9px;

     background-color: var(--discord);
     color: var(--white);
     border-radius: 4px;
     padding: 4px 5px;    /**espaçamento 4px cima e embaixo e 5px esquerda e direita   */

     text-transform: uppercase;
     font-weight: bold;
     font-size: 11px;
   }
`;
export const Avatar = styled.div`
flex-shrink: 0; /**Deixe o segundo flex-item encolher três vezes mais do que o res */

width:32px;
height: 32px;

border-radius: 50%;
background-color: var(--primary);

&.bot {
  background-color: var(--mention-detail);
}
`;
