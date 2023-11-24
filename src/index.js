import React, { useState } from "react";
import IFrame from "./components/IFrame";

export function TestButton() {
  const [iframeOpen, setIframeOpen] = useState(false);
  const RedirectClick = () => {
    window.open(
      "https://staging-internal.d1nwfechdidmfz.amplifyapp.com/",
      "_blank"
    );
  };

  return (
    <>
      <div>
        <button onClick={() => setIframeOpen(!iframeOpen)}>
          IFrame Button
        </button>
        <button onClick={() => RedirectClick()}> Redirect Button</button>
        {iframeOpen && (
          <div>
            <IFrame width="600" height="400" />
          </div>
        )}
      </div>
    </>
  );
}
