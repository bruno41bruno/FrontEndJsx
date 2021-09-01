import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Categoria from '../models/categoria'

class FormCategoria extends Component {
  handlersalvar(event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    let model = new Categoria();
    model.id = event.target.idcat.value;
    model.nome = event.target.nomecat.value;
    model.descricao = event.target.descricaocat.value;
    this.props.create(model);
  }
    render() { 
        return ( 
            <form id = "formcat" onSubmit={this.handlersalvar.bind(this)}>
                <TextField id="idcat" label="ID" type="number"/>
                <TextField id="nomecat" label="Nome"/>
                <TextField id="descricaocat" label="Descricao"/>
                <div>
                <Button size="small" type="submit" variant="contained"color="primary">Salvar</Button>
                </div>
            </form>
         );
    }
}
export default FormCategoria;