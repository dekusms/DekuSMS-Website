import React, { useState, useEffect } from "react";
import Loading from "../components/Loader";
import { Helmet } from "react-helmet";

const MyPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("This is your loaded content!");
    }, 2000);
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>My Page Loaded</title>
        <meta name="description" content="Page content fully loaded." />
      </Helmet>

      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>{data}</h1>
        <p>Now your content and meta tags show together after loading.</p>
      </div>
    </>
  );
};

export default MyPage;
