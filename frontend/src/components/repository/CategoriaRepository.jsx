class CategoriaRepository {
    lista;
    #inscritos;
    constructor(){
        this.lista = [];
        this.#inscritos = [];
    }
    inscrever(sub){
        this.#inscritos.push(sub);
    }
    desinscrever(unssub){
        let i = this.#inscritos.findIndex(unssub);
        this.#inscritos.splice(i,1);
    }
    notificar(){       
        
        this.#inscritos.forEach((func)=>{
            //console.log(this.lista)
            func(this.lista)            
        });
    }
    create(model){
        this.lista = [...this.lista, model];        
        this.notificar();
    }
    list(){
        return this.lista;
    }
}
export default CategoriaRepository;