import Menu from "../../interfaces/menu";

export default class MenuOpcaoBuscaCliente implements Menu{
    mostrar(): void {
        //console.clear()
        console.log(`****************************`)
        console.log(`| Selecione uma opção ? `)
        console.log(`----------------------`)
        console.log(`| 1 - Listar Clientes`)
        console.log(`| 2 - Buscar Cliente`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}