import React, { useState } from "react";
import classNames from "classnames";
import { QrReader } from "react-qr-reader";

const Reader = ({ className }) => {
  const [data, setData] = useState("No result");

  return (
    <div className={classNames("flex flex-col gap-4", className)}>
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
      <p className="text-center break-normal w-full">{data}</p>
    </div>
  );
};

export default Reader;
