import CounterWithRedux from "./Components/CounterWithRedux";
import CounterWithReduxToolkit from "./Components/CounterWithReduxToolkit";
import CounterWithUseReducer from "./Components/CounterWithUseReducer";

function App() {
  return (
    <div className="container mx-auto py-10 px-4 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Ba cách triển khai Counter
      </h1>
      <CounterWithUseReducer />
      <CounterWithRedux />
      <CounterWithReduxToolkit />
    </div>
  );
}

export default App;
