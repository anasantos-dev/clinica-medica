import { useState } from "react";
import styles from "../styles/contato.module.css";
import { FaWhatsapp, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export function Contato() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mldwygnk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Erro ao enviar. Tente novamente.");
      }
    } catch {
      setStatus("Erro de conexão. Verifique sua internet.");
    }
  };

  return (
    <section id="contato" className={styles.contatoSection}>
      <h2 className={styles.title}>Entre em Contato</h2>
      <p className={styles.subtitle}>
        Tire suas dúvidas, agende uma consulta ou venha nos visitar.
      </p>

      <div className={styles.grid}>
        {/* Informações */}
        <div className={styles.infoBox}>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Endereço</h3>
            <p>Rua Exemplo, 123 - Centro, Cidade/UF</p>
          </div>

          <div className={styles.infoItem}>
            <FaClock className={styles.icon} />
            <h3>Horário</h3>
            <p>Segunda a Sexta: 08h - 18h</p>
            <p>Sábado: 08h - 12h</p>
          </div>

          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <h3>E-mail</h3>
            <p>contato@clinicaexemplo.com</p>
          </div>

          <div className={styles.infoItem}>
            <FaWhatsapp className={styles.icon} />
            <h3>WhatsApp</h3>
            <a
              href="https://wa.me/5591980254953"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsLink}
            >
              Conversar Agora
            </a>
          </div>
        </div>

        {/* Formulário */}
        <form className={styles.formBox} onSubmit={handleSubmit}>
          <label>
            Nome*:
            <input name="nome" type="text" placeholder="Digite seu nome" required />
          </label>
          <label>
            E-mail*:
            <input name="email" type="email" placeholder="Digite seu e-mail" required />
          </label>
          <label>
            Telefone*:
            <input name="telefone" type="tel" placeholder="(xx) xxxxx-xxxx" required />
          </label>
          <label>
            Mensagem*:
            <textarea name="mensagem" rows={4} placeholder="Digite sua mensagem" required />
          </label>
          <button type="submit" className={styles.button}>📩 Enviar</button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>

      {/* Mapa */}
      <div className={styles.mapBox}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.000000!2d-46.656000!3d-23.550000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x000000000000000!2sCl%C3%ADnica%20Exemplo!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
