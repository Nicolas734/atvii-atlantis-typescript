import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorClienteDocumento from "../impressores/impressorClienteDocumento";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import EditarTitularOpcao from "./editar/editarTitularOpcao";

export default class BuscarTitularPorDocumento extends Processo{
    private clientes!: Cliente[]
    private impressor!: Impressor
    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar():void{
        let numero = this.entrada.receberTexto('Qual o número do documento?')
        this.clientes.forEach( cliente => {
            if(this.titular(cliente)){
                cliente.Documentos.forEach( documento => {
                    if(documento.Numero === numero){
                        this.impressor = new ImpressorClienteDocumento(cliente)
                        console.log(this.impressor.imprimir())
                        this.processo = new EditarTitularOpcao(cliente)
                        this.processo.processar()
                    }
                })
            }
        })
    }

    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}