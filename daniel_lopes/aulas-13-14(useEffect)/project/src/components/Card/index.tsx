import { useEffect, useState } from "react";
import "./styles.css";

// PROPS => Propriedades que um componente pode receber
// PROPS -> Também podem se chamar de parâmetros.
// INTERPOLAÇÃO: Colocar um valor de uma constante ou variavel dentro do JSX.
// INTERPOLAÇÃO: <h1> {nomeVariavel} </h1>
// TEMPLATE LITERALS -> ``: Onde podemos por Js interpolado com strings.

  // USE EFECT
 

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


  // # USE EFFECT 1

  // Chamado quando o componente é montado.
  // Chamado quando um estado sofre um atualização.
  // Ele observa todas as mudanças.
  // É o menos chamado.

  // useEffect(()=>{
  //   console.log("useEffect 1 chamado.")
  // });


  // # USE EFFECT 2

  // Chamado apenas na primeira renderização (quando o componente é montado)
  // Mais utilizado para chamar APIS.
  // useEffect(()=>{
  //   console.error("useEffect 2 chamado.")
  // }, []);


  // # USE EFFECT 3
  // Chamado quando o componente é montado.
  // Esse useEfect é chamado porque ele está observando a mudança do estado follow

  // Mais utilizado
  useEffect(()=>{
    // console.warn("useEffect 3 chamado. Mudança no follow")
    console.log("Montou o componente")
    localStorage.setItem("card", "O card está aberto")
    if(follow){
      alert("Você passou a seguir mais uma pessoa.")
    }

    return ()=>{
      console.log("Desmontou o componente...")
      localStorage.removeItem("card")
    }
  }, [follow])

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
