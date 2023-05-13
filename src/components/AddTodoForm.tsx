import React, { useState } from "react";
import { TodoItem } from "../models/Todo";
import { uuid } from "uuidv4";

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
      className="flex xl:gap-4 lg:gap-3 md:gap-2 gap-1 items-center justify-center self-stretch xl:mx-40 lg:mx-28 md:mx-16 sm:mx-12 mx-8 "
    >
      <label htmlFor="todo-input" className="font-merri md:text-base text-sm">
        Add todos!
      </label>
      <input
        id="todo-input"
        type="text"
        placeholder="Do something...."
        className="grow rounded-xl  p-4"
        value={todo}
        onChange={inputChangeHandler}
      />
      <button
        disabled={todo === ""}
        className="font-merri bg-white p-4 rounded-xl md:text-base text-sm hover:bg-black hover:text-white"
      >
        Add!
      </button>
    </form>
  );
}

export default AddTodoForm;
