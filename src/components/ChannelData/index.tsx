import React,{useRef,useEffect} from 'react';

import { Container,Messages,InputWrapper,Input,InputIcon } from './styles';

import ChannelMessage, {Mention} from '../ChannelMessage';

const ChannelData: React.FC = () => {
  /**typescript pra resolver o problema*/
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

/**pegar div e se ela existir o scrool vai comecar de lá em baixo vend*/

useEffect(()=> {
  const div = messagesRef.current;

  if(div){
    div.scrollTop = div.scrollHeight;
  }
},[messagesRef])
  return(
  <Container> 
   <Messages ref={messagesRef}>
     {Array.from(Array(15).keys()).map((n) => (
      <ChannelMessage
      key={n}
      author="Highlander Santos"
      date="21/08/1996"
      content="Hoje é meu aniversario"
     />
     ))}
     
     
     <ChannelMessage
     author="Diego Fernandes"
     date="21/08/1996"
     content={
     <>
     <Mention>@Highlander Santos</Mention>, me Carrega no lol e cs ?
     </>
     }
     hasMention
     isBot
     />
   </Messages>

   <InputWrapper>
   <Input type="text" placeholder="Conversar em chat-livre"/>
   <InputIcon/>
   </InputWrapper>
  </Container>

  );
};

export default ChannelData;