import React from 'react';

import { Container,User,Avatar,Role} from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps>= ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>
      
      {isBot && <span>Bot</span>}
    </User>
    );
  };
  
const UserList: React.FC = () => {
    return(
      <Container> 
        <Role> Disponivel - 1</Role>
        <UserRow nickname="Highlander Santos"/>
        
        <Role> Off-line - 18</Role>
        <UserRow nickname="Diego Fenandes" isBot/>
      
        <UserRow nickname="Lucas Azevedo" />
        <UserRow nickname="Herbert Rei dos cria" />
        <UserRow nickname="Gustavo Vida Loka" />
        <UserRow nickname="Cleo Rainha" />
        <UserRow nickname="Nonato Suavidade" />
        <UserRow nickname="Chama Para o X1" />
        <UserRow nickname="Chama Para o X1" />
        <UserRow nickname="Chama Para o X1" />
        <UserRow nickname="Chama Para o X1" />
        <UserRow nickname="Chama Para o X1" />
        <UserRow nickname="Chama Para o X1" />
        <UserRow nickname="Chama Para o X1" />
        <UserRow nickname="Chama Para o X1" />
        <UserRow nickname="Chama Para o X1" />


      </Container>
      
      );
    };
    
    export default UserList;