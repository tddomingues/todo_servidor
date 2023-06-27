import { MdSend } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import "./App.css";

import { useFetch } from "./hooks/useFetch";
import { useState } from "react";

const url = "http://localhost:3000/tarefas";

function App() {
  const { tarefas, httpConfig } = useFetch(url);

  const [valorTarefa, setValorTarefa] = useState("");

  const analisarSubmit = async (e) => {
    e.preventDefault();

    if(valorTarefa !== "") {

      const novaTarefa = {
      valorTarefa,
    };

    httpConfig(novaTarefa, "POST");

    } 

    setValorTarefa("");
  };

  const analisarRemover = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <div className="titulo">
        <h1>To-Do List</h1>
      </div>

      <div className="container">
        <div className="box-form">
          <form onSubmit={analisarSubmit}>
            <label>
              <input
                type="text"
                name=""
                id=""
                value={valorTarefa}
                onChange={(e) => setValorTarefa(e.target.value)}
              />
            </label>

            <button type="submit" className="btnEnviar">
              <MdSend size={"22px"} />
            </button>
          </form>
        </div>

        <div className="box-lista">
          <ul>
            {tarefas  &&
              tarefas.map((i) => (
                <li
                  key={i.id}
                  className="tarefa-icons"
                >
                  <p>{i.valorTarefa}</p>
                  <div className="btn-list">
                    <button
                      className="btnDelete"
                      onClick={() => analisarRemover(i.id)}
                    >
                      <MdDelete size={"24px"} />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
