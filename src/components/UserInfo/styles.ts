import styled from 'styled-components';
import {Mic, Headset, Settings} from 'styled-icons/material';

export const Container = styled.div`
grid-area: UI;

display: flex; /** alinha os elementos um ao lado do outro */
align-items: center;
justify-content: space-between; /**deixar o mais separdo possivel */

padding: 10px;
background-color: var(--quaternary);
box-shadow: rgba(0,0,0, 0.2) 0px 1px 0px 0px; /**adicionar efeitos de sombra em volta de um elemento */

`;

export const Profile = styled.div`
display: flex;
align-items: center;
`;
export const Avatar = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;/**deixar o elemento redondo */

background-color: var(--gray);
`;
export const UserData = styled.div`
margin-left: 8px; /**distanciar elementos */

display: flex; /**, transformando todos os seus filhos diretos em flex itens. */
flex-direction: column; /** deixar o elementos um acima do outro */

> strong {
  color: var(--white);
  font-size:13px;
  display: block; /** quebra (espaçamento) de linha acima e abaixo */
}
> span { /**todo span é negrito */
  color: var(--gray);
  font-size: 13px; 
}
`;
export const Icons = styled.div`
display: flex;
align-items: center;
/**aplica em todos os icones menos no 1  */
> svg:not(:first-child){
  margin-left: 7px;
}
`;
export const MicIcon = styled(Mic)`
width: 20px;
height:20px;

color: var(--white);
opacity: 0.2; /**opacidade de 20% */
cursor: pointer;

transition: opacity 0.2s; /**demorar a transição em 2 mili segundos */

&:hover{
  opacity: 1; /**opacidade 100% */
}
`;
export const HeadphoneIcon = styled(Headset)`
width: 20px;
height:20px;

color: var(--white);
opacity: 0.2; /**opacidade de 20% */
cursor: pointer;

transition: opacity 0.2s; /**demorar a transição em 2 mili segundos */

&:hover{
  opacity: 1; /**opacidade 100% */
}
`;
export const SettingsIcon = styled(Settings)`
width: 20px;
height:20px;

color: var(--white);
opacity: 0.2; /**opacidade de 20% */
cursor: pointer;

transition: opacity 0.2s; /**demorar a transição em 2 mili segundos */

&:hover{
  opacity: 1; /**opacidade 100% */
}
`;
