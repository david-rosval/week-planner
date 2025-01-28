import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/remix";
import { useLocation } from "@remix-run/react";

export default function TopBar() {
  const { pathname } = useLocation()
  const { isLoaded } = useUser() 

  if (pathname.startsWith("/sign")) {
    return null
  }

  return (
    <div className="absolute top-0 inset-x-0 flex justify-end max-w-[1300px] w-full mx-auto py-2 px-4 ">
      <SignedIn>
        {isLoaded ? (
          <UserButton />
        ) : (
          <div className="rounded-full size-[28px] bg-gray-300 animate-pulse" />
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
