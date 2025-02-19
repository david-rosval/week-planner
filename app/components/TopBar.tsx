import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/remix";
import { Link, useLocation } from "@remix-run/react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/objectives",
    title: "Objectives"
  },
  {
    to: "/objectives",
    title: "Activities"
  },
]

export default function TopBar() {
  const { pathname } = useLocation()
  const { isLoaded } = useUser() 

  const [dropDownMenu, setDropDownMenu] = useState(false)

  function toggleDropDownMenu() {
    setDropDownMenu((dropDownMenu) => !dropDownMenu)
  }

  if (pathname.startsWith("/sign")) {
    return null
  }
  
  return (
    <div className="w-full bg-gray-800 mb-4 sticky top-0">
      <SignedIn>
        {(pathname !== "") && (
          <>
            <div className="lg:mx-auto max-w-[1300px] flex px-5 py-3">
              <Link to="/" className="font-pacifico text-lg">
                WP
              </Link>

              <nav className="flex-1 md:flex justify-center hidden">
                <div className="flex gap-10 items-center text-base">
                  {links.map((link, index) => (
                    <Link to={link.to} key={index} className="transition-transform ease-in-out hover:scale-105">{link.title}</Link>
                  ))}
                  
                </div>
              </nav>

              <div className="flex-1 md:hidden flex justify-center">
                <button onClick={toggleDropDownMenu}>
                  <Menu />
                </button>
              </div>

              {isLoaded ? (
                <UserButton />
              ) : (
                <div className="rounded-full size-[28px] bg-gray-300 animate-pulse" />
              )}
            </div>
            <AnimatePresence>
              {dropDownMenu && (
                <motion.div 
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height: "auto",
                  }}
                  exit={{
                    height: 0,
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className=" w-full absolute flex justify-center bg-gray-950/90 shadow-xl overflow-hidden"
                >
                  <div className="mx-5 w-full flex flex-col text-center z-10 gap-3 py-3 uppercase text-lg">
                    {links.map((link, index) => (
                      <>
                        <Link
                          key={index}
                          to={link.to}
                          onClick={() => setDropDownMenu(false)}
                        >
                          {link.title}
                        </Link>
                        {links.length - 1 > index && (
                          <div className="h-[1px] w-full bg-gray-600" />
                        )}
                      </>
                    ))}
                    
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>

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
