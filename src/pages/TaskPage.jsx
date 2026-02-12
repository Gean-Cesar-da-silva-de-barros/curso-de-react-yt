import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="aboslute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeft />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>
        <div className="p-4 bg-slate-200 rounded-md">
          <h2 className="text-xl  font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage; //aqui eu crio a página de tarefas, que é responsável por renderizar o componente Tasks e o componente AddTask. O componente Tasks é responsável por renderizar a lista de tarefas, enquanto o componente AddTask é responsável por adicionar uma nova tarefa à lista de tarefas. A página de tarefas também é responsável por gerenciar o estado das tarefas, que é um array de objetos, onde cada objeto representa uma tarefa. A página de tarefas também é responsável por atualizar o estado das tarefas quando uma tarefa é clicada ou deletada, e por adicionar uma nova tarefa quando o formulário de adicionar tarefa é submetido.
