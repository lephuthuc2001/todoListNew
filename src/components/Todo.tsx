import { useContext } from "react";
import type { TodoItem } from "../models/Todo";
import CheckIcon from "./Icons/CheckIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import UnCheckIcon from "./Icons/UnCheckIcon";
import _ from "lodash";
import { TodoContext, TodoHandler } from "./Main";

function Todo({ todoItem }: { todoItem: TodoItem }): JSX.Element {
  const todoHandler = useContext(TodoContext)!;
  return (
    <li className="flex flex-row justify-between">
      <div className="font-merri xl:text-base lg:text-sm text-xs">
        {_.startCase(todoItem.activity)}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            if (todoItem.isDone) {
              todoHandler.checkTodoHandler(todoItem.id, false);
            } else {
              todoHandler.checkTodoHandler(todoItem.id, true);
            }
          }}
        >
          {todoItem.isDone ? (
            <UnCheckIcon className="w-7 h-7 stroke-blue-600 stroke-2" />
          ) : (
            <CheckIcon className="w-6 h-6 stroke-green-800 stroke-2" />
          )}
        </button>
        <button
          onClick={() => {
            todoHandler.removeTodoHandler(todoItem.id);
          }}
        >
          <DeleteIcon className="w-6 h-6 stroke-red-600 stroke-2" />
        </button>
      </div>
    </li>
  );
}

export default Todo;
