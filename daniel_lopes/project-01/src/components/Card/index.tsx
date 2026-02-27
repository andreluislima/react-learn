import "./styles.css";

// PROPS => Propriedades que um componente pode receber
// PROPS -> Também podem se chamar de parâmetros.
// INTERPOLAÇÃO: Colocar um valor de uma constante ou variavel dentro do JSX.
// INTERPOLAÇÃO: <h1> {nomeVariavel} </h1>

interface CardProps{
    imgUrl: string;
    name: string;
}

export default function Card(props: CardProps) {
  return (
    <>
      <div className="card">
        <div>
          <img
            src={props.imgUrl}
            alt="Carro - Onix 2020"
          />
          <strong>{props.name}</strong>
        </div>
        <button>Follow</button>
      </div>
 
    </>
  );
}
