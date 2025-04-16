import { useReducer } from "react";

// Định nghĩa các loại action
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Hàm reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function CounterWithUseReducer() {
  // useReducer trả về state hiện tại và hàm dispatch để gửi action
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        Cách 1: Sử dụng useReducer
      </h2>

      <div className="bg-white rounded-full shadow-lg p-2 mb-8">
        <p className="text-4xl font-bold text-center w-24 h-24 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full">
          {state.count}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-6 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          -
        </button>
      </div>

      <hr className="w-full my-8 border-gray-200" />
    </div>
  );
}

export default CounterWithUseReducer;
