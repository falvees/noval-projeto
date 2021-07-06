import styled from 'styled-components';

export interface LoadingProps {
  isLoading?: Boolean;
}

export const Content = styled.div<LoadingProps>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: '#fff';
  height: 'auto';
  width: 'auto';
`;
export const Container = styled.div<LoadingProps>`
  display: ${props => (props.isLoading ? 'flex' : 'none')};
  background-color: #fff;
  align-items: center;
  word-break: break-word;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 20;
  width: 100vw;
  height: 100vh;


  #message {
    margin-top: 20px;
    text-align: center;
  }
`;
