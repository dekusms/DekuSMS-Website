import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from './components/Loading';
import './i18n';
import Download from "./pages/Download";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

const Home = lazy(() => import('./pages/Home'));

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

function MainLayout() {

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
