import { useState } from "react"

export function ConditionalRender(){
  
  const [x] = useState(true)
  let [nome] = useState("Ana")

  return(
    // 1. Adicionando um If.
    // Renderização condicional com &&
    <div>
      <h1>'X' será exibido?</h1>

      {x && <p>'X' é True</p>}    
      {!x && <p>'X' é False</p>}    
      
      <h2>If Ternário</h2>
      {
        nome === "João"?(
          <div>
            O nome é João
          </div>
        ):(
          <div>
            <p>O nome não é João é: {nome}</p>
          </div>
        )
      }
    </div>

    // 2. Adicionando um else.

  )
}