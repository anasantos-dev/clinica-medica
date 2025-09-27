import { useState } from "react";
import styles from "../styles/header.module.css";
import logoImg from "../assets/logo.jpeg"; 

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
     
      <div className={styles.logo}>
        <img src={logoImg} alt="Logo Clínica Vida Saudável" className={styles.logoImg} />
        <div>
          <h1>CLÍNICA VIDA SAUDÁVEL</h1>
          <span>Cuidado Médico Humanizado</span>
        </div>
      </div>

     
      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

     
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>}

     
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
      <a href="#about-us" onClick={() => setMenuOpen(false)}>Quem Somos</a>
      <a href="#specialties" onClick={() => setMenuOpen(false)}>Especialidades</a>
      <a href="#appointments" onClick={() => setMenuOpen(false)}>Atendimentos</a>
      <a href="#reviews" onClick={() => setMenuOpen(false)}>Depoimentos</a>      
      <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>

      
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
