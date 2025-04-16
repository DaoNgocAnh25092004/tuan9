import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/store/slices/counterSlice";

export default function CounterApp() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        🧩 1. Counter App
      </h2>

      <div className="bg-white rounded-full shadow-lg p-2 mb-8">
        <p className="text-4xl font-bold text-center w-24 h-24 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full">
          {count}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
        >
          -
        </button>
      </div>
    </div>
  );
}
