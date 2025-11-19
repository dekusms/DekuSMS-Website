import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

const PageNavigator = lazy(() => import("./components/PageNavigator"));

const LoadingFallback = () => (
  <div style={{
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0F2027",
  }} />
);

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const rtlLangs = ["fa", "ar"];
    const isRTL = rtlLangs.includes(i18n.language);

    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.body.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.classList.toggle("rtl", isRTL);
    document.documentElement.classList.toggle("ltr", !isRTL);
  }, [i18n.language]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <PageNavigator />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;