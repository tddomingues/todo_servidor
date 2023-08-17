import { useMethods } from "../../hooks/useMethods";
import {
  Container,
  Box,
  List,
  Title,
  Item,
  IconText,
  EditDelete,
  TaskField,
  TaskFieldEdit,
} from "./Home.style";

import {
  AiFillDelete,
  AiFillEdit,
  AiFillCheckSquare,
  AiTwotoneCheckSquare,
} from "react-icons/ai";

import { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [currentTask, setCurrentTask] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [activeEdit, setActiveEdit] = useState(false);
  const [id, setId] = useState(false);

  const { addItem, items, deleted, editStateCheck, edit } = useMethods();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task === "") {
      return;
    }

    const item = {
      task: task,
      done: false,
    };

    addItem(item);
    setTask("");
  };

  const handleDeleted = (id) => {
    deleted(id);
  };

  const handleCheck = (id) => {
    const itemFind = items.find((i) => {
      return i.id === id;
    });

    const itemCheck = {
      ...itemFind,
      done: !itemFind.done,
    };

    editStateCheck(id, itemCheck);
  };

  //ativa o input edit e pega o id para armazenar da task selecionada
  const enableEditing = (id, task) => {
    setId(id);
    setCurrentTask(task);
    setActiveEdit(true);
  };

  //faz a atualização da task
  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    if (editedTask === "") {
      const editTask = {
        task: currentTask,
      };

      await edit(id, editTask);

      setEditedTask("");
      setActiveEdit(false);
    } else {
      const editTask = {
        task: editedTask,
      };

      await edit(id, editTask);

      setEditedTask("");
      setActiveEdit(false);
    }
  };

  return (
    <Container>
      <Box>
        <Title>
          <h1>To - Do List</h1>
        </Title>
        {!activeEdit && (
          <TaskField>
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                  placeholder="Digite uma tarefa..."
                />
              </label>
              <button>+</button>
            </form>
          </TaskField>
        )}
        {activeEdit && (
          <TaskFieldEdit>
            <form onSubmit={handleSubmitEdit}>
              <label id="editTask">
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setEditedTask(e.target.value)}
                  value={editedTask}
                  placeholder={currentTask}
                />
              </label>
              <button>
                <AiFillEdit />
              </button>
            </form>
          </TaskFieldEdit>
        )}

        <List>
          {items &&
            items.map((item) => (
              <Item key={item.id}>
                <IconText>
                  <button onClick={() => handleCheck(item.id)}>
                    {item.done ? (
                      <AiFillCheckSquare style={{ color: "#0a996f" }} />
                    ) : (
                      <AiTwotoneCheckSquare style={{ color: "#fcfdff" }} />
                    )}
                  </button>

                  <p
                    style={
                      item.done
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                    }
                  >
                    {item.task}
                  </p>
                </IconText>
                <EditDelete>
                  {}
                  <button
                    onClick={() => enableEditing(item.id, item.task)}
                    style={
                      activeEdit === true
                        ? { visibility: "hidden" }
                        : { visibility: "visible" }
                    }
                  >
                    <AiFillEdit style={{ color: "#2c9fa3" }} />
                  </button>

                  <button
                    onClick={() => handleDeleted(item.id)}
                    style={
                      activeEdit === true
                        ? { visibility: "hidden" }
                        : { display: "visible" }
                    }
                  >
                    <AiFillDelete style={{ color: "#e6324b" }} />
                  </button>
                </EditDelete>
              </Item>
            ))}
        </List>
      </Box>
    </Container>
  );
};

export default Home;
