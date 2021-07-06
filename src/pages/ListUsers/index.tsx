import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useForm, FormProvider } from 'react-hook-form';
import Header from '../../components/Header';
import { User, UsersContext } from '../../UsersContext';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


import { FiCalendar } from 'react-icons/fi';
import { FiDatabase } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';
import { FiZap } from 'react-icons/fi';
import { CgTrash } from 'react-icons/cg';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { GrTransaction } from 'react-icons/gr';

import { Container, Form, CloseModal } from './styles';

Modal.setAppElement('#root');

const ListUsers: React.FC = () => {
  const { users, createUser, deleteUser, editUser, getUser } = useContext(UsersContext);

  const schema = yup.object().shape({
    type: yup.string().required('Required'),
    name: yup.string().required('Required'),
    age: yup.string().required('Required'),
    gender: yup.string().required('Required'),
  });

  const methods = useForm({
    resolver: yupResolver(schema)
  });

  const { reset, register, handleSubmit, getValues, formState: { errors } } = methods;

  const [isNewUserOpen, setIsNewUserOpen] = React.useState(false);
  const [idUser, setIdUser] = React.useState<Number>(0);

  function handleOpenNewUser() {
    setIsNewUserOpen(true)
  }

  function handleCloseNewUser() {
    setIsNewUserOpen(false);
    setIdUser(0);
    reset({});
  }

  async function handleEditUser(id: Number) {
    setIdUser(id);
    const response = await getUser(id, ' ')
    reset(response)
    handleOpenNewUser();
  }

  function handleDeleteUser(id: Number) {
    Swal.fire({
      title: 'Deletar Usuário?',
      text: "Você não poderá reverter isto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id).then(response =>
          Swal.fire(
            'Deletado!',
            'Usuário excluído.',
            'success'
          )).catch(err =>
            Swal.fire(
              'Houve um erro.',
              'Reinicie a página.',
              'error'
            ))
      }
    })
  }

  // function calcAge(dateString: string) {
  //   var birthday = +new Date(dateString);
  //   return ~~((Date.now() - birthday) / (31557600000));
  // }

  async function onSubmit(data: User) {
    document.querySelector(".button-confirm")?.setAttribute("disabled", "disabled")
    if (idUser) {
      await editUser(idUser, data)
        .then(() => {
          handleCloseNewUser();
          Swal.fire({
            icon: 'success',
            title: 'Usuário editado!',
            text: 'com sucesso.',
            timer: 2000,
          })
        }).catch(() =>
          Swal.fire({
            icon: 'error',
            title: 'Houve um erro.',
            text: 'Reinicie a página.',
            timer: 2000,
          })
        )
      setIdUser(0)
    } else {
      const response = await getUser(0, getValues('name'))
      if (response === null) {
        await createUser(data);
        Swal.fire({
          icon: 'success',
          title: 'Usuário criado',
          text: 'Com sucesso!',
          timer: 2000,
        })
        handleCloseNewUser();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Usuário já existe',
          text: 'Escolha outro nome',
          timer: 2000,
        })
      }

    }
    document.querySelector(".button-confirm")?.removeAttribute("disabled")

  }
  return (
    <Container>
      <FormProvider {...methods}>
        <Header subTitle="Listando Usuários" />
        <h2><FiDatabase /> Banco de Dados</h2>
        <table>
          <thead>
            <th><AiOutlineUser /> Nome</th>
            <th><FiCalendar /> Idade</th>
            <th><FiSun /> Gênero</th>
            <th><FiZap /> Perfil</th>
            <th><GrTransaction /> Ações</th>
          </thead>
          <tbody>
            {users.length > 0 ?
              users.map(row => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.gender}</td>
                  <td>{row.type}</td>
                  <td>
                    <FiEdit color="#2961fc" onClick={() => handleEditUser(row.id)} />
                    {row.type !== "Administrador" &&
                      <CgTrash color="#ca0000" onClick={() => handleDeleteUser(row.id)} />
                    }

                  </td>
                </tr>
              ))
              :
              <tr>
                <td colSpan={5} align="center">NENHUM USUARIO CADASTRADO</td>
              </tr>
            }
          </tbody>
        </table>

        <button className="new-user" type="button" onClick={handleOpenNewUser}>Novo Usuário</button>
        <Modal
          isOpen={isNewUserOpen}
          onRequestClose={handleCloseNewUser}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"

        >
          <CloseModal onClick={handleCloseNewUser} size={30} />
          <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <h2>{idUser ? "Editar Usuário" : "Cadastrar Usuário"}</h2>
            <label>Perfil</label>
            <select {...register("type")}>
              <option value="Administrador">Administrador</option>
              <option value="Usuario">Usuário</option>
            </select>
            <label>Nome</label>
            <input {...register('name')} placeholder="Nome" />
            {errors.name?.type === 'required' && (
              <p className="required-form">
                <span>* </span>
                Este campo é obrigatório.
              </p>
            )}
            <div style={{ display: 'flex' }}>
              <div style={{ width: '50%', marginRight: 5 }}>
                <label>Idade</label>
                <input {...register('age')} type="number" placeholder="25" min="1" max="999" maxLength={3} />
              </div>
              <div style={{ width: '50%', marginLeft: 5 }}>
                <label>Genero</label>
                <select {...register("gender")}>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>
              </div>
            </div>
            <button type="submit" className="button-confirm" >{idUser ? "Editar" : "Cadastrar"}</button>
          </Form>
        </Modal>
      </FormProvider>
    </Container>
  );
}

export default ListUsers;