import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Button,Select} from '@material-ui/core';
import Produto from '../models/produto';

class FormProdutos extends Component {
  id;
  nome;
  descricao;
  categoria;
  state = { cat:[] }
    componentDidMount(){
        this.props.repo.inscrever(this.atualiza_combo.bind(this))
    }
    atualiza_combo(list){
        this.setState({
            cat: this.props.repo.list()
        })
    }
  handleid(e){
    this.id = e.target.value;
  }
  handlenome(e){
    this.nome = e.target.value;
  }
  handledescricao(e){
    this.descricao = e.target.value;
  }
  handlersalvar(event){
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    let model = new Produto();
    model.id = this.id;
    model.nome = this.nome;
    model.descricao = this.descricao;
    model.categoria = event.target[3].value;
    this.props.create(model);
  }
    render() { 
        return ( 
            <form onSubmit={this.handlersalvar.bind(this)}>
                <TextField id="id" label="ID" type="number" onChange={this.handleid.bind(this)} />
                <TextField id="nome" label="Nome" onChange={this.handlenome.bind(this)} />
                <TextField id="descricao" label="Descricao" onChange={this.handledescricao.bind(this)} />
                <Select id="categoria" label="Categoria">
                { this.props.repo.list().map((d,i)=>
                    {
                        return(
                            <option value={d.id}>{d.nome}</option>
                        )
                    })}
                </Select>
                <div>
                <Button size="small" type="submit" variant="contained"color="primary">Salvar</Button>
                </div>
            </form>
         );
    }
}
export default FormProdutos;