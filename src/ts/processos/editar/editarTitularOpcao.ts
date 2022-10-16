import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import MenuOpcaoEditar from '../../menus/menusEditar/menuOpcaoEditar';
import EditarDadosCliente from "./editarDadosCliente";
import EditarTelefoneCliente from "./editarTelefoneCliente";
import EditarEnderecoCliente from "./editarEnderecoCliente";
import EditarDocumentoCliente from "./editarDocumentoCliente";

export default class EditarTitularOpcao extends Processo{
    private cliente:Cliente

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.menu = new MenuOpcaoEditar()
        this.execucao = true
    }

    processar(): void {

        while(this.execucao){

            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')

            switch(this.opcao){
                case 1:
                    this.processo = new EditarDadosCliente(this.cliente)
                    this.processo.processar()
                    break
                case 2:
                    this.processo = new EditarTelefoneCliente(this.cliente)
                    this.processo.processar()
                    break
                case 3:
                    this.processo = new EditarEnderecoCliente(this.cliente)
                    this.processo.processar()
                    break
                case 4:
                    this.processo = new EditarDocumentoCliente(this.cliente)
                    this.processo.processar()
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Operação não entendida.');
            }
        }
    }
}