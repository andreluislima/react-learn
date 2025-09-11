import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import { ConditionalRender } from "./components/hooks/ConditionalRender";
import ListRender from "./components/hooks/ListRender";
import { ManageData } from "./components/hooks/ManageData";
import PreviusState from "./components/hooks/PreviusState";
import { ShowUserName } from "./props/ShowUserName";

function App() {

  // const name = "André"
  const userName1 = useState("Antônia")
  console.log("Username1" + userName1)
  /*
  O useState sempre retorna um array com 2 itens:
  O valor atual do estado
  A função que atualiza esse valor
  Resultado: Username1Antônia,function () { [native code] }

  */
  

  const [userName2] = useState("Antônia")
  console.log("Username2" + userName2)

  /*
  Desestruturação
  Em vez de acessar manualmente resultado[0] e resultado[1], usamos a desestruturação de array:
  Por que precisa das chaves []?
  Porque o useState retorna um array, e estamos dizendo:
  “pegue o primeiro item desse array e guarde em userName, o segundo em setUserName”.

  */


  return (    
    <>
      <div>
        <h1>Seção 03</h1>
      </div>
      <div className="content">
        {/* Imagem em Public */}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <hr />
      <div className="content">
        {/* Imagem em Assets */}
        <img src={City} alt="Cidade" />
      </div>
      <hr />
      <div className="content">
        <ManageData></ManageData>
      </div>
      <hr />
      <div className="content">
        <ListRender></ListRender>
      </div>
      <hr />
      <div className="content">
        <PreviusState></PreviusState>
      </div>
      <hr />
      <div className="content">
        <ConditionalRender></ConditionalRender>
      </div>
      <hr />
      <ShowUserName name={userName1}/>
    </>
  );
}

{
  /* A diferença entre em Pub e Assets é que em logo se colocam imagens que dificilmente irão mudar, como uma logo. */
}

export default App;
