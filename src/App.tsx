import Main from "./components/Main";

function App(): JSX.Element {
  const defaultLayout = "h-screen ";
  const xl = "xl:grid xl:grid-cols-12 xl:mx-20 xl:gap-x-8 xl:py-20 ";
  const lg = "lg:grid lg:grid-cols-10 lg:mx-12 lg:gap-x-6 lg:py-12 ";
  const md = "md:grid md:grid-cols-8 md:mx-6 md:gap-x-4 md:py-6 ";
  const sm = "sm:grid sm:grid-cols-8 sm:mx-2 sm:gap-x-2 sm:py-2 ";
  const normal = "grid grid-cols-4 mx-2 gap-x-1 py-2 ";
  return (
    <div className={defaultLayout + normal + xl + lg + md + sm}>
      <Main />
    </div>
  );
}

export default App;
