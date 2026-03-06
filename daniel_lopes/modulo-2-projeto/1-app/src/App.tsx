import "./App.css";

function App() {
  return (
    <div className="container-app">
      <div className="container-app__header">
        <div className="container-app__mask" />

        <h1>TAREFAS</h1>
        <input type="text" placeholder="Criar nova tarefa" />
      </div>
      <div className="container_tasks">
        <ul className="content-tasks">
          <div>
            <li className="task-item">
              {" "}
              <input type="checkbox" name="" id="" />
              Tarefa 1
            </li>
          </div>

          <li className="content-tasks__actions">
            <div>
              <a href="">5 itens restantes</a>
            </div>
            <div>
              <a href="">Todas</a>
              <a href="">Ativas</a>
              <a href="">Completadas</a>
            </div>
            <div>
              <a href="">Limpar Completadas</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
