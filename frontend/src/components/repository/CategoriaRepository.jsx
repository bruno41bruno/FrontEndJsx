class CategoriaRepository {
    #list;
    #inscritos;
    constructor(){
        this.#list = [];
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
        this.#inscritos.forEach(i=>{
            i(this.#list);
        });
    }
    create(model){
        this.#list.push(model);
        this.notificar();
    }
    list(){
        return this.#list;
    }
}
export default CategoriaRepository;