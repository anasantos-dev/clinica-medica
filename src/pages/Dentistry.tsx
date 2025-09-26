import { useState, useEffect } from "react";
import styles from "../styles/dentistry.module.css";
import sorrisoImg from "../assets/sorriso.jpg";

export function Dentistry() {
  const words = [
    "Avaliação odontológica",
    "Limpeza",
    "Canal",
    "Restauração",
    "Clareamento dental",
  ];

  const [lines, setLines] = useState<string[]>([]); // Armazena as linhas já concluídas
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (currentWordIndex >= words.length) return;

    const currentWord = words[currentWordIndex];
    let typingSpeed = 120;

    const typing = setTimeout(() => {
      // digitando letra por letra
      setDisplayText(currentWord.substring(0, displayText.length + 1));

      if (displayText === currentWord) {
        // quando termina, fixa a linha e passa pra próxima
        setLines((prev) => [...prev, currentWord]);
        setDisplayText("");
        setCurrentWordIndex((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(typing);
  }, [displayText, currentWordIndex, words]);

  return (
    <section id="dentistry" className={styles.dentistrySection}>
      <div className={styles.container}>
        {/* Imagem esquerda */}
        <div className={styles.imageSide}>
          <img src={sorrisoImg} alt="Sorriso" className={styles.sorrisoImage} />
        </div>

        {/* Textos direita */}
        <div className={styles.textSide}>
          <h2 className={styles.title}>
            O melhor da <span className={styles.highlight}>odontologia</span> <br /> em Belém
          </h2>

          <h3 className={styles.sectionSubtitle}>
            Tudo o que você precisa num só lugar
          </h3>

          <div className={styles.decorativeLine}>
            <span className={styles.line}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>

       {/* Lista com efeito acumulativo em box verde */}
<div className={styles.typingBox}>
  <h3 className={styles.boxTitle}>Especialidades</h3>
  <div className={styles.typingList}>
    {lines.map((line, index) => (
      <p key={index} className={styles.finishedLine}>
        {line}
      </p>
    ))}
    {displayText && (
      <p className={styles.currentLine}>
        {displayText}
        <span className={styles.cursor}>|</span>
      </p>
    )}
  </div>
</div>


          <p className={styles.subtitle}>
            Quer saber mais sobre nossos tratamentos?
          </p>
          <a
            href="https://wa.me/5591980254953?text=Olá, gostaria de agendar uma consulta odontológica."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.ctaButton}>Agendar Dentista</button>
          </a>
        </div>
      </div>
    </section>
  );
}
