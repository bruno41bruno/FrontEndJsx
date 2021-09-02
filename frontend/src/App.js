import FormProdutos from "./components/form-produtos/FormProdutos";
import ListaProdutos from "./components/lista-produtos/ListaProdutos";
import FormCategoria from "./components/form-categoria/FormCategoria";
import ListaCategoria from "./components/lista-categoria/ListaCategoria";
import ProdutoRepository from "./components/repository/ProdutoRepository";
import CategoriaRepository from "./components/repository/CategoriaRepository";

function App(){
  let repoProd = new ProdutoRepository();
  let repoCat = new CategoriaRepository();

    return (
      <section>
        <section id="produto">
          <h1>
            Produtos
          </h1>
          <FormProdutos repoProd = {repoProd} repoCat = {repoCat}/>
          <ListaProdutos repoProd = {repoProd}/>
        </section>
        <section id="categoria">
        <h1>
            Categorias
          </h1>
          <FormCategoria repoCat ={repoCat}/>
          <ListaCategoria repoCat ={repoCat}/>
        </section>
      </section>
  )}

export default App;
