import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormCategoria extends Component {
    handlerdefault(event){
        event.preventDefault();
    }
    render() { 
        return ( 
            <form id = "formcat" onSubmit={this.handlerdefault.bind(this)}>
                <TextField id="idcat" label="ID" type="number"/>
                <TextField id="nomecat" label="Nome" />
                <TextField id="descricaocat" label="Descricao" />
                <div>
                <Button size="small" type="submit" variant="contained"color="primary">Salvar</Button>
                </div>
            </form>
         );
    }
}
export default FormCategoria;