import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-col items-center p-8 rounded-xl shadow-md max-w-md mx-auto transition-colors duration-300 ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-r from-yellow-50 to-orange-50 text-gray-800"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-orange-700"
        }`}
      >
        🔁 3. Toggle Theme
      </h2>

      <div className="relative mb-8">
        <div
          className={`w-64 h-32 rounded-full p-2 flex items-center transition-colors duration-300 ${
            darkMode
              ? "bg-gray-700"
              : "bg-gradient-to-r from-yellow-300 to-orange-300"
          }`}
        >
          <div
            className={`absolute w-28 h-28 rounded-full shadow-lg transform transition-all duration-500 flex items-center justify-center ${
              darkMode
                ? "translate-x-32 bg-gray-900"
                : "translate-x-0 bg-gradient-to-r from-yellow-100 to-yellow-200"
            }`}
          >
            {darkMode ? (
              <Moon className="h-12 w-12 text-indigo-300" />
            ) : (
              <Sun className="h-12 w-12 text-yellow-600" />
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => dispatch(toggleTheme())}
        className={`px-6 py-3 font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
          darkMode
            ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-400"
            : "bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-400"
        }`}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <div className="mt-8 w-full">
        <div
          className={`p-4 rounded-lg ${
            darkMode ? "bg-gray-700" : "bg-white"
          } shadow-sm transition-colors duration-300`}
        >
          <h3
            className={`font-medium ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}
          </h3>
          <p
            className={`mt-2 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            This component demonstrates how to use Redux to manage a global
            theme state that can be accessed from any component in your
            application.
          </p>
        </div>
      </div>
    </div>
  );
}
