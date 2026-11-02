import Ticker from "./components/Ticker";
import Construction from "./components/Construction";
import Facts from "./components/Facts";
import CodeSample from "./components/CodeSample";
import VisitCounter from "./components/VisitCounter";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <div className="page">
      <Ticker />

      <h1>Hej, Emil!</h1>
      <p className="welcome">
        <span className="blink"><b>NYTT!</b></span> Det här är en artefakt. Du tittar på en just nu.
      </p>

      <Construction />

      <hr />

      <h2>Vad är en artefakt?</h2>
      <p><b>En webbsida som Claude bygger och publicerar åt dig.</b></p>
      <p>
        När ett svar blir tydligare som en sida än som text i terminalen skriver Claude en HTML-fil och
        publicerar den på claude.ai. Resultatet är en riktig webbsida med egen länk. Den kan vara en
        rapport, ett diagram, ett verktyg, ett spel eller, som här, en hälsning.
      </p>

      <hr />

      <h2>Coola fakta</h2>
      <Facts />

      <hr />

      <h2>Så ser den här sidan ut inuti</h2>
      <CodeSample />
      <p className="small">Byggd med React, TypeScript och Vite. Publiceras automatiskt via GitHub Actions.</p>

      <hr />

      <VisitCounter />
      <Buttons />

      <footer>Gjord av Claude den 2 november 2026. &copy; Alla rättigheter förbehållna.</footer>
    </div>
  );
}
