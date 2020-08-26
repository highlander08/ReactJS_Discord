import React from 'react';
import ChannelButton  from '../ChannelButton';

import { Container,Category,AddCategoryIcon } from './styles';

const Channelist: React.FC = () => {
return(
  <Container> 
     
   <Category>
     <span>Canais Aberto</span>
     <AddCategoryIcon/>
   </Category>

   <ChannelButton channelName="chat-livre"/>
   <ChannelButton channelName="trabalho"/>
   <ChannelButton channelName="lolzinho"/>
   <ChannelButton channelName="csgo"/>
   <ChannelButton channelName="valorant"/>

 

  </Container>

  );
};

export default Channelist;