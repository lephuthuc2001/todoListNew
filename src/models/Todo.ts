export interface TodoItem {
  id: string;
  activity: string;
  isDone: boolean;
}

export interface TodoList {
  type: "completed" | "uncompleted";
  todos: TodoItem[];
}
