import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  if (!localStorage.getItem('user')) return <Navigate to="/" />;

  return <Outlet />;
}

export default PrivateRoute;
