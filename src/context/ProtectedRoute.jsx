import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { token } = useAuth();
  console.log(token);
  return token ? (
    <main className="flex-grow">
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
