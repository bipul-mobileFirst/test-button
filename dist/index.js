"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function l(e){return n.default.createElement("iframe",{title:"MyIFrame",width:e.width?e.width:"600",height:e.height?e.height:"400",src:"https://www.example.com",allowFullScreen:!0})}exports.TestButton=function(){const[t,a]=e.useState(!1);return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",null,n.default.createElement("button",{onClick:()=>a(!t)},"IFrame Button"),n.default.createElement("button",{onClick:()=>{window.open("https://staging-internal.d1nwfechdidmfz.amplifyapp.com/","_blank")}}," Redirect Button"),t&&n.default.createElement("div",null,n.default.createElement(l,{width:"600",height:"400"}))))};
