import { useState } from "react";

export default function PreviusState() {

  const [nomes, setUsers] = useState([
    {id:1, name:"Ana", age:30},
    {id:2, name:"Luis", age:54},
    {id:3, name:"Cleusa", age:35}
  ]);

  const deleteRandom = () =>{
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>{
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  };

  return (
    <div>
      <h2>List Render</h2>
      <div>
        <ul>
          {nomes.map((user)=>(
            <li>{user.id} - {user.name} - {user.age}</li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
      </div>
    </div>
  );
}
