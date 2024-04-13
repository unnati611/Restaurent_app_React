import React, { useState } from "react";
import DATA from "../utils/restaurentdata.json";
const imgData = [
  "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28cjYHqAwYISCixfEtTP938oZpYnJ1hTRuWUV4ukJ-llo692Tg4h8w7MoxSbDGbs8C7M&usqp=CAU",
];
const Aboutus = () => {
  const [index, setindex] = useState(0);
  return (
    <div className="flex  items-center flex-col w-12/12 justify-center">
      <div className="flex w-8/12">
        <button
          onClick={() => {
            if (index <= 0) {
              setindex(0);
            } else {
              setindex(index - 1);
            }
          }}
          className="font-bold text-2xl"
        >
          &lt;
        </button>
        <img
          src={imgData[index]}
          alt=""
          className="lg:w-8/12 my-4 py-4 px-1 mx-1border-y-2 sm:w-full"
        />
        <button
          onClick={() => {
            if (index >= 2) {
              setindex(0);
            } else {
              setindex(index + 1);
            }
          }}
          className="font-bold text-2xl"
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-start flex-col w-8/12">
        <div className="border-b-2">
          <h2 className="font-bold text-xl py-2 px-4">Timings:</h2>
          <h2 className="font-bold text-l py-2 px-5">
            Opening Time : {DATA.hours.open}
          </h2>
          <h2 className="font-bold text-l py-2 px-5">
            Closing Time : {DATA.hours.close}
          </h2>
        </div>
        <div className="border-b-2">
          <h2 className="font-bold text-xl py-2 px-4">Address:</h2>
          <h2 className="font-bold text-l py-2 px-5">
            {DATA.address.buildingName} {DATA.address.landmark}
            {DATA.address.area}
          </h2>
        </div>
        <div className="border-b-2">
          <h2 className="font-bold text-xl py-2 px-4">Phone:</h2>
          <h2 className="font-bold text-l py-2 px-5">{DATA.phone.general}</h2>
        </div>
        <div className="border-b-2">
          <h2 className="font-bold text-xl py-2 px-4">WhatsApp:</h2>
          <h2 className="font-bold text-l py-2 px-5">{DATA.phone.whatsapp}</h2>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
