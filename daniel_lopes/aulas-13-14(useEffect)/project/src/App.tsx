import { useState } from "react";
import "./App.css";
import Card from "./components/Card/index";

function App() {
  const [showCards, setShowCards] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setShowCards((prevState) => !prevState)}>
        Exibir / Ocultar
      </button>
      {showCards && (
        <>
          <Card
            imgUrl="https://blog.unyleya.edu.br/wp-content/uploads/2019/07/298696-conheca-os-4-principais-tipos-de-perfis-profissionais.jpg"
            name="Clara"
          />

          <Card
            imgUrl="https://etalent.com.br/wp-content/uploads/2019/09/Harvey-Specter.jpg"
            name="Harvey"
          />
        </>
      )}
    </div>
  );
}

export default App;
