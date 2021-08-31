import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormProdutos extends Component {

    render() { 
        return ( 
            <form>
                <TextField id="id" label="ID" />
                <TextField id="nome" label="Nome" />
                <TextField id="descricao" label="Descricao" />
                <TextField id="categoria" label="Categoria" />
                <div>
                    <Button
                    variant="contained"
                    color="primary">Send
                    </Button>
                </div>
            </form>
         );
    }
}
export default FormProdutos;