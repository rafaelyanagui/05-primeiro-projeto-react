import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisa</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/6343584?s=460&u=5ef64be255ea82f9d61d83aa63e47318c797877a&v=4"
            alt="Rafael"
          />
          <div>
            <strong>rafaelyanagui/05-primeiro-projeto-react</strong>
            <p>Projeto da aula primeiro projeto react</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
