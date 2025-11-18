import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  const { state } = useTheme();
  return (
    <section
      className={`${styles.hero} ${state.theme === "Dark" ? styles.dark : ""}`}
    >
      <h2>Seja bem-vindo ao nosso portifólio</h2>
      <p>Somos um grupo de devs que são apaixonados por tecnologia.</p>
    </section>
  );
};

export default HeroSection;
