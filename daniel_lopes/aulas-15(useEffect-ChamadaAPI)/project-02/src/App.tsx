import { useEffect, useState } from "react";
import "./App.css";
import { UseCard } from "./components/UseCard";
import { Empty } from "./components/Empty";
import { Search } from "./components/Search";
import type { GithubUserType } from "./types";

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
        <Search
          handleSearchUser={searchUser}
          value={input}
          handleSetValue={setInput}
        />

        {user ? <UseCard user={user} /> : <Empty />}
      </div>
    </>
  );
}

export default App;
