import React, { useContext} from 'react';
import { FaUsers } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { UsersContext } from '../../UsersContext';
import { Container, Content, ContainerCounter, TitleCounter, ContentCounter, ContentTotal, TextTotal, TextNumber, TextUsers, ButtonListUers } from './styles';

const Homepage: React.FC = () => {
  const {users} = useContext(UsersContext);
  
  return (
    <Container>
      <Header subTitle="Página Inicial" />
      <Content>
        <ContainerCounter>
          <TitleCounter>
          <GrUpdate /> Contador Usuários
          </TitleCounter>

          <ContentCounter>
            <TextUsers>
            <FaUsers size={30} />
               USUÁRIOS
               </TextUsers>
            <ContentTotal>
              <TextTotal>TOTAL</TextTotal>
              <TextNumber>{users?.length}</TextNumber>
            </ContentTotal>
          </ContentCounter>
          <Link to="/listusers"><ButtonListUers>Lista de Usuários</ButtonListUers></Link>
          </ContainerCounter>
      </Content>
    </Container>
  );
}

export default Homepage;