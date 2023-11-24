import React from "react";

export default function IFrame(props) {
  return (
    <iframe
      title="MyIFrame"
      width={props.width ? props.width : "600"}
      height={props.height ? props.height : "400"}
      src="https://www.example.com"
      allowFullScreen
    />
  );
}
