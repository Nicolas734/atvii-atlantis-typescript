import Processo from "../../abstracoes/processo";
import Impressor from "../../interfaces/impressor";
import MenuOpcaoTelefones from "../../menus/menusEditar/menuOpcaoTelefones";
import Cliente from "../../modelos/cliente";

export default class EditarTelefoneCliente extends Processo{
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente:Cliente){
        super()
        this.cliente = cliente
        this.menu = new MenuOpcaoTelefones()
        this.execucao = true
    }

    processar(): void {
        while(this.execucao){

            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')

            switch(this.opcao){
                case 1:
                    let novoNumero = this.entrada.receberTexto('Digite o novo numero: ')
                    break
                case 2:
                    console.log();
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