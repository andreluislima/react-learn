import EmptyImage from "../../assets/EmptyImage.png";
import "./style.css"

export function Empty() {
  return (
    <div className="container-empty">
      <img src={EmptyImage} alt="Empty" />
      <span>Nenhum usuário encontrado.</span>
    </div>
  );
}
