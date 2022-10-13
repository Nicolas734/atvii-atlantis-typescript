import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class EditarDadosTitular extends Processo{
    private cliente:Cliente

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
    }
    
    processar(): void {
        
    }
}