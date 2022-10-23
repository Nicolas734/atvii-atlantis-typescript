import Processo from "../../abstracoes/processo";
import MenuTipoExcluir from "../../menus/menuTipoExcluir";
import ExcluirTitular from "../excluir/excluirTitular";

export default class TipoExcluirCliente extends Processo{
    constructor(){
        super()
        this.menu = new MenuTipoExcluir()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ExcluirTitular()
                this.processo.processar()
                break;
            case 2:
                console.log('em progresso');
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}