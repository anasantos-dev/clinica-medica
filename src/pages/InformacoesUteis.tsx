import styles from "../styles/informacoesUteis.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaNotesMedical } from "react-icons/fa";

export function InformacoesUteis() {
  return (
    <section id="informacoes" className={styles.infoSection}>
      <h2 className={styles.title}>Informações Úteis</h2>

      <div className={styles.infoGrid}>
        <div className={styles.card}>
          <FaMapMarkerAlt className={styles.icon} />
          <h3>Endereço</h3>
          <p>Rua Exemplo, 123 - Centro<br />Cidade/UF</p>
        </div>

        <div className={styles.card}>
          <FaPhoneAlt className={styles.icon} />
          <h3>Contato</h3>
          <p>(91) 98025-4953<br />contato@clinicaexemplo.com</p>
        </div>

        <div className={styles.card}>
          <FaClock className={styles.icon} />
          <h3>Horário de Atendimento</h3>
          <p>Segunda a Sexta: 08h - 18h<br />Sábado: 08h - 12h</p>
        </div>

        <div className={styles.card}>
          <FaNotesMedical className={styles.icon} />
          <h3>Convênios</h3>
          <p>Aceitamos principais convênios<br />ou atendimento particular.</p>
        </div>
      </div>
    </section>
  );
}
