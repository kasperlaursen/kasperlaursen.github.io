import * as React from "react";
import ThemeToggle from "../theme/ThemeToggle";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = ({ children }) => {
  // TODO: Add dark Theme toggle
  return (
    <>
      <ThemeToggle />
      <h1 className="text-5xl font-bold uppercase text-center mt-14 mb-5 text-gray-900 dark:text-gray-100">
        {children}
      </h1>
    </>
  );
};
export default Header;
