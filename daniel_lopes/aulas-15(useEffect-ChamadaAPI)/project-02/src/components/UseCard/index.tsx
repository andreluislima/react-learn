import type { GithubUserType } from "../../types";
import "./style.css"
 
interface IProps{
    user: GithubUserType;
}
export function UseCard({user}: IProps) {
  return (
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
  );
}
