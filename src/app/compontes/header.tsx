// components/Header1.js
"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import MenuBar from "./menubar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header1() {
  const [width, setWidth] = useState(560);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  return (
    <div className='overflow-hidden'>
      <header className="fixed w-full z-[99] bg-[#000] w-100  py-6 items-center lg:px-[80px] px-[10px] ">
        <div className="container-fluid ">
          <div className="flex items-center justify-between relative">
            <div className="col-lg-2 ps-0">
              <div>
                <Link href="/">
                  <Image
                    src="/assets/mainlogo.svg"
                    width={1080}
                    height={1080}
                    className="w-[160px] pl-[-10px]"
                    alt="no-img"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-2 d-flex justify-center">
              <MenuBar isMobile={width < 1020} />
            
            </div>
            <div className='col-lg-2 lg:block hidden'>
            <Link href="/" className="no-underline block ms-auto">
                <button className='ff-Elight text-[#fff] text-[11px]  border-[1px] border-[#fff] px-[30px] py-[10px] rounded-[50px] '>LET’S TALK</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

// components/MenuBar.js