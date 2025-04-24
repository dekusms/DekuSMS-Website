import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Loading from './components/Loading';
import './i18n';

const Home = lazy(() => import('./pages/Home'));
const Enterprise = lazy(() => import('./pages/Enterprise'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function isAuthenticated() {
  const user = localStorage.getItem("user");
  return !!user;
}

function MainLayout() {
  const location = useLocation();
  const path = location.pathname;

  const hideGlobalNavbar =
    path.startsWith("/enterprise") ||
    path === "/login" ||
    path === "/signup";

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise/*" element={<Enterprise />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
