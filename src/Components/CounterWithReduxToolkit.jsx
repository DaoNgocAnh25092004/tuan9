import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

// Tạo slice với Redux Toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Tạo store
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Component Counter
function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-amber-700 mb-6">
        Cách 3: Sử dụng Redux Toolkit
      </h2>

      <div className="bg-white rounded-full shadow-lg p-2 mb-8">
        <p className="text-4xl font-bold text-center w-24 h-24 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full">
          {count}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-3 bg-amber-600 text-white font-bold rounded-full shadow-lg hover:bg-amber-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
        >
          -
        </button>
      </div>

      <hr className="w-full my-8 border-gray-200" />
    </div>
  );
}

// Wrapper component với Provider
function CounterWithReduxToolkit() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default CounterWithReduxToolkit;
