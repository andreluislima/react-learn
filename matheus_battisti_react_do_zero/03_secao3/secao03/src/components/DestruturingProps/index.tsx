export function DestruturingProps({brand, km, color}){

  return(
    <>
      <h2>Detalhes do Carro</h2>
      <u>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </u>
    </>
  )
}