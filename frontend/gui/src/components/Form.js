import React from 'react'
import axios from 'axios'
import { Form, Input, Button } from 'antd';
import NamesListView from '../containers/NamesListView'

class CustomForm extends React.Component {
  state = {
    name : '',
    message: '',
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const nome = {
      name : this.state.name
    }

    axios.post('http://127.0.0.1:3300/names', { nome })
    .then(res => {
      this.setState({
        message : 'Cadastro efetuado com sucesso! Atualize a página para ver as mudanças ;)'
      })
    })
    .catch(err => {
      this.setState({
        message: 'Não foi possivel efetuar o cadastro'
      })
    })

  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Nome">
            <Input value={this.state.name} name="name" placeholder="Nome" onChange={this.handleChange} />
            <p>{this.state.message}</p>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">Enviar</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
