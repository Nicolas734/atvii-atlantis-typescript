import Processo from "../abstracoes/processo"
import Cliente from "../modelos/cliente"

export default class CadastroTelefoneTitular extends Processo{
    private cliente!: Cliente

    constructor(cliente: Cliente){
        super()
        this.cliente = cliente
    }

    processar(): void {

    }

}