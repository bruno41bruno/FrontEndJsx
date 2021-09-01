import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormProdutos extends Component {
    id;
    nome;
    descricao;
    categoria;
  handlersalvar(event){
    event.stopPropagation();
    event.preventDefault();
    let model = {"id":event.target.id.value,"nome":event.target.nome.value,"descricao":event.target.descricao.value,"categoria":event.target.categoria.value}
    this.props.create(model);
  }
    render() { 
        return ( 
            <form onSubmit={this.handlersalvar.bind(this)}>
                <TextField id="id" label="ID" type="number"/>
                <TextField id="nome" label="Nome" />
                <TextField id="descricao" label="Descricao" />
                <TextField id="categoria" label="Categoria" />
                <div>
                <Button type="submit" variant="contained"color="primary">Send</Button>
                </div>
            </form>
         );
    }
}
export default FormProdutos;