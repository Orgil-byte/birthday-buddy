"use client";
import { useState } from "react";

const birthdaysData = [
  { id: 1, name: "Orgil", age: 18, color: "bg-sky-500" },
  { id: 2, name: "Michael", age: 29, color: "bg-red-300" },
  { id: 3, name: "Misheel", age: 25, color: "bg-gray-700" },
  { id: 4, name: "Sofia", age: 49, color: "bg-blue-400" },
  { id: 5, name: "George", age: 78, color: "bg-purple-800" },
  { id: 6, name: "Delgermaa", age: 32, color: "bg-yellow-300" },
];

export default function Page() {
  const [list, setList] = useState(birthdaysData);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-purple-300">
      <div className="bg-white w-150 h-fit flex flex-col py-[1.5em] px-[2em] gap-5">
        <BirthdaysLabel list={list} />
        <ClearAllBtn clearAll={() => setList([])} />
      </div>
    </div>
  );
}

const BirthdaysLabel = ({ list }) => (
  <div className="flex flex-col gap-7">
    <div className="text-[2em]">{list.length} Birthdays Today</div>

    <div className="flex flex-col gap-6">
      {list.map(({ id, name, age, color }) => (
        <Profiles key={id} name={name} age={age} color={color} />
      ))}
    </div>
  </div>
);

const Profiles = ({ name, age, color }) => (
  <div className="flex gap-4 items-center">
    <div className={`w-[4.7rem] h-[4.7rem] ${color} rounded-full`} />
    <div>
      <p className="text-[1.563em] font-bold">{name}</p>
      <p className="text-[#64788b]">{age} years</p>
    </div>
  </div>
);

const ClearAllBtn = ({ clearAll }) => (
  <button onClick={clearAll} className="w-134 h-8 bg-pink-600 text-white">
    Clear All
  </button>
);
