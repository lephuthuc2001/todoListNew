import List from "./List";
import type { TodoItem, TodoList } from "../models/Todo";

interface Props {
  list: TodoItem[];
}

function Content({ list }: Props) {
  const uncompletedList: TodoList = {
    type: "uncompleted",
    todos: list.filter((x) => !x.isDone),
  };

  const completedList: TodoList = {
    type: "completed",
    todos: list.filter((x) => x.isDone),
  };
  return (
    <section className="grow self-stretch grid gap-4 grid-rows-2 h-1/4">
      <List list={completedList} />
      <List list={uncompletedList} />
    </section>
  );
}

export default Content;
