import React, { useState } from "react";
import data from "./data";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(id) {
    setSelected(id == selected ? null : id);
  }
  return (
    <div className="flex flex-col items-center gap-5 m-10">
    <h1 className="mx-96 font-bold text-4xl">Single Accordian</h1>
      <div>
        {data && data.length != 0 ? (
          data.map((dataItem) => (
            <div className="mb-2" key={dataItem.id}>
              <div
                className="w-96 mx-20 px-5 h-20 py-5 bg-red-700 text-white hover:cursor-pointer"
                
                onClick={() => {
                  handleSingleSelection(dataItem.id);
                }}
                
              >
                {dataItem.question} +{" "}
              </div>
              <div>
                {selected == dataItem.id ? <div className="w-96 px-5 mx-20 h-auto py-5 bg-green-700 text-white">{dataItem.answer}</div> : null}
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Accordian;
