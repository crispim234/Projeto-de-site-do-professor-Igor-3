import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { state, dispatch } = useTheme();
  return (
    <header
      className={`${styles.header} ${
        state.theme === "Dark" ? styles.dark : ""
      }`}
    >
      <h1>Nosso Portfólio</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {state.theme} theme
      </button>
    </header>
  );
};

export default Header;
