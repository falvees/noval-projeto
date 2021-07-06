import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
`;

export const ContainerCounter = styled.div`
  width: 70%;
  padding: 10px 20px;
`;
export const TitleCounter = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
    svg {
      margin-right: 10px;
    }
`;
export const TextUsers = styled.p`
 display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
    svg {
      margin-right: 10px;
    }
`;
export const ContentCounter = styled.div`
  background-color: #DBF6FF;
  -webkit-box-shadow: 0px 5px 8px -5px #000000; 
  box-shadow: 0px 5px 8px -5px #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  /* margin: 0 20px 20px 20px; */
`;
export const ContentTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextTotal = styled.p`
  font-size: 0.8rem;
`;

export const TextNumber = styled.p`
  font-weight: 800;
  font-size: 2rem;
`;

export const ButtonListUers = styled.button`
  background-color: #056B8D;
  float: right;
  margin-top: .8rem;
  color: #fff;
  padding: 0.3rem 1.5rem;
  border: none;
  outline:  none;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(90%);
  }
  &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;
