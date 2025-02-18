import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/remix";
import { Link, useLocation } from "@remix-run/react";

export default function TopBar() {
  const { pathname } = useLocation()
  const { isLoaded } = useUser() 

  if (pathname.startsWith("/sign")) {
    return null
  }

  return (
    <div className="w-full py-3 bg-gray-800 mb-4">
      <SignedIn>
        {(pathname !== "") && (
          <div className="lg:mx-auto max-w-[1300px] flex px-5">
            <Link to="/" className="font-pacifico text-lg">
              WP
            </Link>
            <nav className="flex-1 flex justify-center">
              <div className="flex gap-10 items-center text-base">
                <Link to="/" className="transition-transform ease-in-out hover:scale-105">Home</Link>
                <Link to="/objectives" className="transition-transform ease-in-out hover:scale-105">Objectives</Link>
                <Link to="/objectives" className="transition-transform ease-in-out hover:scale-105">Activities</Link>
              </div>
            </nav>
            {isLoaded ? (
              <UserButton />
            ) : (
              <div className="rounded-full size-[28px] bg-gray-300 animate-pulse" />
            )}
          </div>
        )}
      </SignedIn>

      <SignedOut>
        <div className="flex gap-3">
          <SignUpButton>
            <button className="dark:bg-white/10 shadow-sm px-3 py-2 text-sm rounded-lg dark:hover:bg-white/20 hover:bg-neutral-100 transition-colors ease-in duration-300 border dark:border-white/10">
              Sign up
            </button>
          </SignUpButton>
          <SignInButton>
            <button className="dark:bg-white/10 shadow-sm px-3 py-2 text-sm rounded-lg dark:hover:bg-white/20 hover:bg-neutral-100 transition-colors ease-in duration-300 border dark:border-white/10">
              Sign in
            </button>
          </SignInButton>
          
        </div>
      </SignedOut>
    </div>
  )
}
