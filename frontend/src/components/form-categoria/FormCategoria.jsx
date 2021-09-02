import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Categoria from '../models/categoria'

function FormCategoria({create}){
  let id;
  let nome;
  let descricao;
      return ( 
          <form id = "formcat" onSubmit={(e)=>{
              e.stopPropagation();
              e.preventDefault();
              let model = new Categoria();
              model.id = id;
              model.nome = nome;
              model.descricao = descricao;              
              create(model);
          }}>
              <TextField id="idcat" label="ID" type="number" onChange={(e)=>id = e.target.value}/>
              <TextField id="nomecat" label="Nome" onChange={(e)=>nome = e.target.value}/>
              <TextField id="descricaocat" label="Descricao" onChange={(e)=>descricao = e.target.value}/>
              <div>
              <Button size="small" type="submit" variant="contained"color="primary">Salvar</Button>
              </div>
          </form>
        );
}
export default FormCategoria;