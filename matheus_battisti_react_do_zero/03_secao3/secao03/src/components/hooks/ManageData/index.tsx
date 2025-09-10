import { useState } from "react";

export function ManageData() {
  let someData = 10;
  const [number, setNumber] = useState(25);
  console.log(someData)
  console.log(number)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button
          onClick={() => {
            someData = 15;
          }}
        >
          Mudar variável
        </button>
      </div>

      <div>
        <p>Valor: {number}</p>
        <button onClick={()=> setNumber(89)}>Alterar o State</button>
      </div>
    </div>
  );
}
