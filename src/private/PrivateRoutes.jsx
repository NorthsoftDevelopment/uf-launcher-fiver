import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isAuthenticated, children }) => {

  if (!isAuthenticated) {

    console.log('no estas logeado')

    return <Navigate to='/login' />



  } else {

    console.log('Estas logeado')

    return children;
  }
}
