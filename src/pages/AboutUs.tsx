import { useState, useEffect, useRef } from "react";
import styles from "../styles/about-us.module.css";
import consultaImg from "../assets/consulta.jpeg";
import cardiologiaImg from "../assets/specialties/cardiologia.jpg";
import pediatriaImg from "../assets/specialties/pediatria.jpg";
import { FaStar, FaHeart, FaSmile } from "react-icons/fa";

/* =================CARROSSEL PRINCIPAL================= */
export function AboutUs() {
  /* ================= IMAGENS DO CARROSSEL ================= */
  const slides = [
    {
      image: consultaImg,
      title: "Cuidado Médico Completo",
      subtitle: "com qualidade e confiança",
      buttonText: "MAIS INFORMAÇÕES",
      buttonTextSecondary: "AGENDAMENTO",
    },
    {
      image: cardiologiaImg,
      title: "Exames",
      subtitle: "Laboratoriais e de Imagem",
      buttonText: "SAIBA MAIS",
    },
    {
      image: pediatriaImg,
      title: "Agendamento",
      subtitle: "ONLINE",
      buttonText: "AGENDAR",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const slideWidthPercent = 100 / slides.length;

  /* ================= VALORES ================= */
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const [valuesVisible, setValuesVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setValuesVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => {
      if (valuesRef.current) observer.unobserve(valuesRef.current);
    };
  }, []);

  /* ================= RETORNO DO COMPONENTE ================= */
  return (
    <>
      <main className={styles.carouselContainer}>
        {/* ================= EFEITOS PRIMEIRA IMAGEM ================= */}
        <div
          className={styles.slidesWrapper}
          style={{
            transform: `translateX(-${currentSlide * slideWidthPercent}%)`,
          }}
        >
          {slides.map((slide, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={index}
                className={`${styles.slide} ${isFirst ? styles.slideFirst : ""}`}
                aria-label={slide.title}
                role="group"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={styles.slideImage}
                />

                <div
                  className={`${styles.overlay} ${
                    isFirst ? styles.overlayGradient : ""
                  }`}
                ></div>

                <div className={styles.slideContent}>
                  <div
                    className={`${styles.textContainer} ${
                      isFirst ? styles.heroTextBlock : ""
                    }`}
                  >
                    {isFirst ? (
                      <>
                        <h1
                          className={styles.heroTitleAnimated}
                          key={`title-${currentSlide}`}
                        >
                          <span className={`${styles.heroWord} ${styles.word1}`}>
                            Cuidado
                          </span>
                          <span className={`${styles.heroWord} ${styles.word2}`}>
                            Médico
                          </span>
                          <span className={`${styles.heroWord} ${styles.word3}`}>
                            Completo
                          </span>
                        </h1>
                        <p
                          className={styles.heroSubtitleAnimated}
                          key={`subtitle-${currentSlide}`}
                        >
                          <span className={`${styles.heroWord} ${styles.word4}`}>
                            para
                          </span>
                          <span className={`${styles.heroWord} ${styles.word5}`}>
                            toda
                          </span>
                          <span className={`${styles.heroWord} ${styles.word6}`}>
                            família
                          </span>
                        </p>
                      </>
                    ) : (
                      <h1 className={styles.slideTitle}>
                        <span className={styles.titleLine1}>{slide.title}</span>
                        <br />
                        <span className={styles.titleLine2}>
                          {slide.subtitle}
                        </span>
                      </h1>
                    )}

                  

                    <div className={styles.buttonsContainer}>
                      <button
                        className={`${styles.primaryButton} ${
                          isFirst ? styles.primaryButtonHero : ""
                        }`}
                      >
                        {slide.buttonText}
                      </button>
                      {slide.buttonTextSecondary && (
                        <button
                          className={`${styles.secondaryButton} ${
                            isFirst ? styles.secondaryButtonHero : ""
                          }`}
                        >
                          {slide.buttonTextSecondary}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= EFEITOS PRIMEIRA IMAGEM ================= */}
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.indicatorActive : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </main>
      {/* ================= PRIMEIRO CARROSSEL ================= */}

      {/* ================= SEÇÃO QUEM SOMOS ================= */}
      <section className={styles.quemSomos}>
        <div className={styles.contentWrapper}>
          <div className={styles.textBlock}>
            <h2>
              Seja bem-vindo à <span>Clínica Vida Saudável</span>
              <br />
              Atendimento médico para você e sua família.
            </h2>

            <p>
              Contamos com diversas especialidades médicas, oferecendo um cuidado
              humano, ágil e de qualidade. Nossa equipe multidisciplinar está
              preparada para cuidar da sua saúde física, emocional e social com
              dedicação.
            </p>

            {/* ====== Valores ====== */}
            <div
              ref={valuesRef}
              className={`${styles.valoresBox} ${
                valuesVisible ? styles.show : ""
              }`}
            >
              <h3>Nossos Valores</h3>
              <ul>
                <li>
                  <FaStar className={styles.icon} /> Excelência em tudo o que fazemos
                </li>
                <li>
                  <FaHeart className={styles.icon} /> Respeito e carinho com as pessoas
                </li>
                <li>
                  <FaSmile className={styles.icon} /> Entusiasmo e alegria ao servir
                </li>
              </ul>
            </div>
            {/* ====== Valores ====== */}

            <p className={styles.highlight}>
              Cuidar da sua saúde ficou mais fácil — agende já!
            </p>

            <a
              href="https://wa.me/?text=Olá! Gostaria de agendar minha consulta na Clínica Visa Saudável."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              AGENDAR AGORA!
            </a>
          </div>

          <div className={styles.imageBlock}>
            <img
              src={consultaImg}
              alt="Equipe médica"
              className={styles.heroImage}
            />
          </div>
        </div>

{/*  onda */}
<div className={styles.curveBottom}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"   
      fillOpacity="1"
      d="M0,224L48,197.3C96,171,192,117,288,96C384,75,480,85,576,117.3C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
    ></path>
  </svg>
</div>





        
      </section>

      

      
      {/* ================= SEÇÃO QUEM SOMOS ================= */}
    </>
  );
}
