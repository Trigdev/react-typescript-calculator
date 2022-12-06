import React, { CSSProperties, FC, ReactElement } from "react";
import "./OutputRow.css";

type OutputRowProps = {
  textSize?: CSSProperties;
  value: string;
};

const OutputRow: FC<OutputRowProps> = ({ textSize, value }): ReactElement => {
  return (
    <input
      type="text"
      readOnly
      className="screen"
      style={textSize}
      value={value}
    />
  );
};

export default OutputRow;
