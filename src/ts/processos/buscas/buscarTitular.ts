import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import ListagemTitulares from "../listagens/listagemTitulares";

export default class BuscarTitular extends Processo{
    private titular!: Cliente
    private clientes!: Cliente[]

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): Cliente {
        
        this.processo = new ListagemTitulares()
        this.processo.processar()
        
        let numeroDocumento = this.entrada.receberTexto("Digite o numero do documento do titular desejado: ")

        this.clientes.forEach( (cliente: Cliente) => {
            cliente.Documentos.forEach( (documento:Documento) => {
                if( documento.Numero === numeroDocumento){
                    this.titular = cliente
                }
            })
        })

        return this.titular

    }
}