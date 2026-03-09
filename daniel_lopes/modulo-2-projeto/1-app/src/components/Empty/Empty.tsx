import EmptyImage from "../../assets/empty.svg";
import "./Empty.css"


export default function Empty() {
  return(
    <div className="container-empty">
        <img src={EmptyImage} alt="empty" />
        <h3>Nenhuma tarefa cadastrada!</h3>
    </div>
  )
}
