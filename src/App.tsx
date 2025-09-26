import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { CallToAction } from './pages/CallToAction';
import { Specialties } from './pages/Specialties';
import { Appointments } from './pages/Appointments';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';
import { Dentistry } from './pages/Dentistry';



function App() {
  return (
    <div className="appContainer">
      <Header />
      <main className="mainContent">

        <section id="about-us">
          <AboutUs />
        </section>     

        <section id="call-to-action">
          <CallToAction />
        </section>

        <section id="specialties">   
          <Specialties />
        </section> 

        <section id="dentistry">
         <Dentistry />
        </section>

        <section id="appointments">
          <Appointments />
        </section>       

        <section id="reviews">  
          <Reviews />
        </section>      

        <section id="contact">
          <Contact />
        </section>  
      </main>
      <Footer />
    </div>
  );
}

export default App;
