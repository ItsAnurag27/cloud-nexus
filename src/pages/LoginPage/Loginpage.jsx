import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, token } = useAuth();
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URI}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const bearerToken = `Bearer ${data.token}`;

        // Update AuthContext and LocalStorage
        login(bearerToken);

        alert("Logged in successfully!");
        navigate("/dashboard");
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold !text-gray-800 mb-6">Login Page</h1>

      <form
        onSubmit={handleLogin}
        className="w-80 p-8 bg-white rounded-lg shadow-lg relative"
      >
        <div className="mb-4 flex items-center bg-gray-50 p-3 rounded-lg">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6 flex items-center bg-gray-50 p-3 rounded-lg">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
