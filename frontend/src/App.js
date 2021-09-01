import { Component } from "react";
import FormProdutos from "./components/form-produtos/FormProdutos";
import ListaProdutos from "./components/lista-produtos/ListaProdutos";
import FormCategoria from "./components/form-categoria/FormCategoria";
import ListaCategoria from "./components/lista-categoria/ListaCategoria";

class App extends Component {
  lista = [];
  constructor(props){
    super(props);
    this.state = {rows:this.lista}
  }
  create(model){
    this.lista.push(model);
    console.log(model);
    this.setState(
    {
      rows : this.lista
    })
  }
  render(){
    return (
      <section>
        <section id="produto">
          <h1>
            Produtos
          </h1>
          <FormProdutos create={this.create.bind(this)}/>
          <ListaProdutos lista ={this.state.rows}/>
        </section>
        <section id="categoria">
        <h1>
            Categorias
          </h1>
          <FormCategoria/>
          <ListaCategoria/>
        </section>
      </section>
  )}
}

export default App;
