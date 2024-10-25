import React from "react";
import Cabecalho from "./Components/Cabecalho";
import Menu from "./Components/Menu";
import DetalhesProduto from "./Components/DetalhesProduto";
import InformacoesVendedor from "./Components/InformacoesVendedor";
import Comentarios from "./Components/Comentarios";
import Perguntas from "./Components/Perguntas";
import ProdutosRelacionados from "./Components/ProdutosRelacionados";

function App() {
  const produto = {
    nome: "Cadeira Gamer Super Mega",
    imagem: "/images/cadeira.jpg",
    descricao: "Cadeira Super Mega. Simplesmente Super Mega.",
    preco: 1599.99,
    nota: 4.5,
  };

  const vendedor = {
    nome: "TechTier",
    email: "techtier@asgard.com",
    telefone: "(11) 1234-5678",
    nota: 4.8,
  };

  const comentarios = [
    {
      usuario: "Luan",
      data: "2024-09-22",
      mensagem: "Produto Mega!",
      nota: 5,
    },
    {
      usuario: "Marcia",
      data: "2024-09-21",
      mensagem: "Confortável, mas demorou para chegar.",
      nota: 4,
    },
  ];

  const perguntas = [
    {
      usuario: "Jorginho",
      data: "2024-09-20",
      pergunta: "Essa cadeira é reclinável?",
      resposta: "Sim, até 135 graus.",
    },
    {
      usuario: "Glaucia",
      data: "2024-09-19",
      pergunta: "Qual o peso máximo suportado?",
      resposta: "Até 300 kg.",
    },
  ];

  const produtosRelacionados = [
    {
      nome: "Mesa Gamer Epica",
      imagem:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1AUsKNXqu0x0bDn20kse75akwVoZeodVZSnRSiWdTKyYB92cFjfCdmVAj1X-xKwdbzKBLmSnO3OPJOVoIbz7LxJpfJ3TXIlpqHcJkO4RppMCs_tErvFmqnwvaVg6JuIcJJ-Qve9c&usqp=CAc",
      preco: 699.99,
    },
    {
      nome: "Fone de Ouvido Lendario",
      imagem:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxF8fWlnKYrZbf9LhV-V9ZuH9T7bmHyuEm0hs6RstdQ4nc8OMF_MR7sLZ9ayxvaJuLVxjuJsOV4eUwxClYsn7yAISzgOlfvcOvthK-cC3cXSIs4s2TzMq89zs2hc2DxSSxk2nVsw&usqp=CAc",
      preco: 899.99,
    },
  ];

  return (
    <div className="app">
      <Cabecalho />
      <Menu />
      <main>
        <DetalhesProduto produto={produto} />
        <InformacoesVendedor vendedor={vendedor} />
        <Comentarios comentarios={comentarios} />
        <Perguntas perguntas={perguntas} />
        <ProdutosRelacionados produtos={produtosRelacionados} />
      </main>
    </div>
  );
}

export default App;
