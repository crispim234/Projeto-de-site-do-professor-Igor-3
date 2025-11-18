import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const { state } = useTheme();
  return (
    <nav
      className={`${styles.navbar} ${
        state.theme === "Dark" ? styles.dark : ""
      }`}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
