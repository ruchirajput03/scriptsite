
'use client';


import Header from "@/app/compontes/header"
import Image from 'next/image';
import Link from 'next/link';
import Footer from "@/app/compontes/footer";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

import Textswiper from "../compontes/textswiper";

export default function Home() {
     useEffect(() => {
                          AOS.init();
                          AOS.refresh();
                        }, []);
  return (
    <>
      <Header />

      <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px] mb-4">

        <div className=" text-[#EEEEEE] row relative ">
          <Image
            src="/assets/rock.png"
            alt="..."
            width={1080}
            height={1080}
            className=" p-0 m-0 w-full "
          />
          <div className="absolute text-[#EEEEEE]">
            <div className="flex">
              <div className="col-lg-4 sm:pt-[365px] pt-[30px]">
                <p>FEATURED PROJECTS</p>
              </div>
              <div className="col-lg-4  sm:pt-[280px] pt-[30px]">
                <p>PROJECTS</p>
                <p className="lg:text-[1vw] text-[4vw] font-bold lg:leading-[1vw] leading-[4vw]">Not Just Aesthetics: Purpose-Driven Solutions!</p>
              </div>
            </div>
          </div>
        </div>


        <Image
          src="/assets/png.png"
          alt="..."
          width={1080}
          height={1080}
          className=" p-0 m-0 w-full "
        />
        <div className=" text-[#EEEEEE]">
          <div className="flex pt-10 mb-4 gap-4" >
            <div className="col-lg-3  ">
              <p className="lg:text-[1vw] text-[3vw]  lg:leading-[1.5vw] leading-[4vw]">In our design arena, productivity commands the show, and revenue applauds the finale.</p>
            </div>
            <div className="col-lg-6  ">

              <p className="lg:text-[1vw] text-[3vw] font-bold lg:leading-[1.5vw] leading-[4vw]">Actions Over Words: Solutions <br></br>That Deliver!</p>
            </div>
          </div>
        </div>


      </section>
      <section className=" pb-5">
      
        <Textswiper />
      </section>

      <section className="lg:px-[80px] px-[40px] pb-5 overflow-hidden">
        <div className=" text-[#EEEEEE]">
          <div className="flex pt-10  mb-4 gap-12" >
            <div className="col-lg-4  ">

              <p className="lg:text-[1vw] text-[2.5vw]  lg:leading-[1.5vw] leading-[4vw]">IN 7 YEARS, OUR TEAM HAS ACHIEVED IMPACTFUL RESULTS FOR OVER 100 STARTUP BUSINESSES.</p> 
               <div className="col-lg-4    ">
              <button type="button" className="underline lg:text-[1vw] text-[3vw]  lg:leading-[1vw] leading-[4vw]">ABOUT US</button>
            </div></div>
            
            <div className="col-lg-8">

              <p className="lg:text-[1.9vw] text-[3vw] font-semibold flex justify-between lg:leading-[2vw] leading-[3.5vw]">We’re a powerhouse of creative minds, crafting brilliance with every idea.</p>
            </div>
          </div>
        </div>


      </section>
      <section className="lg:px-[80px] px-[40px] pb-5 overflow-hidden">
        <div className="col-lg-8 justify-end mb-8  ml-auto">
          <div className="flex gap-12 ">
            <div className="col-lg-3 mb-4 ">
              <h1 className="font-bold lg:text-[70px] sm:text-[40px] text-[20px]">13</h1>
              <p className="lg:text-[1vw] text-[3vw]  lg:leading-[1vw] leading-[4vw]" >SKILLED MEMBERS</p>
            </div>
            <div className="col-lg-3 mb-4 ml-6 ">
              <h1 className="font-bold lg:text-[70px] sm:text-[40px] text-[20px]">7</h1>
              <p className="lg:text-[1vw] text-[3vw]  lg:leading-[1vw] leading-[4vw]">YEARS OF GROWTH</p>
            </div>
            <div className="col-lg-3 mb-4 ">
              <h1 className="font-bold lg:text-[70px] sm:text-[40px] text-[20px]">70+</h1>
              <p className="lg:text-[1vw] text-[3vw]  lg:leading-[1vw] leading-[4vw]">SATISFIED CLIENTS</p>
            </div>




          </div>
          <hr className="mb-4 border-2 border-white "></hr>
        </div>
        <div className="col-lg-8 justify-end   ml-auto">
          <div className="flex gap-12 ">
            <div className="col-lg-3 mb-4 ">
              <h1 className="font-bold lg:text-[70px] sm:text-[40px] text-[20px]">$10M+</h1>
              <p className="lg:text-[1vw] text-[3vw]  lg:leading-[1vw] leading-[4vw]">CLIENTS RAISED</p>
            </div>
            <div className="col-lg-3 mb-4 ml-9 ">
              <h1 className="font-bold lg:text-[70px] sm:text-[40px] text-[20px]">300%</h1>
              <p className="lg:text-[1vw] text-[3vw]  lg:leading-[1vw] leading-[4vw]">ONBOARDING CONVERSION RATE</p>
            </div>
            <div className="col-lg-3 mb-4 ">
              <h1 className="font-bold lg:text-[70px] sm:text-[40px] text-[20px]">10</h1>
              <p className="lg:text-[1vw] text-[3vw]  lg:leading-[1vw] leading-[4vw]" >AWARDS</p>
            </div>




          </div>
          <hr className=" border-2 border-white "></hr>
        </div>







      </section>

      <section className="lg:px-[80px] px-[40px] overflow-hidden pb-5">
        <div className=" text-[#EEEEEE]">
          <div className="flex lg:pt-10  mb-4 lg:gap-40 gap-6" >
            <div className="col-lg-3 ">
              <p className="lg:text-[1vw] text-[2.5vw]  lg:leading-[1vw] leading-[4vw]">OUR PROVEN HISTORY OF RELIABLE PARTNERSHIPS AND CLIENT COLLABORATIONS.</p>
            </div>
            <div className="col-lg-8 ">

              <p className="lg:text-[1.8vw] text-[3vw] font-semibold lg:leading-[2vw] leading:[3vw]">We’ve had the privilege of collaborating with incredible individuals on truly remarkable projects.</p>
            </div>
          </div>
        </div>


      </section>




      <section className="lg:px-[80px] px-[40px] overflow-hidden pb-5">
        <div className="col-lg-8 justify-end mb-8  ml-auto">
          <div className="flex ">
            <div className="col-lg-3 mb-4 ">
              <Image
                src="/assets/image 4.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 lg:w-[300px] sm:w-[120px} w-[1080px]"
              />
            </div>
            <div className="col-lg-3 lg:ml-20 lg:pl-[0px] pl-[50px]">
              <Image
                src="/assets/image 5.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 lg:w-[130px] sm:w-[120px] w-[600px]"
              />
            </div>
            <div className="col-lg-3 lg:pl-[0px] sm:pl-[100px] pl-[50px]">
              <Image
                src="/assets/image 6.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 lg:w-[170px] sm:w-[150px] w-[800px]"
              />
            </div>

          </div>
          <hr className="mb-4 border-2 border-white "></hr>
        </div>
        <div className="col-lg-8 justify-end mb-8  ml-auto">
          <div className="flex ">
            <div className="col-lg-3 mb-4 ">
              <Image
                src="/assets/image 7.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 lg:w-[300px] sm:w-[400px} w-[1080px]"
              />
            </div>
            <div className="col-lg-3 lg:ml-20 lg:pl-[0px] pl-[50px]">
              <Image
                src="/assets/image 8.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 lg:w-[130px] sm:w-[120px] w-[650px]"
              />
            </div>
            <div className="col-lg-3 lg:pl-[0px] sm:pl-[100px] pl-[50px]">
              <Image
                src="/assets/image 9.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 lg:w-[170px] sm:w-[150px] w-[700px]"
              />
            </div>

          </div>
          <hr className="mb-4 border-2 border-white "></hr>
        </div>
        <div className="col-lg-8 justify-end mb-8  ml-auto">
          <div className="flex ">
            <div className="col-lg-3 mb-4 ">
              <Image
                src="/assets/image 10.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 lg:w-[300px] sm:w-[400px} w-[1000px]"
              />
            </div>
            <div className="col-lg-3 lg:ml-20 lg:pl-[0px] pl-[50px]">
              <Image
                src="/assets/image 11.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 lg:w-[150px] sm:w-[120px] w-[750px]"
              />
            </div>
            <div className="col-lg-3 lg:pl-[0px] sm:pl-[100px] pl-[50px]">
              <Image
                src="/assets/image 12.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 lg:w-[130px] sm:w-[150px] w-[500px]"
              />
            </div>

          </div>
          <hr className="mb-4 border-2 border-white "></hr>
        </div>
       
        {/* <div className="col-lg-8 justify-end mb-8  ml-auto">
          <div className="flex ">
            <div className="col-lg-3 mb-4 ">
              <Image
                src="/assets/image 10.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0  "
              />
            </div>
            <div className="col-lg-3 ml-20">
              <Image
                src="/assets/image 11.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 w-[170px]"
              />
            </div>
            <div className="col-lg-3 ml-10">
              <Image
                src="/assets/image 12.png"
                alt="..."
                width={1080}
                height={1080}
                className="p-0 m-0 w-[70px] "
              />
            </div>
          </div>
          <div className=" mt-10 mb-10">
            <p className="lg:text-[1vw] text-[4vw] font-semibold leading-[35px]">WE CREATE BRANDS THAT <br></br> DEMAND ATTENTION!</p>
          </div>


        </div> */}




     
      </section>

      <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-5" >
                    <div className="container-fluid p-0 m-0">
                        <div className=" col-lg-12 ">
                            <p>Blog</p>
                        </div>
                        <div className="col-lg-4">
                            <p className="font-bold lg:text-[50px] sm:text-[40px] text-[35px] lg:leading-[55px]">Latest News
                                &amp; Press</p>
                        </div>
                    </div>
                </section>
    
                <section className="overflow-hidden lg:px-[80px] px-[40px] p pb-5">
                    <div className="container-fluid p-0 m-0">
                        <div className="col-lg-12">
                            <div className="flex flex-wrap mb-4  justify-center ">
    
                                <div className="col-lg-4">
                                    <div className="flex justify-center">
                                        <div className='col-lg-10'>
                                            <Image
                                                src="/assets/Rectangle 14.png"
                                                alt="..."
                                                width={500}
                                                height={300}
                                                className="rounded-[10px] p-0 m-0 "
                                            />
                                            <p className="mt-4 text-[15px]">Script Studio technologies is on the Quest for Exceptional Talent to Join Our Team</p>
                                            <p className="mt-2 text-[10px] text-[#D1D1D1]">DECEMBER 04, 2024</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="col-lg-4">
                                    <div className="flex justify-center">
                                        <div className='col-lg-10'>
                                            <Image
                                                src="/assets/Rectangle 15.png"
                                                alt="..."
                                                width={500}
                                                height={300}
                                                className="rounded-[10px] p-0 m-0 "
                                            />
                                            <p className="mt-4 text-[15px]">Crafting the Design for Beyond the Screen Digital Products Marketplace</p>
                                            <p className="mt-2 text-[10px] text-[#D1D1D1]">DECEMBER 04, 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="flex justify-center">
                                        <div className='col-lg-10'>
                                            <Image
                                                src="/assets/Rectangle 16.png"
                                                alt="..."
                                                width={500}
                                                height={300}
                                                className="rounded-[10px] p-0 m-0 "
                                            />
                                            <p className="mt-4 text-[15px]">Script Studio Technologies Claims Site of the Week at Awwwards!</p>
                                            <p className="mt-2 text-[10px] text-[#D1D1D1]">NOVEMBER 30, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                    <div className="flex justify-center mb-8 mt-4" >
                        <div className="col-md-2 flex justify-center">
                            <Link href="/blog" type="button" className="text-[#ffff] no-underline border mb-4 items-center w-[160px] border-white hover:bg-[#ffff] hover:text-[#000] justify-center text-center rounded-full px-3 py-2 " ><p className='p-0 m-0 lg:text-[0.8vw] sm:text-[1vw] text-[3vw]'>VIEW ALL BLOGS</p></Link>
                        </div>
                    </div>
                </section>
    <Footer/>



    </>
  );
}
