'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "@/app/compontes/header"
import Footer from "@/app/compontes/footer";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const newsData = [
        {
            image: "/assets/Rectangle 14.png",
            alt: "News 1",
            date: "December 04, 2024",
            text: "Script Studio technologies is on the Quest for Exceptional Talent to Join Our Team"
        },
        {
            image: "/assets/Rectangle 15.png",
            alt: "News 2",
            date: "December 02, 2024",
            text: "Crafting the Design for Beyond the Screen Digital Products Marketplace"
        },
        {
            image: "/assets/Rectangle 16.png",
            alt: "News 3",
            date: "November 30, 2024",
            text: "Script Studio Technologies Claims Site of the Week at Awwwards!"
        }
    ];
     useEffect(() => {
                    AOS.init();
                    AOS.refresh();
                  }, []);
    

    return (
        <>
            <Header />


            <section className='lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px]'>
                <div className='col-lg-6'>
                    <h1 className="lg:text-[60px] sm:text-[40px] text-[20px] lg:leading-[65px] sm:leading-[45px] leading-[20px]">
                        ARTIFICIAL INTELLIGENCE DEVELOPMENT
                    </h1>

                </div>
                <div >
                    <p className="text-gray-400 col-lg-5 lg:pt-8 mt-0 lg:text-[18px] sm:text-[16px] text-[14px] lg:leading-[30px] sm:leading-[25px]">
                        Transform your business operations, customer experiences, and innovation with cutting-edge AI solutions tailored to your unique needs. Whether you’re exploring generative AI, building intelligent machine learning models, or enhancing processes with computer vision, Script Studio is here to elevate your business to new heights. Let’s drive your success with<span className='text-white font-semibold'>smart, scalable, and responsive AI services.</span>
                    </p>
                    <div className='pt-4'>
                        <button className=" lg:px-3 lg:py-2 px-2.5 py-2 border border-white lg:text-lg text-[12px] rounded-full hover:bg-white hover:text-black transition-all">
                            GET A FREE CONSULTATION
                        </button>

                    </div>
                </div>

                <div className="col-lg-12 w-full col-lg-12 lg:pt-[80px] pt-[50px]">
                    <Image src="/assets/motion/2151329542ijojojbb.png" alt="Web Design" width={1830} height={750} loading="lazy" className="rounded-lg shadow-lg w-full" />
                </div>

            </section>



            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]">

                <div className="flex flex-wrap items-center">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px] ">

                        <div className="pb-3 mt-3 text-gray-400">Script Studio / AI development agency</div>
                        <h1 className="lg:text-[35px] sm:text-[30px]  text-[20px]  uppercase  lg:leading-[40px] sm:leading-[45px] leading-[35px] ">
                            Achieve smarter growth with our comprehensive range of Artificial Intelligence services and solutions.
                        </h1>
                        <div className="col-lg-8">
                            <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px] ">
                                Discover our extensive range of AI services, crafted to fuel innovation and deliver measurable results. From consulting to development and more, our tailored artificial intelligence solutions are designed to address the specific needs of businesses across all industries.
                            </p>


                        </div>



                        <div className="col-lg-5 mt-4">



                            <div className="flex">
                                <button className='underline flex'>Let’s Talk<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                            </div>



                        </div>






                    </div>


                    <div className="col-lg-6 lg:pt-[80px] pt-[40px] order-lg-2 order-1">

                        <Image src="/assets/UI/2151618522uhuhiu.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg" />
                    </div></div>
            </section>


            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]">
                <div className="flex flex-wrap  ">

                    <div className="col-lg-6 ">
                        <Image src="/assets/motion/hiiiuybsu.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg " />
                    </div>

                    <div className="col-lg-6 ">
                        <div className="flex justify-center">
                            <div className="col-lg-10 lg:pt-[80px] pt-[40px]">

                                <h1 className="lg:text-[40px] sm:text-[30px] uppercase text-[20px]  text-white leading-[1]">
                                    AI Consulting
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 font-bold text-[16px]">
                                        Your Vision, Our Expertise.
                                    </p>
                                    <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px] ">
                                        Our AI consulting services help you discover endless possibilities and craft a roadmap for success. From streamlining operations with intelligent automation to exploring generative AI and beyond, we guide you step by step, ensuring your business stays ahead of the curve.
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[16px] text-[14px]  list-disc font-bold  list-outside">

                                        <li className='mt-2'>Strategic AI Roadmaps</li>
                                        <li className='mt-2'>Intelligent Automation</li>
                                        <li className='mt-2'>Unlock Competitive Advantages</li>

                                    </ul>
                                    <p className="mt-4  lg:text-[18px] sm:text-[16px] text-[14px] ">
                                        Let’s discuss how AI can be a game-changer for your business.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
            <section className=" lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap ">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[22px] uppercase text-white ">
                                    AI<br></br> DEVELOPMENT
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 font-bold text-[16px]">
                                        Bring Your AI Vision to Life
                                    </p>
                                    <p className="mt-4  lg:text-[18px] sm:text-[16px] text-[14px] ">
                                        From concept to execution, we transform your ideas into high-impact AI solutions designed to deliver ROI-driven results. With custom solutions built for your unique business needs, we help you:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[16px] text-[14px]  list-disc font-bold  list-outside">

                                        <li className='mt-1'>Develop Custom AI Tools</li>
                                        <li className='mt-1'>Ensure Scalability & Success</li>
                                        <li className='mt-1'>Drive Business Growth Through Innovation</li>

                                    </ul>

                                    <p className="mt-4  lg:text-[18px] sm:text-[16px] text-[14px] ">We are your partners in navigating today’s rapidly evolving digital landscape with AI.</p>
                                </div>
                                <div className="flex mt-4">
                                    <button className='underline flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/UI/imageihijij.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 mb-4 w-full">
                        <Image src="/assets/UI/imageojojojo.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] uppercase sm:text-[35px] text-[26px] leading-[1]">
                                Generative AI
                                </h1>
                                <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px] ">
                                Explore the power of Generative AI with custom applications tailored to your creative and business needs. Whether generating content, creating visuals, or developing new AI-powered applications, we help you unlock new frontiers:
                                </p>
                                <ul className="mt-2 lg:text-[18px] sm:text-[16px] text-[14px]  list-disc  list-outside">

                                    <li className='mt-2'>Create Text, Images, & Videos</li>
                                    <li className='mt-2'>Build Gen AI-powered Apps</li>
                                    <li className='mt-2'>Reimagine Business Possibilities</li>


                                </ul>
                                <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px] ">
                                Let’s create something unique together with Generative AI.
                                </p>
                                <div className="flex lg:pt-[20px] pt-[10px]">
                                    <button className='underline flex'>Let's Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            <section className=" lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap ">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[22px] uppercase text-white ">
                                Machine Learning
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 text-[16px] font-bold">
                                    Smart Decisions, Automated Processes
                                    </p>
                                    <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px] ">
                                    Empower your business with machine learning solutions that evolve with your data. We help you automate decision-making, uncover insights, and improve efficiency:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[16px] text-[14px]  list-disc font-bold list-outside">

                                        <li className='mt-2'>Predictive Models for Smarter Decisions</li>
                                        <li className='mt-2'>Automation for Operational Excellence</li>
                                        <li className='mt-2'>Data-driven Growth and Insights</li>


                                    </ul>
                                    <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px] ">
                                    We provide custom ML solutions that keep you ahead of the competition, fueled by advanced analytics.
                                    </p>


                                </div>
                                <div className="flex">
                                    <button className='underline flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/UI/imagebuhihii.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 mb-4 w-full">
                        <Image src="/assets/UI/imagehijijoj.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] uppercase col-lg-7 sm:text-[35px] text-[26px] ">
                                Computer Vision
                                </h1>
                                <p className="mt-4 text-[16px] font-bold">
                                Turn Visual Data into Action
                                </p>
                                <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px]  ">
                                Leverage the power of computer vision to extract valuable insights from visual data. From facial recognition to real-time video analytics, we enable your systems to understand and interpret visual inputs with precision:
                                </p>
                                <ul className="mt-2 lg:text-[18px] sm:text-[16px] text-[14px]  list-disc  font-bold list-outside">

                                    <li className='mt-2'>Facial Recognition & Identity Verification</li>
                                    <li className='mt-2'>Object Recognition & Automated Image Analysis</li>
                                    <li className='mt-2'>Sentiment Analysis & Video Insights</li>


                                </ul>
                                <p className='mt-4 lg:text-[18px] sm:text-[16px] text-[14px] '>Enhance your business operations and gain actionable insights through advanced computer vision.</p>

                                <div className="flex">
                                    <button className='underline flex'>Let's Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            <section className=" lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap ">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[22px] uppercase text-white ">
                                Responsible AI
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 text-[16px] font-bold">
                                    AI That’s Fair, Accountable, and Transparent
                                    </p>
                                    <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px]  ">
                                    At Script Studio, we prioritize Responsible AI to ensure your solutions are built on ethical, transparent practices. We ensure your AI is:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[16px] text-[14px]  list-disc font-bold  list-outside">

                                        <li className='mt-2'>Fair & Unbiased</li>
                                        <li className='mt-2'>Transparent & Explainable</li>
                                        <li className='mt-2'>Accountable & Ethical</li>
                                        


                                    </ul>
                                    <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px]  ">Let us help you build AI systems that align with the highest standards of responsibility and trust.</p>


                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/UI/imagebuuuuhb.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 mb-4 w-full">
                        <Image src="/assets/UI/imageihijij.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] uppercase col-lg-7 sm:text-[35px] text-[26px] leading-[1]">
                                Secure AI
                                </h1>
                                <p className="mt-4 text-[16px] font-bold">
                                Data Protection and AI Security at Its Core
                                    </p>
                                    <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px]  ">
                                    Security is our priority. With Secure AI, we ensure your AI solutions are safe, compliant, and protected:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[16px] text-[14px]  list-disc font-bold  list-outside">

                                        <li className='mt-2'>Robust Security Measures</li>
                                        <li className='mt-2'>Regulatory Compliance</li>
                                        <li className='mt-2'>Threat Protection & Risk Management</li>
                                        <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px]  ">Safeguard your data and AI systems with secure, cutting-edge solutions that meet industry standards.</p>



                                    </ul>
                                <div className="flex">
                                    <button className='underline flex'>Let's Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            <section className=" lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap ">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[22px] uppercase text-white ">
                                Data Services
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 text-[16px] font-bold">
                                    Data that Drives AI Innovation
                                    </p>
                                    <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px]  ">
                                    The foundation of every great AI system is quality data. Our AI data services ensure that your systems are powered by the right data for optimal results:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[16px] text-[14px]  list-disc font-bold  list-outside">

                                        <li className='mt-2'>Efficient Data Management & Integration</li>
                                        <li className='mt-2'>Advanced Data Analytics</li>
                                        <li className='mt-2'>Ensuring Responsible AI Use</li>
                                        


                                    </ul>
                                    <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px]  ">Let us provide the clean, accurate data that fuels your AI journey.</p>


                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/UI/imagehiijkm.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 mb-4 w-full">
                        <Image src="/assets/UI/imageuhushuh.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] uppercase col-lg-7 sm:text-[35px] text-[26px] leading-[1]">
                                AIOps and MLOps
                                </h1>
                                <p className="mt-4 text-[16px] font-bold">
                                Optimize, Monitor, and Scale AI Systems
                                    </p>
                                    <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px]  ">
                                    Maximize efficiency and scalability with AIOps and MLOps. We help automate workflows, monitor AI system performance, and optimize your AI solutions for seamless operation:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[16px] text-[14px]  list-disc font-bold  list-outside">

                                        <li className='mt-2'>Automate AI Workflows</li>
                                        <li className='mt-2'>Monitor AI Performance in Real-Time</li>
                                        <li className='mt-2'>Scale AI Systems for Long-Term Growth</li>
                                        <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px]  ">Enhance your AI journey with streamlined operations and efficient AI lifecycles.</p>



                                    </ul>
                                <div className="flex">
                                    <button className='underline flex'>Let's Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

           

            <div className="border-t-2 ms-5 me-5 mt-16 sm:block hidden"></div>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-5" data-aos="zoom-in">
                                           <div className="container-fluid p-0 m-0">
                                            <div className=" col-lg-12 ">
                                               <p>Blog</p>
                                             </div>
                                             <div className="col-lg-3">
                                               <p className="font-[500] text-[50px] leading-[45px]">Latest News
                                                 & Press</p>
                                             </div>
                                           </div>
                                         </section>
                        
                                         <section className="overflow-hidden lg:px-[80px] px-[40px] pt-1 pb-5" data-aos="zoom-in">
                                           <div className="container-fluid p-0 m-0">
                                             <div className="flex flex-wrap mb-4 justify-center ">
                                               <div className="col-lg-4">
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
                                               <div className="col-lg-4">
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
                                               <div className="col-lg-4">
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
                                         </section>
<Footer/>
        </>
    );
}
