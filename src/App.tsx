import React, { FC, ReactElement } from "react";
import Layout from "./components/Layout";

const App: FC = (): ReactElement => {
  return (
    <>
      <div className="App">
        <Layout />
      </div>
    </>
  );
};

export default App;
