import React, { useState } from "react";

export function TestButton(props) {
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
          I Frame Button
        </button>
        <button onClick={() => RedirectClick()}> Redirect Button</button>
        {iframeOpen && (
          <div>
            <iframe
              title="MyIFrame"
              width="600"
              height="400"
              src="https://www.example.com"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </>
  );
}
