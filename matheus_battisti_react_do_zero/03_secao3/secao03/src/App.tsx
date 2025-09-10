import "./App.css";

import City from "./assets/city.jpg";
import ListRender from "./components/hooks/ListRender";
import { ManageData } from "./components/hooks/ManageData";
import PreviusState from "./components/hooks/PreviusState";
function App() {
  return (
    <>
      <div>
        <h1>Seção 03</h1>
      </div>
      <div>
        {/* Imagem em Public */}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      <div>
        {/* Imagem em Assets */}
        <img src={City} alt="Cidade" />
      </div>

      <div>
        <ManageData></ManageData>
      </div>

      <div>
        <ListRender></ListRender>
      </div>

      <div>
        <PreviusState></PreviusState>
      </div>
    </>
  );
}

{
  /* A diferença entre em Pub e Assets é que em logo se colocam imagens que dificilmente irão mudar, como uma logo. */
}

export default App;
