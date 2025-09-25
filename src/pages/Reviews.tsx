import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "../styles/reviews.module.css";

export function Reviews() {
  const avaliacoes = [
    {
      id: 1,
      nome: "Maria Silva",
      texto:
        "A equipe médica foi extremamente atenciosa. Me senti acolhida e tive um diagnóstico rápido e preciso.",
    },
    {
      id: 2,
      nome: "João Pereira",
      texto:
        "Excelente atendimento! O médico explicou tudo com clareza e o acompanhamento foi impecável.",
    },
    {
      id: 3,
      nome: "Fernanda Souza",
      texto:
        "Profissionais muito competentes e ambiente agradável. Recomendo para quem busca confiança e cuidado.",
    },
    {
      id: 4,
      nome: "Carlos Oliveira",
      texto:
        "Fui atendido de forma rápida e humanizada. Com certeza voltarei quando precisar.",
    },
    {
      id: 5,
      nome: "Patrícia Santos",
      texto:
        "Gostei muito da forma como fui tratada. Me senti segura e bem orientada durante todo o processo.",
    },
  ];

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  return (
    <section id="avaliacoes" className={styles.avaliacoesSection}>
      <h2 className={styles.title}>O que nossos pacientes dizem</h2>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}  
        spaceBetween={24}
        speed={600}
        grabCursor={true}
        navigation={{
          nextEl: `.${styles.nextBtn}`,
          prevEl: `.${styles.prevBtn}`,
        }}
        onSwiper={(swiper) => {
          setTotalPaginas(swiper.slides.length);
        }}
        onSlideChange={(swiper) => {
          setPaginaAtual(swiper.activeIndex + 1);
        }}
      >
        {avaliacoes.map((av) => (
          <SwiperSlide key={av.id}>
            <div className={styles.card}>
              <span className={styles.quote}>&ldquo;</span>
              <p className={styles.text}>{av.texto}</p>
              <div className={styles.author}>— {av.nome}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões navegação */}
      <div className={styles.controls}>
        <button className={styles.prevBtn}>◀</button>
        <span className={styles.counter}>
          {paginaAtual}/{totalPaginas}
        </span>
        <button className={styles.nextBtn}>▶</button>
      </div>
    </section>
  );
}
