import { useState } from "react";
import "./styles.css";

// PROPS => Propriedades que um componente pode receber
// PROPS -> Também podem se chamar de parâmetros.
// INTERPOLAÇÃO: Colocar um valor de uma constante ou variavel dentro do JSX.
// INTERPOLAÇÃO: <h1> {nomeVariavel} </h1>
// TEMPLATE LITERALS -> ``: Onde podemos por Js interpolado com strings.

interface CardProps {
  imgUrl: string;
  name: string;
}

export default function Card(props: CardProps) {
  //   let follow = false;
  const [follow, setFollow] = useState(false);

  function handleFollowAndUnfollow() {
    setFollow((prevState)=> !prevState); // 'prevState' é uma convenção de nomenclatura, podia ser qualquer nome. 
  }

  return (
    <>
      <div className="card">
        <div>
          <img src={props.imgUrl} alt="Carro - Onix 2020" />
          <strong>{props.name}</strong>
        </div>
        <button onClick={handleFollowAndUnfollow} 
            className={`${follow ? "btn-follow" : "btn"}`}
        >
          {follow ? "Unfollow" : "Follow"}
        </button>
      </div>
    </>
  );
}
