import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction, LoaderFunction } from "@remix-run/node";

import "./tailwind.css";

import '@fontsource/pacifico';
import '@fontsource-variable/figtree'; // Supports weights 300-900
import GlobalProvider from "./components/providers/GlobalProvider";

// Import rootAuthLoader
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from "@clerk/remix";
import TopBar from "./components/TopBar";

export const meta: MetaFunction = () => ([{
  charset: "utf-8",
  title: "Week Planner",
  viewport: "width=device-width,initial-scale=1",
}]);


export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Export as the root route loader
export const loader: LoaderFunction = (args) => rootAuthLoader(args);


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="relative">
        <GlobalProvider>
          {children}
        </GlobalProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return (
    <div className="font-figtree text-sm">
      <TopBar />
      <div className="lg:mx-auto max-w-[1300px]">
        <Outlet />
      </div>
    </div>
  );
}

export default ClerkApp(App)