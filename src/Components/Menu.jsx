import React, { useState } from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  const { menuAberto, setMenuAberto } = useState(false);

  return (
    <nav className={styles.menu}>
      <button
        className={styles.botaoMenu}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        ☰
      </button>
      <ul
        className={`${styles.listaMenu} ${menuAberto ? styles.aberto : ""}`}
      >
        <li>Inicio</li>
        <li>Produtos</li>
        <li>Sobre</li>
        <li>Contato</li>
        <li>Ajuda</li>
      </ul>
    </nav>
  );
};

export default Menu;
