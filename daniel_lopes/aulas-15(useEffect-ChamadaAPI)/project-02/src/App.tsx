 
 import { useEffect, useState } from 'react'
import './App.css'
import type { GithubUserType } from './types';

function App() {
 
  const [user, setUser] = useState <GithubUserType | null> (null);

  useEffect(()=>{
    (async () =>{
      const response = await fetch(
        "https://api.github.com/users/andreluislima21242"
      )
      if(response.status > 204){
        alert("Falha ao encontrar o usuario")
      }

      const data: GithubUserType = (await response.json()) as GithubUserType;
      setUser(data)
      // console.log(await response.json());
    })();
  }, [])
  return (
    <>
       <div className='container'>
        <div>
          <strong>Nome: </strong>
          <span>{user?.name}</span>
        </div>

        <div>
          <strong>Empresa: </strong>
          <span>{user?.company}</span>
        </div>

        <div>
         <img src={user?.avatar_url} alt="imagem" />
        </div>
       </div>
    </>
  )
}

export default App
