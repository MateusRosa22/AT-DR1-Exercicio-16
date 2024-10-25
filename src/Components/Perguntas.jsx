import React from "react";
import styles from "./Perguntas.module.css";

const Perguntas = ({ perguntas }) => {
  return (
    <section className={styles.perguntas}>
      <h3>Perguntas sobre o produto:</h3>
      {perguntas.map((perguntas, index) => (
        <div key={index} className={styles.pergunta}>
          <p>
            <strong>{perguntas.usuario}</strong> - {perguntas.data}
          </p>
          <p>
            <strong>perguntas:</strong> {perguntas.resposta}{" "}
          </p>
          <p>
            <strong>Respostas: </strong> {perguntas.respota}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Perguntas;
