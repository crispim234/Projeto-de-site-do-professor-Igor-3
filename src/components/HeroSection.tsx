import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  const { state } = useTheme();
  return (
    <section
      className={`${styles.hero} ${state.theme === "dark" ? styles.dark : ""}`}
    >
      <h2>Bem-vindo ao Meu Portfólio</h2>
      <p>Sou um desenvolvedor apaixonado por tecnologia.</p>
    </section>
  );
};

export default HeroSection;
