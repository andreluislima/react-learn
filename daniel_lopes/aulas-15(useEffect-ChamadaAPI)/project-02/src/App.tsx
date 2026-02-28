import { useEffect, useState } from "react";
import "./App.css";
import type { GithubUserType } from "./types";
import EmptyImage from "../src/assets/EmptyImage.png";

function App() {
  const [user, setUser] = useState<GithubUserType | null>(null);
  const [input, setInput] = useState("");

  async function searchUser() {
    if (!input) {
      setUser(null);
      return;
    }
    const response = await fetch(
      // "https://api.github.com/users/andreluislima"
      `https://api.github.com/users/${input}`,
    );
    if (response.status > 204) {
      console.warn("Falha ao encontrar o usuario");
    }

    const data: GithubUserType = (await response.json()) as GithubUserType;
    setUser(data);
    // console.log(await response.json());
  }

  useEffect(() => {
    (async () => {
      searchUser();
    })();
  }, []);
  return (
    <>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="Busque um usuário"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <button onClick={searchUser}>Buscar</button>
        </div>

        {user ? (
          <div className="container-user">
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
        ) : (
          <div className="container">
            <img src={EmptyImage} alt="Empty" />
            <span>Nenhum usuário encontrado.</span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
