import React from "react";

function TodoList(): JSX.Element {
  const xl = "xl:col-start-4 xl:col-end-10 ";
  const lg = "lg:col-start-3 lg:col-end-9 ";
  const sm = "sm:col-start-2 sm:col-end-8 ";
  const normal = "col-span-4 ";
  return <div className={normal + sm + lg + xl + "bg-black"}>Hello</div>;
}

export default TodoList;
