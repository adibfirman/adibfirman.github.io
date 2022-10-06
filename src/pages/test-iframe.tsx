import { useEffect, useState } from "react";

const TestIframe = () => {
  const [state, setState] = useState({ imgURL: "" });

  useEffect(() => {
    const parentWindow = window.parent;
    const getData = parentWindow.document.getElementById("tkpd-ta-products-123")?.textContent;
    const parsing = JSON.parse(String(getData || ""));
    console.log("parsing:", parsing);

    setState(parsing);
  }, []);

  return <img src={state.imgURL} />;
};

export default TestIframe;
