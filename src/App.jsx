import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Image from "./components/image";
import Footer from "./components/footer";
import Side from "./components/side";
import Loading from "./components/loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isHidden, setISHidden] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=Ip6RCiaV3gTAM1vl1kEPsmpHsg7o6alHWpeCSjw5"
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      {data ? <Image data={data} /> : <Loading />}
      {data ? <Footer change={setISHidden} data={data} /> : null}
      {data ? (
        <Side change={setISHidden} isHidden={isHidden} data={data} />
      ) : null}
    </>
  );
}

export default App;
