import React from 'react';
import avatar from '../../assets/avatar.png';
import { Container, ContentHeader, Title, SubTitle, ContainerProfile, ContentDataProfile, NameUser, TypeUser, AvatarProfile } from './styles';

interface HeaderProps {
  subTitle: string;
}

const Header: React.FC<HeaderProps> = ({
  subTitle,
}) => {
  return (
  <Container>
    <ContentHeader>
      <Title>Novel Consultoria</Title>
      <SubTitle>{subTitle}</SubTitle>
    </ContentHeader>
    <ContainerProfile>
      <ContentDataProfile>
        <NameUser>
          João da Silva
        </NameUser>
        <TypeUser>
          ADMINISTRADOR
        </TypeUser>
      </ContentDataProfile>

      <AvatarProfile src={avatar} alt="Avatar" />
    </ContainerProfile>
  </Container>
  );
}

export default Header;