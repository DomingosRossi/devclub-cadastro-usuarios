import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import { Container, Form, Input, InputLabel, Title, ContainerInputs } from './styles'; // ajuste o caminho conforme necessário

import Button  from '../../components/button';
import TopBackground from '../../components/TopBackGround';

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

navigate('/lista-de-usuarios')
  }


  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type='text' placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>E-mail<span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>
    </Container>
  );
}

export default Home;
