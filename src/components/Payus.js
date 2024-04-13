import React from "react";
import DATA from "../utils/restaurentdata.json";

const Payus = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex border items-center justify-center w-full md:w-6/12 mx-4 md:mx-80">
        <div className="p-2 m-2 flex flex-col items-center">
          <h3 className="font-bold m-2 p-4">Scan the QR code to pay</h3>
          <img src={DATA.payment.qrCode} alt="QR Code" className="w-full" />
        </div>
      </div>
      <div className="flex border items-center justify-center w-full md:w-6/12 bg-slate-300 mx-4 md:mx-80">
        <div className="p-2 m-2 flex flex-wrap justify-center">
          {DATA.payment.type.map((item, index) => {
            return (
              <div key={index} className="w-full sm:w-5/12 bg-white p-4 m-4">
                <img src={item.img} alt={item.name} className="w-36 h-36 m-2" />
                <h2 className="font-extrabold">{item.name}</h2>
                <h3>{item.link}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Payus;
