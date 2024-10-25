import React from "react";
import styles from "./InformacoesVendedor.module.css";

const InformacoesVendedor = ({ vendedor }) => {
  return (
    <section className={styles.vendedor}>
      <h3>Vendedor : {vendedor.nome}</h3>
      <p>Email:{vendedor.email}</p>
      <p>Telefone: {vendedor.telefone}</p>
      <p>Nota: {vendedor.nota} de 5</p>
    </section>
  );
};

export default InformacoesVendedor;
