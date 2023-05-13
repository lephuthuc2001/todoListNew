import TodoList from "./components/TodoList";

function App(): JSX.Element {
  const defaultLayout = "min-h-screen ";
  const xl = "xl:grid xl:grid-cols-12 xl:mx-20 xl:gap-x-8 ";
  const lg = "lg:grid lg:grid-cols-10 lg:mx-12 lg:gap-x-6 ";
  const md = "md:grid md:grid-cols-8 md:mx-6 md:gap-x-4 ";
  const sm = "sm:grid sm:grid-cols-8 sm:mx-2 sm:gap-x-2 ";
  const normal = "grid grid-cols-4 mx-1 gap-x-1 ";
  const app: JSX.Element = <div>Hello</div>;
  return (
    <div className={defaultLayout + xl + lg + md + sm + normal}>
      <TodoList />
    </div>
  );
}

export default App;
