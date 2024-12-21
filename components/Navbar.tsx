import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";

const Navbar = () => {
  const isUserSignedIn = false; // Replace with actual auth logic

  return (
    <nav
      className={cn(
        "sticky h-16 inset-x-0 top-0 z-30 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md backdrop-blur-md transition-all"
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="convo logo"
              width={50}
              height={50}
              quality={100}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">Convo</span>
          </Link>

          {/* Links and Actions */}
          <div className="flex items-center gap-4">
            {!isUserSignedIn ? (
              <MobileNav />
            ) : (
              <Link
                className={buttonVariants({
                  size: "sm",
                  className: "sm:hidden mr-3",
                })}
                href="/dashboard"
              >
                Dashboard
              </Link>
            )}

            <div className="hidden sm:flex items-center space-x-4">
              {!isUserSignedIn ? (
                <>
                  <Link
                    href="/pricing"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className: "text-white hover:text-indigo-600",
                    })}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/sign-in"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className: "text-white hover:text-indigo-600",
                    })}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/sign-up"
                    className={buttonVariants({
                      size: "sm",
                      className: "bg-white text-indigo-600 hover:bg-indigo-100",
                    })}
                  >
                    Get started
                  </Link>
                </>
              ) : (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",
                    className: "text-white hover:text-indigo-200",
                  })}
                >
                  Dashboard
                </Link>
              )}
            </div>

            {/* User Avatar */}
            {isUserSignedIn && (
              <div className="relative">
                <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white shadow-lg cursor-pointer hover:ring-2 hover:ring-indigo-200">
                  {/* Mockup user avatar */}
                </div>
                {/* Dropdown Mockup */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-sm hidden group-hover:block">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <Link
                    href="/logout"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
