import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import ListagemTitulares from "../listagens/listagemTitulares";

export default class ExcluirTitular extends Processo{
    private clientes: Cliente[]

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {

        this.processo = new ListagemTitulares()
        this.processo.processar()

        let numeroDocumento = this.entrada.receberTexto(`Digite o numero do documento do titular: `)
        let indice = this.clientes.findIndex((cliente:Cliente) => cliente.Documentos.find((documento:Documento) => documento.Numero === numeroDocumento ))

        if(indice === -1){
            console.log(`Titular não encontrado.`);
        }else{
            this.clientes.splice(indice, 1)
            console.log(`Titular com documento de numero ${numeroDocumento} excluido com sucessso`);
        }

    }
}