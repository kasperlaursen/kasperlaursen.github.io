import { AppProps } from "next/dist/next-server/lib/router/router";
import Link from "next/link";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
