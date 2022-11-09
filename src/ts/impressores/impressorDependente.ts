import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpressorTelefones from "./impressorTelefones";

export default class ImpressorDependente implements Impressor{
    private cliente!: Cliente
    private impressor!: Impressor

    constructor(cliente:Cliente){
        this.cliente = cliente
    }

    imprimir(): string {
        let impressao = `****************************\n`
        + `| -- Dependente -- \n`
        + `| Nome: ${this.cliente.Nome}\n`
        + `| Nome social: ${this.cliente.NomeSocial}\n`
        + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
        + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}\n`

        impressao = impressao + `| -- Titular -- \n`
        + `| Nome do titular: ${this.cliente.Titular.Nome}\n`
        + `| Nome social do titular: ${this.cliente.Titular.NomeSocial}\n`
        + `| Data de nascimento do titular: ${this.cliente.Titular.DataNascimento.toLocaleDateString()}`

        this.impressor = new ImpressorDocumentos(this.cliente.Titular.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorTelefones(this.cliente.Titular.Telefones)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorEndereco(this.cliente.Titular.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}\n`

        return impressao
    }

}