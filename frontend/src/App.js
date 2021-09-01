import { Component } from "react";
import FormProdutos from "./components/form-produtos/FormProdutos";
import ListaProdutos from "./components/lista-produtos/ListaProdutos";
import FormCategoria from "./components/form-categoria/FormCategoria";
import ListaCategoria from "./components/lista-categoria/ListaCategoria";
import ProdutoRepository from "./components/repository/ProdutoRepository";
import CategoriaRepository from "./components/repository/CategoriaRepository";

class App extends Component {
  repoProd;
  repoCat;
  constructor(){
    super();
    this.repoProd = new ProdutoRepository();
    this.repoCat = new CategoriaRepository();
  }
  
  render(){
    return (
      <section>
        <section id="produto">
          <h1>
            Produtos
          </h1>
          <FormProdutos create={this.repoProd.create.bind(this.repoProd)}/>
          <ListaProdutos repo = {this.repoProd}/>
        </section>
        <section id="categoria">
        <h1>
            Categorias
          </h1>
          <FormCategoria create ={this.repoCat.create.bind(this.repoCat)}/>
          <ListaCategoria repo ={this.repoCat}/>
        </section>
      </section>
  )}
}

export default App;
