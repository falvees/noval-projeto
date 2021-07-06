import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const ContentHeader = styled.div`
display:flex;
flex-direction: column;
flex: 1;
padding: 20px;
`;
export const Title = styled.p`
font-size: 22px;
color: #000000;
`;
export const SubTitle = styled.p`
font-size: 22px;
color: #9B9B9B;
`;
export const ContainerProfile = styled.div`
width: max-content;
display: flex;
padding: 20px;
`;
export const ContentDataProfile = styled.div`
display: flex;
flex-direction: column;
`;
export const NameUser = styled.p`
font-size: 20px;
color: #000000;
font-weight: 300;

`;
export const TypeUser = styled.p`
color: #BBBBBB;
font-size: 14px;
font-weight: 600;
`;
export const AvatarProfile = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin: 0 10px;
`;
