import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const Reader = ({ width }) => {
  const [data, setData] = useState("No result");

  return (
    <div className="flex flex-col gap-4" style={{ width }}>
      <QrReader
        constraints={{ facingMode: "environment", aspectRatio: 1 }}
        onResult={(res, err) => {
          if (!!res) {
            setData(res?.text);
          }
          if (!!err) {
            console.error(err);
          }
        }}
      />
      <p className="text-center break-words w-full">{data}</p>
    </div>
  );
};

export default Reader;
