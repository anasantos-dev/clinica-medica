import styles from "../styles/tratamentos.module.css";
import clinicaGeralJpg from "../assets/especialidades/clinicaGeral.jpg";
import pediatriaJpg from "../assets/especialidades/pediatria.jpg";
import ginecologiaJpg from "../assets/especialidades/ginecologia.jpg";
import cardiologiaJpg from "../assets/especialidades/cardiologia.jpg";
import dermatologiaJpg from "../assets/especialidades/dermatologia.jpg";
import oftalmologiaJpg from "../assets/especialidades/oftalmologia.jpg";
import ortopediaJpg from "../assets/especialidades/ortopedia.jpg";
import endocrinologiaJpg from "../assets/especialidades/endocrinologia.jpg";

export function Tratamentos() {
  const cards = [
    {
      img: clinicaGeralJpg,
      titulo: "Clínica Geral",
      desc: "Atendimento inicial, diagnóstico e encaminhamento para especialidades específicas."
    },
    {
      img: pediatriaJpg,
      titulo: "Pediatria",
      desc: "Cuidado completo da saúde infantil, do nascimento até a adolescência."
    },
    {
      img: ginecologiaJpg,
      titulo: "Ginecologia & Obstetrícia",
      desc: "Saúde da mulher, acompanhamento pré-natal e cuidados ginecológicos."
    },
    {
      img: cardiologiaJpg,
      titulo: "Cardiologia",
      desc: "Prevenção, diagnóstico e tratamento de doenças do coração e circulação."
    },
    {
      img: dermatologiaJpg,
      titulo: "Dermatologia",
      desc: "Tratamentos para pele, cabelo e unhas, promovendo saúde e estética."
    },
    {
      img: oftalmologiaJpg,
      titulo: "Oftalmologia",
      desc: "Avaliação da visão, exames de vista e tratamento de doenças oculares."
    },
    {
      img: ortopediaJpg,
      titulo: "Ortopedia",
      desc: "Diagnóstico e tratamento de problemas ósseos, articulares e musculares."
    },
    {
      img: endocrinologiaJpg,
      titulo: "Psiquiatria",
      desc: "Acompanhamento da saúde mental, tratamento de ansiedade, depressão e mais."
    }
  ];

  return (
    <section id="tratamentos" className={styles.tratamentosSection}>
      <h2 className={styles.title}>Especialidades Médicas</h2>
      <div className={styles.divider}>
        <span className={styles.line}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      <p className={styles.subtitle}>
        Nossa clínica oferece diversas especialidades médicas para atender você e sua família com excelência, cuidado e acolhimento.
      </p>

      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.img} alt={card.titulo} className={styles.cardImg} />
            <h3>{card.titulo}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
