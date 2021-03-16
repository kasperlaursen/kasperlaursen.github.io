import * as React from "react";

interface ICardProps {
  className: string;
}

const Card: React.FunctionComponent<ICardProps> = ({ className, children }) => {
  return (
    <div
      className={`${className} w-full overflow-hidden rounded-md shadow-md bg-white dark:bg-gray-700 hover:shadow-xl transition-shadow duration-500 ease-in-out`}
    >
      {children}
    </div>
  );
};
export default Card;
