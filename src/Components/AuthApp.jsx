import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, setUserInfo } from "@/store/slices/authSlice";
import { LogOut, User } from "lucide-react";

export default function AuthApp() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // Thay đổi state từ email sang password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Thay đổi hàm handleLogin để sử dụng password thay vì email
  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(
        login({
          id: Date.now().toString(),
          username,
          // Không lưu password vào state, chỉ lưu username
        })
      );
    }
  };

  // Thay đổi hàm handleUpdateProfile để sử dụng password thay vì email
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (username) {
      const updates = {};
      if (username) updates.username = username;
      dispatch(setUserInfo(updates));
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col p-8 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-sky-700 mb-6">
        🎯 5. Auth Management
      </h2>

      {isLoggedIn ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            {/* Thay đổi phần hiển thị thông tin người dùng đã đăng nhập */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-sky-500 rounded-full flex items-center justify-center text-white">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Welcome, {user?.username}!</h3>
                <p className="text-sm text-gray-500">Logged in successfully</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(logout())}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium text-sky-700 mb-3">Update Profile</h3>
            {/* Thay đổi form cập nhật thông tin */}
            <form onSubmit={handleUpdateProfile} className="space-y-3">
              <div>
                <label
                  htmlFor="update-username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  New Username
                </label>
                <input
                  id="update-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter new username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
              >
                Update Username
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-medium text-sky-700 mb-4">Login</h3>
          {/* Thay đổi form đăng nhập */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
