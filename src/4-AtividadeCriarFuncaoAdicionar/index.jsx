// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

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

    const [listaPedidos, setPedidos] = useState([]);

    const adicionarPedidos = (objeto) => {
        setListaPedidosLimpeza([...listaPedidos, objeto])
    }




    return (
        <div>
            <h1>Produtos de limpeza</h1>
          {
            listaProdutosLimpeza.map((produto)=>
            <div key = {produto.id}>
            <p>{produto.item}</p>
            <p>{produto.preco}</p>
            </div>
            )
          }
                                
        </div>
    );
    
}
    
