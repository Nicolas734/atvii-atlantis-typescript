import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import MenuOpcaoEditar from '../../menus/menusEditar/menuOpcaoEditar';
import EditarDadosCliente from "./editarDadosCliente";
import EditarTelefoneCliente from "./editarTelefoneCliente";
import EditarEnderecoCliente from "./editarEnderecoCliente";
import EditarDocumentoCliente from "./editarDocumentoCliente";
import BuscarTitular from "../buscas/buscarTitular";
import Impressor from "../../interfaces/impressor";
import ImpressorClienteDocumento from "../../impressores/impressorClienteDocumento";

export default class EditarClienteTitular extends Processo{
    private impressor!: Impressor

    constructor(){
        super()
        this.menu = new MenuOpcaoEditar()
        this.execucao = true
    }

    processar(): void {

        this.processo = new BuscarTitular()
        let titular = this.processo.processar();

        if(titular === undefined){
            console.log("Titular não encontrado...");
        }else{
            this.impressor = new ImpressorClienteDocumento(titular)
            console.log(this.impressor.imprimir())

            while(this.execucao){

                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual opção desejada?')

                switch(this.opcao){
                    case 1:
                        this.processo = new EditarDadosCliente(titular)
                        this.processo.processar()
                        break
                    case 2:
                        this.processo = new EditarTelefoneCliente(titular)
                        this.processo.processar()
                        break
                    case 3:
                        this.processo = new EditarEnderecoCliente(titular)
                        this.processo.processar()
                        break
                    case 4:
                        this.processo = new EditarDocumentoCliente(titular)
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
}