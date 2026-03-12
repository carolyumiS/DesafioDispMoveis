//Tipagem Interfaces (arquivo9)
interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
}

//criando tipo ProdutoResumo usando Type Pick<T, K> (arquivo12)
type ProdutoResumo = Pick<Produto, "nome" | "preco">;


//BASE DE DADOS (arquivo 06)
//cardápio (array estático tipado) 
console.log("=== A BASE DE DADOS ===");
const cardapio: Produto[] = [
    { id: 1, nome: "Wooper", preco: 39, categoria: "Lanches" },
    { id: 2, nome: "Batata Frita", preco: 15, categoria: "Acompanhamentos" },
    { id: 3, nome: "Refrigerante", preco: 17, categoria: "Bebidas" }
];


//Lógica de negócio (funções) (arquivo 06)
const adicionarItem = (carrinho: Produto[], novoProduto: Produto): Produto[] => {
    return [...carrinho, novoProduto]; //usando Spread Operator ...
};

const buscarPorCategoria = (lista: Produto[], categoria: string): Produto[] => {
    return lista.filter(item => item.categoria === categoria);
};

const calcularTotal = (carrinho: Produto[]): number => {
    return carrinho.reduce((total, item) => total + item.preco, 0);
};


//EXECUCAO (TESTE)
let meuCarrinho: Produto[] = [];

// Simulando a adição de 2 itens
meuCarrinho = adicionarItem(meuCarrinho, cardapio[0]);
meuCarrinho = adicionarItem(meuCarrinho, cardapio[2]);

const total = calcularTotal(meuCarrinho);

console.log(`--- Notinha ---`);
console.log(`Itens no carrinho: ${meuCarrinho.length}`);
console.log(`Total a pagar: R$ ${total.toFixed(2)}`);

/*
const testeCategorias = buscarPorCategoria(cardapio, "Bebidas");
console.log("\nOpções de Bebidas no Cardápio:", testeCategorias.map(b => b.nome));
*/