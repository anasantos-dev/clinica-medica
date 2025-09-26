import styles from "../styles/exams.module.css";
import examsImg from "../assets/exams.jpg";
import { FaCheckCircle } from "react-icons/fa";

export function Exams() {
  return (
    <section id="exams" className={styles.examsSection}>
      <div className={styles.container}>
        
        {/* Texto à esquerda */}
        <div className={styles.textSide}>
          <h3 className={styles.subtitle}>
            Está buscando exames rápidos e confiáveis?
          </h3>

         <ul className={styles.list}>
  <li><FaCheckCircle className={styles.icon}/> Exames laboratoriais</li>
  <li><FaCheckCircle className={styles.icon}/> Exames cardiológicos</li>
  <li><FaCheckCircle className={styles.icon}/> Ultrassonografia</li>
</ul>


          <h4 className={styles.highlightTitle}>
            Serviços que encaminhamos com desconto exclusivo:
          </h4>

          <ul className={styles.list}>
            <li><FaCheckCircle className={styles.icon}/>Tomografia Computadorizada</li>
            <li><FaCheckCircle className={styles.icon}/>Ressonância magnética</li>
            <li><FaCheckCircle className={styles.icon}/>Ecocardiograma</li>
            <li><FaCheckCircle className={styles.icon}/>Radiografia</li>
          </ul>
        </div>

        {/* Imagem à direita */}
        <div className={styles.imageSide}>
          <h2 className={styles.title}>Exames e diagnósticos</h2>
          <img
            src={examsImg}
            alt="Exames e diagnósticos"
            className={styles.examsImage}
          />
        </div>
      </div>
    </section>
  );
}
