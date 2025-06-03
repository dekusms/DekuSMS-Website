import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from './components/Loading';
import './i18n';
import Download from "./pages/Download";

const Home = lazy(() => import('./pages/Home'));
const Enterprise = lazy(() => import('./pages/Enterprise'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const rtlLangs = ['fa', 'ar'];
    const isRTL = rtlLangs.includes(i18n.language);
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.body.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.classList.toggle("rtl", isRTL);
    document.documentElement.classList.toggle("ltr", !isRTL);
  }, [i18n.language]);

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/download" element={<Download />} />
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
