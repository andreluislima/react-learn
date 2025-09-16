export function ListRender() {
  
  const cars = [
    {id:1, brand:'Ferrari', color:'azul', newCar:true, km:0},
    {id:2, brand:'Mercedez', color:'black', newCar:true, km:0},
    {id:3, brand:'Toyota', color:'red', newCar:false, km:111320}
  ];
   return(
    <div>
      <h2>List Render</h2>
       <ul>
        {cars.map((car)=>(
          <li key={car.id}>
            Marca:{car.brand} | Cor:{car.color} | Carro Usado? {car.newCar? "Novo": "Usado"} | KM:{car.km}
          </li>
        ))}
       </ul>
    </div>
   )

}
