import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <div className="container mt-5 bg-light p-5">
        <h2>Simple Counter App using useReducer Hook</h2>
        <Counter />
      </div>
      <div>
        <h2> Hello World </h2>
      </div>
    </>
  );
}

export default App;
