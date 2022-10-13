import Menu from "../interfaces/menu";

export default class MenuOpcaoDocumentoBuscaCliente implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o documento deseja utilizar para buscar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Registro Geral`)
        console.log(`| 2 - Cadastro de Pessoas Física`)
        console.log(`| 3 - Passaporte`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}