import { useState } from "react";
import "./MyForm.css";

export function MyForm({ user }) {
  // 6 - Controlled Inputs
  // 3 - Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value); // Resgatando o valor do Input
  };
  // console.log(name);
  // console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviando formulario");
    console.log(name, email, bio, role);

    // 7 - Limpar form
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <>
      {/* 5 - Envio de form */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>

          {/* 2 - Lable envolvendo o input * - Aboragem sugerida na doc do reacy*/}
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        <label>
          <span>Email</span>
          {/* 4 - Simplificacaod de manipulação do State*/}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        {/* 8 - Text Área */}
        <label>
          <span>Bio</span>
          <textarea
            name="bio"
            placeholder="Descricao do usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* 9 - Selec*/}
        <label>
          <span>Função no Sistema</span>
          <select name="" id="" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="adm">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}
