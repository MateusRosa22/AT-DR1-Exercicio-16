import React from "react";
import estilos from "./Comentarios.module.css";

const Comentarios = ({ comentarios }) => {
  return (
    <section className={estilos.comentarios}>
      <h3>Comentarios : </h3>
      {comentarios.map((comentario, index) => (
        <div key={index} className={estilos.comentario}>
          <p>
            {comentario.usuario} - {comentario.data}
          </p>
          <p>{comentario.mensagem}</p>
          <p> Nota: {comentario.nota} de 5 </p>
        </div>
      ))}
    </section>
  );
};

export default Comentarios;
