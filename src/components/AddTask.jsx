import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);

  return (
    <div className="space-y-4 p-6 bg-slate-200 flex flex-col rounded-md shadow ">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          //verificar se  o título e a descrição não estão vazios
          // se nao tiver título ou descrição, mostrar um alerta e não adicionar a tarefa
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha o título e a descrição da tarefa");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTask; //aqui eu crio o componente AddTask, que é responsável por adicionar uma nova tarefa à lista de tarefas. Ele recebe a função onAddTaskClick como prop, que é chamada quando o botão de adicionar tarefa é clicado. A função onAddTaskClick é responsável por atualizar o estado das tarefas com a nova tarefa adicionada.
