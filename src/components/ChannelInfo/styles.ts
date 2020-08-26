import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
grid-area: CI;

display: flex;
align-items: center;

padding: 0 17px;
background-color: var(--primary) ;

box-shadow: rgba(0,0,0, 0.2) 0px 1px 0px 0px;
z-index: 2; /**sobre sair sobre os outros componentes */
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;

export const Title = styled.h1`
margin-left:16px;
font-size:bold;

color: var(--white);
`;

export const Separator = styled.div`
/**barra/sepador */
height:24px;
width:1px;

background-color:var(--white);
opacity:0.2;

margin:0 13px;

`;

export const Description = styled.span`
font-size: 15px;
color: var(--gray);
`;

