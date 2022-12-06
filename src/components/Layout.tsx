import React, { FC, ReactElement, SyntheticEvent, useState } from "react";
import "./Layout.css";
import logo from "../assets/shidoon-light.jpg";
import Output from "./Output";

const Layout: FC = (): ReactElement => {
  let [input, setInput] = useState<string>("0");
  let [result, setResult] = useState<string>("");

  const handleClick = (event: SyntheticEvent): void => {
    const valueReceived = event.target as HTMLInputElement;

    if (valueReceived.value === "=") {
      if (input !== "") {
        let res = "";
        try {
          res = eval(input);
        } catch (err) {
          setResult("Math Error");
        }

        if (res === undefined) {
          setResult("Math Error");
        } else {
          setResult(input + " = ");
          setInput(res);
        }
      }
    } else if (valueReceived.value === "C") {
      setResult("");
      setInput("0");
    } else if (valueReceived.value === "DEL") {
      let str = input;
      str = str.substr(0, str.length - 1);
      setInput(str);
    } else if (input === "0") {
      setInput(valueReceived.value);
    } else {
      setInput((input += valueReceived.value));
    }
  };

  return (
    <div className="frame">
      <div className="calculator">
        <Output user={input} answer={result} />

        <img
          src={logo}
          width="80px"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            height: "80px",
            width: "210px",
            paddingTop: "0px",
            borderRadius: "8px"
          }}
          alt={""}
        />

        <div className="keys">
          <input
            type="button"
            value={"C"}
            className="button clear"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"DEL"}
            className="button clear"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"%"}
            className="button operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"/"}
            className="button operator"
            onClick={handleClick}
          />

          <input
            type="button"
            value={"7"}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"8"}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"9"}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"*"}
            className="button operator"
            onClick={handleClick}
          />

          <input
            type="button"
            value={"4"}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"5"}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"6"}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"-"}
            className="button operator"
            onClick={handleClick}
          />

          <input
            type="button"
            value={"1"}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"2"}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"3"}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"+"}
            className="button operator"
            onClick={handleClick}
          />

          <input
            type="button"
            value={"0"}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"."}
            className="button "
            onClick={handleClick}
          />
          <input
            type="button"
            value={"="}
            className="button operator equal-sign"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
