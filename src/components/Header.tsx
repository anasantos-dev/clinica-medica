import { useState } from "react";
import styles from "../styles/header.module.css";
import logoImg from "../assets/logo.jpeg"; // ajuste para o logo da clínica depois

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo + nome */}
      <div className={styles.logo}>
        <img src={logoImg} alt="Logo Clínica Vida Saudável" className={styles.logoImg} />
        <div>
          <h1>CLÍNICA VIDA SAUDÁVEL</h1>
          <span>Cuidado Médico Humanizado</span>
        </div>
      </div>

      {/* Botão Menu Hamburguer (mobile) */}
      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Overlay (fundo escuro) */}
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>}

      {/* Navegação */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <a href="#inicio" onClick={() => setMenuOpen(false)}>Quem Somos</a>
        <a href="#especialidades" onClick={() => setMenuOpen(false)}>Especialidades</a>
        <a href="#avaliacoes" onClick={() => setMenuOpen(false)}>Depoimentos</a>
        <a href="#atendimentos" onClick={() => setMenuOpen(false)}>Atendimentos</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>

      {/* Botão WhatsApp (desktop apenas) */}
      <a
        href="https://wa.me/5591980254953"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
      >
        <i className="fab fa-whatsapp"></i> Agende sua Consulta
      </a>
    </header>
  );
}
