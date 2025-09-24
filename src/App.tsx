import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuemSomos } from './pages/quemSomos';
import { Avaliacoes } from './pages/Avaliacoes';
import { Atendimentos } from './pages/Atendimentos';
import { Chamada } from './pages/Chamada';
import { Contato } from './pages/Contato';
import { Especialidades } from './pages/Especialidades';



function App() {
  return (
    <div className="appContainer">
      <Header />
      <main className="mainContent">
        <section id="quem somos">
          <QuemSomos />
        </section>     

          <section id="chamada">
          <Chamada />
        </section>

        <section id="especialidades">   
          <Especialidades />
        </section> 

        <section id="atendimentos">
          <Atendimentos />
        </section>       

         <section id="avaliacoes">  
          <Avaliacoes />
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
