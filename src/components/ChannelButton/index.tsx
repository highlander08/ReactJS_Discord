import React from 'react';

import { Container,HashtagIcon,InvineIcon,SettingsIcon} from './styles';

interface Props {
  channelName: string;
  selected?: boolean;
} 

const ChannelButton: React.FC<Props> = ({channelName, selected}) => {
return(
  <Container className={selected ? 'active' : ''}> 
    <div>
     <HashtagIcon/>
     <span>{channelName}</span>
    </div>

    <div>
      <InvineIcon/>
      <SettingsIcon/>
    </div>
  </Container>

  );
};

export default ChannelButton;