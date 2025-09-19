import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Inicio } from './pages/Inicio';
import { Sobre } from './pages/SobreMim';
import { Tratamentos } from './pages/Tratamentos'; 
import { Avaliacoes } from './pages/Avaliacoes';
import { InformacoesUteis } from './pages/InformacoesUteis';
import { Chamada } from './pages/Chamada';
import { Contato } from './pages/Contato';


function App() {
  return (
    <div className="appContainer">
      <Header />
      <main className="mainContent">
        <section id="inicio">
          <Inicio />
        </section>

        <section id="sobre">
          <Sobre />
        </section>

        <section id="tratamentos">   
          <Tratamentos />
        </section>

         <section id="chamada">
          <Chamada />
        </section>

         <section id="avaliacoes">  
          <Avaliacoes />
        </section>

        <section id="informacoes">
          <InformacoesUteis />
        </section>  

        <section id="contato">
          <Contato />
        </section>  

      </main>
      <Footer />
    </div>
  );
}

export default App;
