import Processo from "../../abstracoes/processo";
import MenuTipoListagemClientes from "../../menus/menuTipoListagemClientes";
import ListagemDependentes from "../listagens/listagemDependentes";
import ListagemDependenteTitular from "../listagens/listagemDependenteTitular";
import ListagemTitularDependentes from "../listagens/listagemTitularDependentes";
import ListagemTitulares from "../listagens/listagemTitulares";

export default class TipoListagemClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemDependentes()
                this.processo.processar()
                break;
            case 3:
                this.processo = new ListagemTitularDependentes()
                this.processo.processar()
                break;
            case 4:
                this.processo = new ListagemDependenteTitular()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}