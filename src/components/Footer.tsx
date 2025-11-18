import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const { state } = useTheme();
  return (
    <footer
      className={`${styles.footer} ${
        state.theme === "dark" ? styles.dark : ""
      }`}
    >
      <p>&copy; 2023 Meu Portfólio. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
