import * as React from "react";
import { RiGithubLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import ThemeToggle from "../theme/ThemeToggle";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  // TODO: Add dark Theme toggle
  return (
    <>
      <ThemeToggle />
      <div className="flex flex-col sm:flex-row my-14 space-x-6 items-center">
        <img src="/pic.jpeg" alt="Image of Kasper" className="rounded-full" />
        <div className="space-y-3">
          <h1 className="text-5xl font-bold uppercase items-stretchtext-gray-900 dark:text-gray-100">
            Kasper Laursen
          </h1>
          <p>Frontend Javascript developer from Denmark.</p>
          <div className="flex space-x-4 text-3xl">
            <LinkContainer url="https://github.com/Habberlabber">
              <RiGithubLine />
            </LinkContainer>
            <LinkContainer url="https://www.linkedin.com/in/habber/">
              <TiSocialLinkedin />
            </LinkContainer>
          </div>
        </div>
      </div>
    </>
  );
};

interface IIconLinkProps {
  url: string;
}
const LinkContainer: React.FC<IIconLinkProps> = ({ url, children }) => {
  return (
    <a href={url}>
      <div className="rounded-full p-2 bg-white dark:bg-gray-700 opacity-90 hover:opacity-100 shadow-sm hover:shadow-md transition-all duration-300">
        {children}
      </div>
    </a>
  );
};

export default Header;
