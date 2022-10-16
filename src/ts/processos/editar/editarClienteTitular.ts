import Processo from "../../abstracoes/processo";
import MenuOpcaoBuscaCliente from "../../menus/menusEditar/menuOpcaoBuscaCliente";
import BuscarTitularPorDocumento from "../buscarTitularPorDocumento";
import ListagemTitulares from "../listagens/listagemTitulares";

export default class EditarClienteTitular extends Processo{
    processar(): void {
        this.menu = new MenuOpcaoBuscaCliente()
        this.execucao = true

        while(this.execucao){

            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')

            switch(this.opcao){
                case 1:
                    this.processo = new ListagemTitulares()
                    this.processo.processar()
                    break
                case 2:
                    this.processo = new BuscarTitularPorDocumento()
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