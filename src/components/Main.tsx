import { createContext, useState } from "react";
import Title from "./Title";
import Content from "./Content";
import AddTodoForm from "./AddTodoForm";
import { TodoItem } from "../models/Todo";

const xl = "xl:col-start-4 xl:col-end-10 xl:p-8 xl:gap-12 ";
const lg = "lg:col-start-3 lg:col-end-9 lg:p-7 lg:gap-10 ";
const md = "md:col-start-2 md:col-end-8 md:p-6 md:gap-8 ";
const sm = "sm:col-start-2 sm:col-end-7 sm:p-5 sm:gap-6 ";
const normal =
  "col-span-4 flex flex-col p-4 justify-center items-center gap-4 bg-slate-300 rounded-[32px] max-h-[800px] ";

const listInit = (): TodoItem[] => {
  const storedList = localStorage.getItem("list");
  if (storedList) {
    return JSON.parse(storedList);
  }
  return [];
};
export type TodoHandler = {
  removeTodoHandler: (id: string) => void;
  checkTodoHandler: (id: string, isDone: boolean) => void;
};

export const TodoContext = createContext<TodoHandler | null>(null);

function Main(): JSX.Element {
  const [list, setList] = useState<TodoItem[]>(listInit);

  const addTodoHandler = (newTodo: TodoItem): void => {
    const newList = [...list, newTodo];
    localStorage.setItem("list", JSON.stringify(newList));
    setList(newList);
  };

  const removeTodoHandler = (id: string): void => {
    const newList = list.filter((todo) => todo.id !== id);
    localStorage.setItem("list", JSON.stringify(newList));
    setList(newList);
  };

  const checkTodoHandler = (id: string, isDone: boolean): void => {
    const updatedTodo: TodoItem = list.find(
      (todo) => todo.id === id
    ) as TodoItem;
    updatedTodo.isDone = isDone;
    const newList = [...list];
    localStorage.setItem("list", JSON.stringify(newList));

    setList(newList);
  };
  return (
    <section className={normal + sm + md + lg + xl}>
      <TodoContext.Provider value={{ removeTodoHandler, checkTodoHandler }}>
        <Title />
        <Content list={list} />
        <AddTodoForm addTodoHandler={addTodoHandler} />
      </TodoContext.Provider>
    </section>
  );
}

export default Main;
