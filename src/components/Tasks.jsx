import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

//aqui eu crio o componente Tasks, que recebe as tarefas e a função onTaskClick como props
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate(); //aqui eu crio a função navigate, que é responsável por navegar para a página de tarefas, passando o título e a descrição da tarefa como parâmetros na URL
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams(); //aqui eu crio a query string, que é responsável por passar o título e a descrição da tarefa como parâmetros na URL
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`); //aqui eu navego para a página de tarefas, passando a query string como parâmetro na URL
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
      {tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            onClick={() => onTaskClick(task.id)} //aqui eu passo a função onTaskClick para o componente Tasks, para que ele possa
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted ? "line-through" : ""}`}
          >
            {task.title}
          </button>

          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2   rounded-md ml-2 text-white"
          >
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2   rounded-md ml-2 text-white"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
