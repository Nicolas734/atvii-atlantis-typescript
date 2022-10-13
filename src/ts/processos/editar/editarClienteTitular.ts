import Processo from "../../abstracoes/processo";
import MenuOpcaoDocumentoBuscaCliente from "../../menus/menusEditar/menuOpcaoDocumentoBuscaCliente";

export default class EditarClienteTitular extends Processo{
    processar(): void {
        this.menu = new MenuOpcaoDocumentoBuscaCliente()
        this.execucao = true

        while(this.execucao){

            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')

            switch(this.opcao){
                case 1:
                    console.log('1');
                    break
                case 2:
                    console.log('2');
                    break
                case 3:
                    console.log('3');
                    break
                case 0:
                    console.log('0');
                    this.execucao = false
                    break
                default:
                    console.log('Operação não entendida.');

            }
        }
    }
}