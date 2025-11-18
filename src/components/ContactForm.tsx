import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  const { state } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensagem enviada: ${name}, ${email}, ${message}`);
  };

  return (
    <form
      className={`${styles.form} ${state.theme === "Dark" ? styles.dark : ""}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
