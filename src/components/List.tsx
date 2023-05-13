import type { TodoItem, TodoList } from "../models/Todo";
import Todo from "./Todo";
import _ from "lodash";
function List({ list }: { list: TodoList }) {
  return (
    <div className="flex flex-col xl:gap-4 lg:gap-3 md:gap-2 gap-1">
      <div className="text-center font-merri xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm font-semibold">
        {_.startCase(list.type)}
      </div>
      <ul className="px-8 grow overflow-y-scroll max-h-48 ">
        {list.todos.map((todo: TodoItem) => (
          <Todo key={todo.id} todoItem={todo} />
        ))}
      </ul>
    </div>
  );
}

export default List;
