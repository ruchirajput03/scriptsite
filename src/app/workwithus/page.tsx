
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "@/app/compontes/header"
import Image from 'next/image';
import Link from 'next/link';
import Footer from "@/app/compontes/footer";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";


export default function Home() {
     useEffect(() => {
                            AOS.init();
                            AOS.refresh();
                          }, []);
  return (
    <>
      <Header />
      <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px] mb-4">
        <div className="container-fluid p-0 m-0">

          <div className="row justify-between">
            <div className="col-lg-6 mb-4 ">
              <h1>Join Our <span className="text-[#8D8DFF]">Team</span></h1>
              <p className="text-[#C8C9C7] lg:text-[1vw] sm:text-[2.2vw] text-[3vw]">At Script Studio, joining our team means becoming part of a dynamic, collaborative, and growth-driven environment. You’ll have the opportunity to work on diverse, exciting projects, gain hands-on experience with cutting-edge technologies, and receive mentorship to help you reach your full potential. Your contributions will be valued, and you'll be recognized for the impact you make. Take the leap and be part of a team that prioritizes your professional development and empowers you to thrive in the fast-paced world of digital marketing. </p>
              <p className="text-[#C8C9C7] lg:text-[1vw]  sm:text-[2.4vw] text-[3vw] mt-9">
                Explore our current job openings and take the next step in your career with <span className="text-[#8D8DFF] lg:text-[1vw] text-[3vw]">Script Studio.</span></p>
              <Link href="/JobDescription" type="button" className="text-[#ffff] border mb-4 no-underline items-center border-white hover:bg-[#ffff] hover:text-[#000]  sm:pl-[10px] text-center mb-4 rounded-3xl lg:px-3 lg:py-2  px-2 py-1 mt-6" >OPEN POSITIONS</Link>

            </div>
            <div className="col-lg-6 mb-4 justify-between  ">
              <div className=" flex justify-center">

                <div className="col-lg-6 mb-4">
                  <div className="row justify-center">
                    <div className="col-lg-6 mb-4 lg:pt-4">
                      <Image
                        src="/assets/64d3443777efb12c30bb87ab_1.webp.png"
                        alt="..."
                        width={1080}
                        height={1080}
                        className=" rounded-[10px]  p-0 m-0 w-full "
                      />
                    </div>
                    <div className="col-lg-6 mb-4 ">
                      <Image
                        src="/assets/64d344366bbb449345306c55_3.webp.png"
                        alt="..."
                        width={1080}
                        height={1080}
                        className=" p-0 m-0 w-full  "
                      />
                    </div>
                    <div className="col-lg-6 mb-4 lg:pt-4">
                      <Image
                        src="/assets/64d344374e87d971db1a11d5_2.webp.png"
                        alt="..."
                        width={1080}
                        height={1080}
                        className=" rounded-[10px] w-full p-0 m-0  "
                      />
                    </div>
                    <div className="col-lg-6 mb-4 ">
                      <Image
                        src="/assets/64d34437537e024120515fcc_4.webp.png"
                        alt="..."
                        width={1080}
                        height={1080}
                        className="rounded-[10px] w-full  p-0 m-0  "
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <hr className="border border-1 border-white"></hr>
      </section>
      <section className="lg:px-[80px] px-[40px] overflow-hidden pt-4 pb-5">
        <div className="container-fluid p-0 m-0">
          <div className="col-lg-6">
            <h2>BENEFITS OF WORKING <br></br>IN OUR TEAM</h2>
          </div>
        </div>

      </section>
      <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-4">
        <div className="container-fluid p-0 m-0">
          <div className="row mb-4 ">

            <div className="col-lg-4 mb-4">
              <Image
                src="/assets/Group 17628.png"
                alt="..."
                width={1080}
                height={1080}
                className="rounded-[10px] p-0 m-0 w-[50px] "
              />
              <h4 className="mt-6">Professional Growth:</h4>
              <p className="lg:text-[16px] sm:text-[18px] text-[14px] text-[#B8B8B8] leading-[20px] mt-4">At Script Studio, we don’t just offer a job—we offer a journey. We’re passionate about your development and provide the tools, mentorship, and opportunities to help you grow and sharpen your skills in a fast-paced, ever-evolving industry.</p>

            </div>
            <div className="col-lg-4 mb-4">
              <Image
                src="/assets/Group 17630.png"

                alt="..."
                width={1080}
                height={1080}
                className="rounded-[10px] p-0 m-0 w-[50px] "
              />
              <h4 className="mt-6">Diverse and Dynamic Projects:</h4>
              <p className="lg:text-[16px] sm:text-[18px] text-[14px] text-[#B8B8B8] leading-[20px] mt-4">Say goodbye to boring routines! With us, you’ll be working on exciting projects that span different industries—from fresh startups to iconic brands. Every project brings new challenges and creative opportunities, keeping your work as dynamic as the digital world itself.</p>

            </div>
            <div className="col-lg-4 mb-4">
              <Image
                src="/assets/Group 17632.png"
                alt="..."
                width={1080}
                height={1080}
                className="rounded-[10px] p-0 m-0 w-[50px] "
              />
              <h4 className="mt-6">Collaborative Team Culture:</h4>
              <p className="lg:text-[16px] sm:text-[18px] text-[14px] text-[#B8B8B8] leading-[20px] mt-4">We believe great ideas happen when people come together. At Script Studio, you’ll be part of a supportive, inclusive environment where everyone’s voice is heard, and collaboration is at the heart of what we do. Together, we’re stronger, smarter, and ready to take on the next big thing.</p>

            </div>


            <div className="col-lg-4 mt-4 mb-4">
              <Image
                src="/assets/Group 17634.png"
                alt="..."
                width={1080}
                height={1080}
                className="rounded-[10px] p-0 m-0 w-[50px] "
              />
              <h4 className="mt-6">Mentorship and Guidance:</h4>
              <p className="lg:text-[16px] sm:text-[18px] text-[14px] text-[#B8B8B8] leading-[20px] mt-4">We know that success is a journey, not a destination. That’s why we offer mentorship from some of the brightest minds in the industry, ensuring you have the guidance and support needed to elevate your career.</p>

            </div>
            <div className="col-lg-4 mt-4 mb-4">
              <Image
                src="/assets/Group 17636.png"

                alt="..."
                width={1080}
                height={1080}
                className="rounded-[10px] p-0 m-0 w-[50px] "
              />
              <h4 className="mt-6">Exposure to Cutting-Edge Tools:</h4>
              <p className="lg:text-[16px] sm:text-[18px] text-[14px] text-[#B8B8B8] leading-[20px] mt-4">Join us, and you’ll have the opportunity to work with the latest marketing technologies and innovative tools that push boundaries and drive results. We invest in tech to make sure our team stays ahead of the curve and delivers nothing short of excellence.</p>

            </div>
            <div className="col-lg-4 mt-4 mb-4">
              <Image
                src="/assets/Group 17638.png"
                alt="..."
                width={1080}
                height={1080}
                className="rounded-[10px] p-0 m-0 w-[50px] "
              />
              <h4 className="mt-6">Recognition and Rewards:</h4>
              <p className="lg:text-[16px] sm:text-[18px] text-[14px] text-[#B8B8B8] leading-[20px] mt-4">At Script Studio, your hard work doesn’t go unnoticed. We offer competitive compensation packages, performance-based incentives, and growth opportunities that recognize your contributions and fuel your career progression. Your success is our success, and we celebrate it every step of the way.</p>

            </div>



          </div>
        </div>
        <hr className="border border-1 border-white mt-4"></hr>


      </section>

      <section className="lg:px-[80px] px-[40px] overflow-hidden  lg:pt-4 pb-5">
        <div className="container-fluid p-0 m-0">
          <div className="col-lg-6">
            <h1>Jobs available</h1>
            <p className="text-[#C8C9C7] lg:text-[1vw] text-[3vw] mt-5">Choosing our team means choosing a dedicated group of professionals who are passionate about marketing and committed to your success. With our expertise, collaborative approach, customized solutions, cutting-edge strategies, creative thinking, and results-oriented mindset, we are ready to take your marketing efforts to new heights.</p>
          </div>
        </div>

      </section>
      <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-4 ">
        <div className="container-fluid p-0 m-0">
          <div className="row  ">

            <div className="col-lg-4  mb-4">

              <div className="border rounded-[10px]">
                <div className="flex justify-center lg:px-[50px] px-[40px]">
                  <div className="col-lg-12">
                    <h4 className="mt-6 text-[#8D8DFF]">UI/UX DESIGNER</h4>
                    <p className="lg:text-[15px] sm:text-[18px] text-[14px] text-[#B8B8B8]  leading-[20px] mt-4">At Script Studio we help our clients achieve the efficiency and ROI they need to succeed. We are currently searching for a talented and motivate Search Arbitrage Media Buyer to become a crucial part of our team.</p>
                    <button type="button" className="text-white underline mb-4">details</button>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4 ">
              <div className="border rounded-[10px]   ">
              <div className="flex justify-center lg:px-[50px] px-[40px]">
              <div className="col-lg-12">
                <h4 className="mt-6 text-[#8D8DFF]">Next JS. Developer</h4>
                <p className="lg:text-[15px] sm:text-[18px] text-[14px] text-[#B8B8B8]  leading-[20px] mt-4">At Script Studio we help our clients achieve the efficiency and ROI they need to succeed. We are currently searching for a talented and motivate Search Arbitrage Media Buyer to become a crucial part of our team.</p>
                <button type="button" className="text-white underline mb-4">details</button>

              </div>
              </div>
              </div>
            </div>
            <div className=" col-lg-4 mb-4 ">
              <div className="border rounded-[10px]">
              <div className="flex justify-center lg:px-[50px] px-[40px]">
              <div className="col-lg-12">
                <h4 className="mt-6 text-[#8D8DFF]">Graphic Designer</h4>
                <p className="lg:text-[15px] sm:text-[18px] text-[14px] text-[#B8B8B8]  leading-[20px] mt-4">At Script Studio we help our clients achieve the efficiency and ROI they need to succeed. We are currently searching for a talented and motivate Search Arbitrage Media Buyer to become a crucial part of our team.</p>
                <button type="button" className="text-white underline mb-4">details</button>


              </div>
            </div>
            </div>
            </div>



          </div>
        </div>



      </section>
      <section className="overflow-hidden lg:px-[80px] px-[40px] pt-4 pb-4">
        <div className="container-fluid p-0 m-0">
          <div className="row align-items-center justify-between">

            <div className="col-lg-6 mb-4">
              <p className="lg:text-[24px] text-[18px] lg:leading-[35px] leading-[25px]">
                DIDN’T FIND A VACANCY THAT INTERESTS YOU BUT STILL WANT TO <span className="text-[#8D8DFF]">WORK WITH US?</span>
              </p>

            </div>


            <div className="col-lg-6 mb-4 ">
              <div className="flex justify-center">
                <div>
                  <p className="text-[#C8C9C7] lg:text-[18px] sm:text-[17px] text-[14px] lg:mt-9">We’re always excited to hear from talented individuals who are passionate about what we do. If you didn’t find the perfect fit, send us an email with your offer or proposal, and we’ll be happy to connect with you and explore how we can work together.
                  </p>

                  <button type="button" className="text-white hover:text-gray-400 border border-white hover:bg-black  sm:pl-[10px] text-center rounded-3xl lg:px-3 lg:py-2 px-2 py-1 mt-6" >CONTACT US </button>
                </div>
              </div>






            </div>
          </div>
        </div>

      </section>


    </>
  );
}
