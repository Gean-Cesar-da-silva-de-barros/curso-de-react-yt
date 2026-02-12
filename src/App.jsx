import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
function App() {
  //aqui eu crio o estado das tarefas, que é um array de objetos, onde cada objeto representa uma tarefa
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      //chamar API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        },
      );

      //PEGAR OS DADOS QUE ELA RETORNA
      const data = await response.json();
      // ARMAZENAR/PERSISTIR ESSES DADOS NO STATE
      setTasks(data);
    };
    // se quiser, pode chamar uma API para pegar as tarefas
    //fetchTasks();
  }, []);

  //essa função é responsável por atualizar o estado das tarefas
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //não precisa atualizar essa tarefa
      return task;
    });
    setTasks(newTasks); //atualizo o estado das tarefas com a nova lista de tarefas, que contém a tarefa atualizada
  }

  //function para deletar uma tarefa, que recebe o id da tarefa como parâmetro e atualiza o estado das tarefas removendo a tarefa com o id correspondente
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId); //vou manter na lista todas as tarefas que tenha o id diferente da tarefa que estou tentando deletar
    setTasks(newTasks); //atualizo o estado das tarefas com a nova lista de tarefas, que não contém mais a tarefa deletada
  }

  //aqui eu passo a função onTaskClick para o componente Tasks, para que ele possa
  // chamar essa função quando uma tarefa for clicada

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
