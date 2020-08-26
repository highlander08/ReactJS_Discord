import React from 'react';

import { Container,HashtagIcon,Title,Separator,Description} from './styles';
const ChannelInfo: React.FC = () => {
return(
  <Container> 
    <HashtagIcon/>
    <Title>
      chat-livre
    </Title>
    <Separator/>
    <Description>
      Canal Aberto para Conversar
    </Description>
  </Container>

  );
};

export default ChannelInfo;