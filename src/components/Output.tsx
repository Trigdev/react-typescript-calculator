import React, { CSSProperties, FC, ReactElement } from "react";
import OutputRow from "./OutputRow";

type OutputProps = {
  answer: string;
  user: string;
};

const Output: FC<OutputProps> = ({ answer, user }): ReactElement => {
  return (
    <div>
      <OutputRow value={answer} textSize={{ fontSize: "30px" }} />
      <OutputRow value={user} />
    </div>
  );
};

export default Output;
