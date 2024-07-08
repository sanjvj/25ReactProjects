import React, { useState } from "react";
import data from "./data";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState(false);
  const [multiselect, setMultiselect] = useState([]);
  function handleSingleSelection(id) {
    setSelected(id == selected ? null : id);
  }
  function handeMultiSelection(id) {
    let cpymultiple = [...multiselect];
    const findIndex = cpymultiple.indexOf(id);
    if (findIndex == -1) {
      cpymultiple.push(id);
    } else {
      cpymultiple.splice(findIndex, 1);
    }

    setMultiselect(cpymultiple);
  }
  console.log(multiselect);
  return (
    <div className="flex flex-col items-center gap-5 m-10">
      <div
        onClick={() => {
          setMultiple(!multiple);
        }}
        className="bg-black text-white p-5 mx-96 font-bold text-xl hover:cursor-pointer rounded-md"
      >
        {multiple == false ? (
          <h1>Enable MultiSelection</h1>
        ) : (
          <h1>Disable MultiSelection</h1>
        )}
      </div>
      <div>
        {multiple == false ? (
          <h1>MultiSelection is disabled</h1>
        ) : (
          <h1>MultiSelection is enabled</h1>
        )}
      </div>
      <div>
        {data && data.length != 0 ? (
          data.map((dataItem) => (
            <div className="mb-2" key={dataItem.id}>
              <div
                className="w-96 mx-20 px-5 h-20 py-5 bg-red-700 text-white hover:cursor-pointer"
                onClick={
                  multiple
                    ? () => {
                        handeMultiSelection(dataItem.id);
                      }
                    : () => {
                        handleSingleSelection(dataItem.id);
                      }
                }
              >
                {dataItem.question} +{" "}
              </div>
              <div>
                {multiple
                  ? multiselect.indexOf(dataItem.id) != -1 && (
                      <div className="w-96 px-5 mx-20 h-auto py-5 bg-green-700 text-white">
                        {dataItem.answer}
                      </div>
                    )
                  : selected == dataItem.id && (
                      <div className="w-96 px-5 mx-20 h-auto py-5 bg-green-700 text-white">
                        {dataItem.answer}
                      </div>
                    )}
                {/* {selected == dataItem.id || multiselect.indexOf(dataItem.id) != -1 ? (
                  <div className="w-96 px-5 mx-20 h-auto py-5 bg-green-700 text-white">
                    {dataItem.answer}
                  </div>
                ) : null} */}
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
