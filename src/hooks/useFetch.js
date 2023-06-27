import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [tarefas, setTarefas] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  const [tarefaId, setTarefaId] = useState(null);

  const httpConfig = (tarefas, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tarefas),
      });
      setMethod("POST");
    } else if (method === "DELETE") {
        setConfig({
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        setMethod("DELETE")
        setTarefaId(tarefas)
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setTarefas(json);
    };
    fetchItems();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${tarefaId}`
        const res = await fetch(deleteUrl, config)
        const json = await res.json()
        setCallFetch(json)
      }
    };
    httpRequest()
  }, [config, method, tarefaId, url]);

  return { tarefas, httpConfig };
};
