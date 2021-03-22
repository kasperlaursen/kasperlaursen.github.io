import Link from "next/link";
import * as React from "react";
import { RiGithubLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import ThemeToggle from "../theme/ThemeToggle";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <>
      <ThemeToggle />
      <div className="flex flex-col sm:flex-row mt-12 mb-0 sm:mb-6 space-x-6 items-center border-gray-200 dark:border-gray-700 pb-6">
        <img
          src="/pic.jpeg"
          alt="Image of Kasper"
          className="rounded shadow h-32"
        />
        <div className="space-y-3 m-4 sm:m-0">
          <Link href="/">
            <a>
              <h1 className="text-4xl font-black items-stretch text-gray-900 dark:text-gray-100">
                Hi! I'm Kasper Laursen 👋
              </h1>
            </a>
          </Link>
          <p>On this site I posts about whatever interests me.</p>
          <div className="flex space-x-4 text-3xl justify-center sm:justify-start">
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
      <div className="rounded-full p-2 bg-white dark:bg-gray-700 opacity-90 hover:bg-green-500 dark:hover:bg-green-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-300">
        {children}
      </div>
    </a>
  );
};

export default Header;
