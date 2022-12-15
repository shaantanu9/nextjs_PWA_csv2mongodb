//import {useState, useEffect,useRef} from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Navbar = (props) => {
  const [login, setLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    }
  }, [login]);

  return (
    <>
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link className="block text-blog" href="/">
            <span className="sr-only">Home</span>
            <p className="text-2xl font-bold text-blog hover:text-blog/75 ">
              Shodkk
            </p>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="/"
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="/tools"
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="https://shodkk.com"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="https://shantanubombatkar.shodkk.com"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {!login ? (
                  <Link
                    className="block rounded-md bg-blog px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blog/75"
                    href="/login"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    className="block rounded-md bg-blog px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blog/75"
                    onClick={() => {
                      window.localStorage.removeItem("token");
                      router.push("/");
                      setLogin(false);
                    }}
                  >
                    Logout
                  </button>
                )}

                <Link
                  className="hidden rounded-md bg-red-100 px-5 py-2.5 text-sm font-medium text-blog transition hover:text-blog/75 sm:block"
                  href="/"
                >
                  Register
                </Link>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-blog/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default React.memo(Navbar);
