import { useState } from "react";
import "./App.css";
import type { TaskType } from "./types/TaskTypes";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "usehooks-ts";
import Empty from "./components/Empty/Empty";
 
function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useLocalStorage<TaskType[]>("tasks-list", []);
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all");
  const pendingTasksQtd = tasks.filter((tasks) => !tasks.done).length;

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (input.length && event.key === "Enter") {
      setTasks([...tasks, { id: uuidv4(), done: false, title: input }]);
      setInput("");
    }
  }

  function handleTaskToggle(id: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function filteredTasks() {
    switch (filter) {
      case "all":
        return tasks;

      case "done":
        return tasks.filter((task) => task.done);

      case "pending":
        return tasks.filter((task) => !task.done);

      default:
        return tasks;
    }
  }

  function handleUncheckedAllCompletedTasks() {
    setTasks((prevState) =>
      prevState.map((task) => (task.done ? { ...task, done: false } : task)),
    );
  }

  return (
    <div className="container-app">
      <div className="container-app__header">
        <div className="container-app__mask" />

        <h1>TAREFAS</h1>
        <input
          type="text"
          placeholder="Criar nova tarefa"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="container_tasks">
        <ul className="content-tasks">
          <div>
            {filteredTasks().map((t) => (
              <li
                className={`task-item ${t.done ? "task-item__done" : ""}`}
                key={t.id}
              >
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => handleTaskToggle(t.id)}
                />
                {t.title}
              </li>
            ))}

            {!filteredTasks().length && <Empty/>}
          </div>

          <li className="content-tasks__actions">
            <div>
              <a href="#">{pendingTasksQtd} itens restantes</a>
            </div>
            <div>
              <a href="#" onClick={() => setFilter("all")}>
                Todas
              </a>
              <a href="#" onClick={() => setFilter("pending")}>
                Ativas
              </a>
              <a href="#" onClick={() => setFilter("done")}>
                Completadas
              </a>
            </div>
            <div>
              <a href="#" onClick={handleUncheckedAllCompletedTasks}>
                Limpar Completadas
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
