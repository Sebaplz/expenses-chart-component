import * as React from "react";

const Logo = (props) => (
  <svg width={72} height={48} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle fill="#382314" cx={48} cy={24} r={24} />
      <circle stroke="#FFF" strokeWidth={2} cx={24} cy={24} r={23} />
    </g>
  </svg>
);

export default Logo;
