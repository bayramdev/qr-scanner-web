import React from "react";
import Reader from "./Reader";
import SourceReference from "./SourceReference";

const App = () => {
  return (
    <div className="w-full h-full flex flex-col items-center pt-4 gap-8">
      <h1 className="text-xl">QR Code Scanner React.js App</h1>
      <Reader width="75vmin" />
      <SourceReference />
    </div>
  );
};

export default App;
