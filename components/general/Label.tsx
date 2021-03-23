import * as React from "react";

interface ILabelProps {}

const colors: string[] = [
  "bg-green-400 hover:bg-green-500",
  "bg-blue-400 hover:bg-blue-500",
  "bg-purple-400 hover:bg-purple-500",
  "bg-red-400 hover:bg-red-500",
  "bg-yellow-400 hover:bg-yellow-500",
];

const Label: React.FunctionComponent<ILabelProps> = ({ children }) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div
      className={`inline-block rounded-full text-white duration-300 text-xs font-bold px-2 md:px-4 py-1 opacity-90 hover:opacity-100 capitalize ${color}`}
    >
      {children}
    </div>
  );
};
export default Label;
