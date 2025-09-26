import { useEffect, useState, useRef } from "react";
import styles from "../styles/appointments.module.css";
import { FaBoxOpen, FaStethoscope, FaTooth } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";


export function Appointments() {
   const [showButton, setShowButton] = useState(false);
   const buttonRef = useRef<HTMLDivElement>(null);

  // Função para rolar até a seção de especialidades
  const scrollToSpecialties = () => {
    const section = document.getElementById("especialidades");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Função para rolar até a seção odontologia
const scrollToDentistry = () => {
  const section = document.getElementById("dentistry");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Função para rolar até a seção de exames laboratoriais
const scrollToExams = () => {
  const section = document.getElementById("exams");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


   useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowButton(true);
        }
      },
      { threshold: 0.3 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <section id="atendimentos" className={styles.servicesSection}>
      {/* Faixa de destaque */}
      <div className={styles.highlightBox}>
        <p>
          A Clínica Vida Saudável existe para te ajudar a cuidar da sua saúde de
          forma rápida, segura e simplificada.
        </p>
      </div>

      {/* Diferenciais */}
      <div className={styles.differentials}>
        <h2 className={styles.differentialsTitle}>
          Por que escolher a Clínica Vida Saudável?
        </h2>

        <div className={styles.differentialsGrid}>
          <div className={styles.differentialCard}>
            <div className={styles.iconCircle}>
              <span className={styles.check}>✓</span>
            </div>
            <h3>Atendimento humanizado</h3>
            <p>
              Equipe preparada para acolher cada paciente com respeito e atenção.
            </p>
          </div>

          <div className={styles.differentialCard}>
            <div className={styles.iconCircle}>
              <span className={styles.check}>✓</span>
            </div>
            <h3>Especialidades variadas</h3>
            <p>
              Consultas médicas em diversas áreas para atender toda a família.
            </p>
          </div>

          <div className={styles.differentialCard}>
            <div className={styles.iconCircle}>
              <span className={styles.check}>✓</span>
            </div>
            <h3>Exames rápidos</h3>
            <p>
              Diagnóstico ágil e preciso, garantindo mais segurança nos
              resultados.
            </p>
          </div>

          <div className={styles.differentialCard}>
            <div className={styles.iconCircle}>
              <span className={styles.check}>✓</span>
            </div>
            <h3>Estrutura moderna</h3>
            <p>
              Ambiente confortável, acessível e pensado no bem-estar do paciente.
            </p>
          </div>
        </div>



          {/* Botão animado */}
        <div
          ref={buttonRef}
          className={`${styles.buttonWrapper} ${
            showButton ? styles.slideIn : ""
          }`}
        >
          <a
            href="https://wa.me/5591980254953?text=Olá, gostaria de agendar uma consulta médica."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.consultButton}
          >
            <span className={styles.arrow}>›</span> Agendar uma consulta
          </a>
        </div>
      </div>



      {/* Serviços */}
      <h2 className={styles.title}>Nossos Benefícios</h2>
      <div className={styles.servicesGrid}>

        {/* Consultas */}
        <div className={styles.serviceCard} onClick={scrollToSpecialties}>
          <FaStethoscope className={styles.icon} style={{ color: "#2f9e78" }}/>
          <h3>Consultas especializadas</h3>
          <p className={styles.price}>A partir de</p>
          <p>
            <strong>R$ 50,00*</strong>
          </p>
        </div>

        {/* Odontologia */}
        <div className={styles.serviceCard} onClick={scrollToDentistry}>
          <FaTooth className={styles.icon} style={{ color: "#1e90ff" }}/>
          <h3>Odontologia</h3>
          <p className={styles.price}>Avaliação</p>
          <p>
            <strong>Gratuita*</strong>
          </p>
        </div>

        {/* Exames */}
        <div className={styles.serviceCard} onClick={scrollToExams}>
          <BiTestTube className={styles.icon}style={{ color: "#8a2be2" }} />
          <h3>Exames laboratoriais</h3>
          <p className={styles.price}>A partir de</p>
          <p>
            <strong>R$ 4,90*</strong>
          </p>
        </div>

        {/* Pacotes */}
        <div className={styles.serviceCard}>
          <FaBoxOpen className={styles.icon} style={{ color: "#f4a261" }} />
          <h3>Pacotes de saúde</h3>
          <p className={styles.price}>Personalizados</p>
        </div>
      </div>
    </section>
  );
}
