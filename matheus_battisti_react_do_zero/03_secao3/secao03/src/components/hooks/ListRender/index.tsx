import { useState } from "react";

export default function ListRender() {
  const [list] = useState(["João", "José", "Jonas"]);
  const [nomes] = useState([
    {id:1, name:"Ana", age:30},
    {id:212124, name:"Luis", age:54},
    {id:8923782, name:"Cleusa", age:35}
  ]);

  return (
    <div>
      <h2>List Render</h2>

      <div>
        <ul>
          {list.map((item, i) =>(
            <li key={i}>{item}</li>
          ))}
        </ul>
        <hr />
        <ul>
          {nomes.map((user)=>(
            <li>{user.id} - {user.name} - {user.age}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
