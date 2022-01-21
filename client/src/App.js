import "./App.css";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <div className="bg" />
      <nav>
        <ul>
          <li>Login</li>
        </ul>
      </nav>
      <img src="/logo.png" className="logo" alt="Femme Bass Mafia" />
      <Hero />
      <div className="content">
        <h1>Femme Bass Mafia</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          facilisis tortor faucibus ex ultrices, a lobortis risus lobortis.
          elit.
        </p>
        <button>View</button>
        <h2>Roboto Typeface</h2>
        <p>
          Femme Bass Mafia (FBM) is a mentorship program dedicated to women,
          transgender and non-binary people for the learning and practising of
          DJing.
        </p>
        <h3>Femme Bass Mafia</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          facilisis tortor faucibus ex ultrices, a lobortis risus lobortis.
          elit.
        </p>
        <h4>Femme Bass Mafia</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          facilisis tortor faucibus ex ultrices, a lobortis risus lobortis.
          elit.
        </p>
        <h5>Kontakt</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          facilisis tortor faucibus ex ultrices, a lobortis risus lobortis.
          elit.
        </p>
      </div>
    </>
  );
}

export default App;
