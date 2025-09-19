import styles from "../styles/chamada.module.css";

export function Chamada() {
  return (
    <section className={styles.chamadaSection}>
      <h2 className={styles.title}>
        <span className={styles.green}>Sua saúde merece atenção especial,</span>{" "}
        <span className={styles.gold}>agende sua consulta!</span>
      </h2>

      {/* Divider com linha e bolinhas */}
      <div className={styles.divider}>
        <span className={styles.line}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>

      <p className={styles.subtitle}>
        Atendimento médico humanizado em diversas especialidades.  
        Cuide da sua saúde com qualidade, conforto e confiança.
      </p>

      <div className={styles.highlightBox}>
        <h3>
          <span> Marque sua consulta com nossos especialistas </span>
          <span className={styles.highlightText}>ainda hoje!</span>
        </h3>

        <a
          href="https://wa.me/5591980254953?text=Olá, gostaria de agendar uma consulta médica."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.button}>AGENDAR CONSULTA</button>
        </a>
      </div>
    </section>
  );
}
