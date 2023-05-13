import React, { useState } from "react";
import { TodoItem } from "../models/Todo";

function AddTodoForm({
  addTodoHandler,
}: {
  addTodoHandler: (newTodo: TodoItem) => void;
}): JSX.Element {
  const [todo, setTodo] = useState<string>("");

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTodo(event.target.value);
  };
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newTodo: TodoItem = {
      id: Math.random().toString(36).substring(6),
      activity: todo,
      isDone: false,
    };
    setTodo("");
    addTodoHandler(newTodo);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex xl:gap-4 lg:gap-3 md:gap-2 gap-1 items-center justify-center self-stretch xl:mx-20 lg:mx-16 md:mx-12 sm:mx-8 "
    >
      <label htmlFor="todo-input" className="font-merri  text-sm">
        Add todos!
      </label>
      <input
        id="todo-input"
        type="text"
        placeholder="Do something...."
        className="rounded-xl p-2 lg:p-4 grow "
        value={todo}
        onChange={inputChangeHandler}
      />
      <button
        disabled={todo === ""}
        className="font-merri bg-white md:p-4 p-2  rounded-xl  text-sm hover:bg-black hover:text-white"
      >
        Add!
      </button>
    </form>
  );
}

export default AddTodoForm;
