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
        <title>DekuSMS</title>
        <meta name="description" content="Page content fully loaded." />
      </Helmet>

      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>{data}</h1>
        <p>SMS but Secure
DekuSMS is an SMS app. You can use it as a standalone app or as a Gateway client to send your incoming messages to your cloud server! You can also configure it as a listener to your RabbitMQ server and transform your device into an SMS sending machine.</p>
      </div>
    </>
  );
};

export default MyPage;
