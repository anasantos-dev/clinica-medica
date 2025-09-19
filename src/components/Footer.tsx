import styles from "../styles/footer.module.css";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Clínica Vida Saudável - Todos os direitos reservados.  
        Desenvolvido por <strong className={styles.sosHighlight}>SOS Software</strong>
      </div>

      <div className={styles.social}>
        <a
          href="https://wa.me/5591980254953"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
