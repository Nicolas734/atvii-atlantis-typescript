import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import MenuOpcaoEditar from '../../menus/menusEditar/menuOpcaoEditar';
import EditarDadosCliente from "./editarDadosCliente";

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
                    console.log(1);
                    break
                case 3:
                    console.log(1);
                    break
                case 4:
                    console.log(1);
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