// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

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

    return (
        <div>
            <h1>Produtos de limpeza</h1>
        </div>
    );
}
    






