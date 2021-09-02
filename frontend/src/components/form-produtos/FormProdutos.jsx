import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Button,Select} from '@material-ui/core';
import Produto from '../models/produto';
import { useState } from 'react';

function FormProdutos({repoProd,repoCat}) {
  let [listC, setListC] = useState(repoCat.list())
  repoCat.inscrever(setListC)
  let id;
  let nome;
  let descricao;
  return ( 
        <form onSubmit={(e)=>{
          e.stopPropagation();
          e.preventDefault();
          let model = new Produto();
          model.id = id;
          model.nome = nome;
          model.descricao = descricao;
          model.categoria = repoCat.list().find(x => x.nome === e.target[3].value);
          repoProd.create(model);
          console.log(repoProd.list())
        }}>
            <TextField id="id" label="ID" type="number" onChange={(e)=> id = e.target.value} />
            <TextField id="nome" label="Nome" onChange={(e)=> nome =e.target.value} />
            <TextField id="descricao" label="Descricao" onChange={(e)=> descricao = e.target.value} />
            <Select id="categoria" label="Categoria">
            {listC.map((d)=>
                {
                    return(
                        <option key={d.id} value={d.nome}>{d.nome}</option>
                    )
                })}
            </Select>
            <div>
            <Button size="small" type="submit" variant="contained"color="primary">Salvar</Button>
            </div>
        </form>
      );
}
export default FormProdutos;