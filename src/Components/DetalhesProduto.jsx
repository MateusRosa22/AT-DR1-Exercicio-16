import React from "react";
import styles from "./DetalhesProduto.module.css";

const DetalhesProduto = ({ produto }) => {
  return (
    <section className={styles.produto}>
      <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
      <div className={styles.informacoes}>
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        <p>Preço: R$ {produto.preco.toFixed(2)}</p>
        <p>Nota: {produto.nota} de 5</p>
      </div>
    </section>
  );
};

export default DetalhesProduto;
