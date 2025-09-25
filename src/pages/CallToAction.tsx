import { useEffect, useRef, useState } from "react";
import styles from "../styles/call-to-action.module.css";

export function  CallToAction() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // ativa a animação
            observer.unobserve(entry.target); // dispara só 1 vez
          }
        });
      },
      { threshold: 0.3 } // 30% da seção visível já ativa
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.chamadaSection}>
      <h2 className={styles.title}>
        <span
          className={`${styles.green} ${animate ? styles.slideLeft : ""}`}
        >
          Sua saúde merece atenção especial,
        </span>{" "}
        <span
          className={`${styles.gold} ${animate ? styles.slideRight : ""}`}
        >
          agende sua consulta!
        </span>
      </h2>

      {/* Divider moderno */}
      <div className={styles.divider}>
        <span className={styles.line}></span>
        <span className={styles.circle}></span>
        <span className={styles.line}></span>
      </div>

      <p className={`${styles.subtitle} ${animate ? styles.fadeIn : ""}`}>
        Atendimento médico humanizado em diversas especialidades.  
        Cuide da sua saúde com qualidade, conforto e confiança.
      </p>

      <div className={`${styles.callToActionBox} ${animate ? styles.fadeUp : ""}`}>
        <h3 className={styles.callTitle}>
          Garanta sua consulta <span className={styles.highlight}>ainda hoje</span>
        </h3>
        <p className={styles.callSubtitle}>
          Nossos especialistas estão prontos para te atender hoje.
        </p>
        <a
          href="https://wa.me/5591980254953?text=Olá, gostaria de agendar uma consulta médica."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.ctaButton}>AGENDE AQUI</button>
        </a>
      </div>
    </section>
  );
}
