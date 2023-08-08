import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ username, children }) => {

    if (username === undefined) {
        return <Navigate to="/login" />;
      } else {
        return children;
      }
}