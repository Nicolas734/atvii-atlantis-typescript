import Armazem from "../../../dominio/armazem";
import Cliente from "../../../modelos/cliente";

export default class AtualizarInformacoesDependenteTitular{
    private dependente!:Cliente
    private clientes!:Cliente[]

    constructor(dependente:Cliente){
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.dependente = dependente
    }

    atualizar():void{

    }
}