import "./App.css";
import { Footer } from "./components/Hero/Footer";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="bg" />
      <nav>
        <ul>
          <li>Mixes</li>
          <li>Mentors</li>
          <li className="loginBtn">Login</li>
        </ul>
      </nav>
      <img src="/logo.png" className="logo" alt="Femme Bass Mafia" />
      <Hero />
      <div className="content">
        <h2>Roboto Typeface</h2>
        <p>
          FemmeBassMafia is a mentorship program dedicated to women, transgender
          and non-binary people for the learning and practising of DJing.
        </p>
        <h3>Femme Bass Mafia</h3>
        <h4>Femme Bass Mafia</h4>
        <h5>Kontakt</h5>
        <button>more</button>
      </div>
      <Footer />
    </>
  );
}

export default App;
