import FormProdutos from "./components/form-produtos/FormProdutos";
import ListaProdutos from "./components/lista-produtos/ListaProdutos";
import { Component } from "react";

class App extends Component {
  lista = []
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
        <>
          <h1>
            Produtos
          </h1>
        </>
        <FormProdutos create={this.create.bind(this)}/>
        <ListaProdutos lista ={this.state.rows}/>
      </section>
  )}
}

export default App;
