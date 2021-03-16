import * as React from "react";

// Modified Tailwind component from https://tailwindcomponents.com/component/switch

const ThemeToggle: React.FunctionComponent = () => {
  const [toggleActive, setToggleActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    const htmlElement: HTMLBaseElement = (document.querySelector(
      "html"
    ) as unknown) as HTMLBaseElement;
    if (toggleActive) htmlElement.classList.add("dark");
    else htmlElement.classList.remove("dark");
  }, [toggleActive]);

  return (
    <div className="flex justify-center items-center absolute top-6 right-6">
      <span className="">
        <svg
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </span>
      <div
        className={`w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1 cursor-pointer transition-color ${
          toggleActive && `bg-gray-700`
        }`}
        onClick={() => setToggleActive((current) => !current)}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
            toggleActive && `translate-x-7`
          }`}
        ></div>
      </div>
      <span className="">
        <svg
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </span>
    </div>
  );
};

export default ThemeToggle;
