import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, Welcome, Footer, Transactions, Loader } from "./component";

const App = () => {
  return (
    <div className="min-h-screen gradient-bg-welcome">
      <div className="">
        <Header />
        <Welcome />
      </div>
      {/* <Transactions /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
