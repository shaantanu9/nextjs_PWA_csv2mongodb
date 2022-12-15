//import {useState, useEffect,useRef} from 'react'
import Link from "next/link";
import React from "react";
//import Footer from './components/Footer'
import { FeedbackForm } from "./index";
const Footer = (props) => {
  return (
    <>
      <FeedbackForm />
      <footer aria-label="Site Footer" className="bg-blog/5 rounded-t-3xl">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          {/* Last Small Footers */}
          <div className="pt-8 mt-8 border-t border-gray-100">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <p className="text-xs text-left text-gray-500">
                &copy; 2022. Shodkk.com. All rights reserved.
              </p>

              <nav aria-label="Footer Navigation - Support">
                <ul className="flex flex-wrap justify-start gap-4 text-xs lg:justify-end">
                  <li>
                    <Link
                      href="terms-and-conditions"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Terms & Conditions
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <a
                      href="/privacy-policy#Cookies"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      Cookies
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default React.memo(Footer);
