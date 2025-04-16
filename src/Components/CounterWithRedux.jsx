import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// Định nghĩa các loại action
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Tạo store
const store = createStore(counterReducer);

// Component Counter
function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Cách 2: Sử dụng Redux
      </h2>

      <div className="bg-white rounded-full shadow-lg p-2 mb-8">
        <p className="text-4xl font-bold text-center w-24 h-24 flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full">
          {count}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-3 bg-teal-600 text-white font-bold rounded-full shadow-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
        >
          -
        </button>
      </div>

      <hr className="w-full my-8 border-gray-200" />
    </div>
  );
}

// Wrapper component với Provider
function CounterWithRedux() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default CounterWithRedux;
