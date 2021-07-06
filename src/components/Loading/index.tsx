import React from 'react';

import { Container, LoadingProps, Content } from './styles';

const Loading: React.FC<LoadingProps> = ({ isLoading, ...rest }) => {
  return (
    <Container isLoading={isLoading} {...rest} className="noselect">
      <Content {...rest}>
        <div className="loading-container">
        
        </div>
        <div id="message">
          <strong>Carregando</strong>
          ...
        </div>
      </Content>
    </Container>
  );
};

export default Loading;
