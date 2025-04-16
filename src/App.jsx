import { Provider } from "react-redux";
import { store } from "@/store";

import CounterApp from "./Components/CounterApp";
import CounterWithRedux from "./Components/CounterWithRedux";
import CounterWithReduxToolkit from "./Components/CounterWithReduxToolkit";
import CounterWithUseReducer from "./Components/CounterWithUseReducer";
import TodoApp from "./Components/TodoApp";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto py-10 px-4 space-y-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Ba cách triển khai Counter
        </h1>
        <CounterWithUseReducer />
        <CounterWithRedux />
        <CounterWithReduxToolkit />

        <h1 className="text-3xl font-bold text-center mb-8">
          Bài tập Redux Toolkit
        </h1>
        <CounterApp />
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
