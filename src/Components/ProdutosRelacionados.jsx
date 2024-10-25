import React from "react";
import styles from "./ProdutosRelacionados.module.css";

const ProdutosRelacionados = ({ produtos }) => {
  return (
    <section className={styles.produtosRelacionados}>
      <h3> Produtos relacionados </h3>
      <div className={styles.listaProdutos}></div>
      {produtos.map((produto, index) => (
        <div key={index} className={styles.cardProduto}>
          <img
            src={produto.image}
            alt={produto.nome}
            className={styles.imagemProduto}
          />
          <h4 className={styles.nomeProduto}>{produto.nome}</h4>
          <p className={styles.precoProduto}> {produto.preco}</p>
        </div>
      ))}
    </section>
  );
};

export default ProdutosRelacionados;
