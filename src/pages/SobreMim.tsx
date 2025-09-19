import base from '../styles/inicio.module.css';
import styles from '../styles/sobre.module.css';
import img from '../assets/logo.jpeg';

export function Sobre() {
  return (
    <main className={base.mainBg}>
      {/* Sessão Sobre */}
      <section className={base.heroSectionSobre}>
        <div className={base.heroCard}>
          <div className={base.heroTextBox}>
            <h1 className={base.heroTitle}>
              <span className={base.heroTitleGreen}>Sobre a Clínica<br /></span>
              <span className={base.heroTitleGold}>Cuidado médico humanizado é nossa prioridade</span>
            </h1>

            <p className={base.heroDesc}>
              Bem-vindo à <b>Clínica Saúde Plena</b>, um espaço dedicado ao bem-estar integral.
              Nossa missão é oferecer atendimento médico humanizado, com tecnologia, experiência
              e empatia para todas as idades. Cada paciente é acolhido de forma única, com foco
              em prevenção, diagnóstico preciso e acompanhamento contínuo.<br /><br />
              Contamos com uma equipe multidisciplinar preparada para proporcionar saúde,
              qualidade de vida e confiança em cada etapa do seu cuidado.
            </p>

            <div className={styles.ctaBox}>
              <h3>Agende sua consulta e cuide da sua saúde hoje mesmo!</h3>
              <a
                href="https://wa.me/5591980254953"
                target="_blank"
                rel="noopener noreferrer"
                className={base.heroBtnSecondary}
              >
                ENTRE EM CONTATO
              </a>
            </div>
          </div>

          <div className={base.heroImgBox}>
            <img
              src={img}
              alt="Equipe médica da Clínica Saúde Plena"
              className={`${base.heroImg} ${styles.heroImgSobre}`}
            />
          </div>
        </div>
      </section>

      {/* CURRÍCULO – timeline e experiência */}
      <section className={styles.curriculoWrap}>
        {/* Formação */}
        <div className={styles.colLeft}>
          <h2 className={styles.blockTitle}>
            <span>Nossa </span><strong>Formação</strong>
          </h2>
          <ol className={styles.eduTimeline}>
            <li className={styles.eduItem}>
              <span className={styles.eduLine} />
              <span className={styles.eduIcon}>🎓</span>
              <div className={styles.eduText}>
                <h3>Graduações em Medicina e Especialidades</h3>
                <p>Universidades de referência no Brasil</p>
              </div>
            </li>
            <li className={styles.eduItem}>
              <span className={styles.eduLine} />
              <span className={styles.eduIcon}>🎓</span>
              <div className={styles.eduText}>
                <h3>Residências médicas e certificações</h3>
                <p>Clínicas e hospitais de excelência</p>
              </div>
            </li>
            <li className={styles.eduItem}>
              <span className={styles.eduLine} />
              <span className={styles.eduIcon}>🎓</span>
              <div className={styles.eduText}>
                <h3>Atualizações constantes</h3>
                <p>Congressos e cursos nacionais e internacionais</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Divisor central */}
        <div className={styles.colCenter}>
          <span className={styles.centerLine} />
          <div className={`${styles.centerMark} ${styles.markTop}`}>
            <span className={styles.markDot}></span>
            <span className={styles.markYear}>202x</span>
          </div>
          <div className={`${styles.centerMark} ${styles.markMid}`}>
            <span className={styles.markIcon}>💼</span>
            <span className={styles.markYear}>202x</span>
          </div>
          <div className={`${styles.centerMark} ${styles.markBottom}`}>
            <span className={styles.markDot}></span>
          </div>
        </div>

        {/* Experiência */}
        <div className={styles.colRight}>
          <h2 className={styles.blockTitle}>
            <span>Experiência da </span><strong>Clínica</strong>
          </h2>
          <div className={styles.expItem}>
            <div className={styles.expYear}>202X</div>
            <div className={styles.expText}>
              <p><strong>Fundação da Clínica Saúde Plena</strong>, com foco em atendimento humanizado</p>
            </div>
          </div>
          <div className={styles.expItem}>
            <div className={styles.expYear}>202X</div>
            <div className={styles.expText}>
              <p><strong>+XX anos de experiência</strong> em diversas especialidades médicas</p>
            </div>
          </div>
          <div className={styles.expItem}>
            <div className={styles.expYear}>Hoje</div>
            <div className={styles.expText}>
              <p>Referência em saúde preventiva, diagnóstica e reabilitadora na região.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
