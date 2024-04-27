import { PRIMARY_COLOR } from "@assets/css/theme";
import React from "react";

const SmallPrimaryButton = (props) => {
  return (
    <button
      onClick={() => (props.onClick ? props.onClick() : {})}
      style={{
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 30,
        fontSize: 12,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      {props.children}
    </button>
  );
};

export default SmallPrimaryButton;
