import { useState } from "react";
import "./App.css";
import type { TaskType } from "./types/TaskTypes";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>([

    {
      id: "1",
      title: "Estudar React",
      done: true,
    },

    {
      id: "2",
      title: "Estudar Java",
      done: false,
    },
  ]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>){
    if(input.length && event.key === "Enter"){
      setTasks([...tasks, {id:"5", done:false, title:input}])
      setInput("")
     }
  }

  return (
    <div className="container-app">

      <div className="container-app__header">
        <div className="container-app__mask" />

        <h1>TAREFAS</h1>
        <input type="text" placeholder="Criar nova tarefa"
          value={input}
          onChange={(event)=> setInput(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>


      <div className="container_tasks">
        <ul className="content-tasks">
          <div>
            {tasks.map((t) => (
              <li
                className={`task-item ${t.done ? "task-item__done" : ""}`}
                key={t.id}
              >
                <input type="checkbox" checked={t.done} />
                {t.title}
              </li>
            ))}
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
