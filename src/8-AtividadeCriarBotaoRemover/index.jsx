// Crie e exporte uma função que retorna uma estrutura HTML.
// Nomeie a função como `Home`, lembrando-se sempre de usar a primeira letra maiuscula.
// Inclua uma tag `<h1>` dentro da função, e insira um texto relacionado ao tema escolhido.

// Crie um estado chamado `arrayProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 5 objetos, cada um contendo 4 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `arrayProdutos`
// dentro desse `<div>`.

// Crie o estado `meusPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `produto`.
// Dentro da função, utilize `setMeusPedidos` para adicionar o `produto` à `meusPedidos`.
// Exemplo: `setMeusPedidos([...arrayPedidos, produto]);`

// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(pedido)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `arrayPedidos`
// dentro desse `<div>`.

// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

import {useState} from "react";

export default function Home() {
    const [listaProdutosLimpeza, setProdutosLimpeza] = useState([
        {

            id: 1,

            item: "Detergente Líquido YPÊ",

            imagem: "https://mercado.qualycestas.com.br/produtos-de-limpeza/detergente-liquido-ype-clear-500ml",

            preco: "R$ 2,90"

        },

        {

            id: 2,

            item: "Limpador Veja Multiuso",

            imagem: "https://mercado.qualycestas.com.br/produtos-de-limpeza/limpador-veja-multiuso-500ml",

            preco: "R$ 6,48"

        },

        {

            id: 3,

            item: "Esponja Dupla Face",

            imagem: "https://mercado.qualycestas.com.br/produtos-de-limpeza/esponja-dupla-face-brilhus",

            preco: "R$ 0,99"

        },

        {

            id: 4,

            item: "Sabão em Pedra YPÊ",

            imagem: "https://mercado.qualycestas.com.br/produtos-de-limpeza/sabao-em-pedra-ype-pacote-5x180g-fragrancias",

            preco: "R$ 11,61"

        },
    ]);

    const [listaPedidosLimpeza, setListaPedidosLimpeza] = useState([]);

    const adicionarPedidos = (objeto) => {
        setListaPedidosLimpeza([...listaPedidos, objeto])
    }

    const removerProduto= (id) => {
        let remover = false;
        let lista = listaPedidos.filter((produto) => {
            if(remover == false) {
                if(produto.id !== id) {
                    return produto
                } else{
                    remover = true;
                    return  null
                }
            } else{
                return produto
            }
        }
        );
        setListaPedidosLimpeza(lista);
    }




    return (
        <div>
            <h1>Produtos de limpeza</h1>
          {
            listaProdutosLimpeza.map((produto)=>
            <div key = {produto.id}>
            <p>{produto.item}</p>
            <p>{produto.preco}</p>
            <button onClick={()=> adicionarPedidos(produto)}>Adicionar</button>
            </div>
            )
          }
          {
             listaProdutos.map((produto)=>
             <div key = {produto.id}>
             <p>{produto.item}</p>
             <p>{produto.preco}</p>
             <div>
             <img src={produto.imagem}></img>
             </div>
             <button onClick={() => removerProduto(produto.id)}> Remover </button>
             </div>
             )
    }

                                
        </div>
    );
    
}
    
