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
        <Header/>
        

            <section className='lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px]' data-aos="fade-up">
                <div  className='col-lg-6'>
                    <h1 className="lg:text-[60px] sm:text-[40px] text-[26px] lg:leading-[65px] sm:leading-[45px] leading-[35px]">
                        WEB DESIGN & DEVELOPMENT
                    </h1>
                
                </div>
                <div >
                    <p className="text-gray-400 lg:mt-8 mt-0 lg:text-[20px] sm:text-[18px] text-[14px] lg:leading-[45px] sm:leading-[35px]">
                        Enhancing Your Online Presence – Distinguish Yourself On The Web And Attract Potential Clients
                    </p>
                    <button className="lg:px-3 lg:py-2 px-2.5 py-2 border border-white lg:text-lg text-[12px] rounded-full hover:bg-white hover:text-black transition-all">
                        GET A FREE CONSULTATION
                    </button>
                </div>
              
                <div className="col-lg-12  col-lg-12 lg:pt-[80px] pt-[40px]">
                    <Image  src="/assets/hero-image.png"  alt="Web Design"  width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg w-full"  />
                </div>
            </section>


            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[20px] " data-aos="zoom-in">
                <div className="pb-3 pt-3 text-gray-400 mb-4">Script Studio / Web Design & Development</div>
                <div className="flex flex-wrap">
                    <div className="col-lg-6 order-lg-1 order-2" data-aos="zoom-in">


                        <h1 className="lg:text-[60px] sm:text-[35px] text-[26px] lg:leading-[65px] sm:leading-[45px] leading-[35px] ">
                            EXPERTS IN WEBSITE DESIGN & DEVELOPMENT
                        </h1>
                        <div className="col-lg-9">
                            <p className="mt-4 text-white font-semibold lg:text-[16px] sm:text-[18px] text-[14px]">
                                At Script Studio, we specialize in creating custom, visually stunning, and user-friendly websites that not only look great but also rank high on search engines. Our web design and development team ensures that your website stands out and attracts more customers by blending aesthetic appeal with optimized functionality.
                            </p>
                            <p className="text-gray-400 mt-4 lg:text-[14px] sm:text-[16px] text-[14px]">
                                We combine the right platforms, the latest technology, and a customized approach to suit your unique needs. Whether you're looking for an eCommerce site, web app, or mobile app, we employ cutting-edge tech to ensure top-tier performance. From the initial design phase to development and launch, we work closely with you to create a digital experience that captivates and converts.
                            </p></div>

                        <div className="flex flex-wrap">

                            <div className="col-lg-5 mt-4">

                                <h5 className="text-white font-semibold">Need A Fresh Website?</h5>

                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">We craft and create standout websites.</li>
                                <li className="underline text-white lg:text-[16px] sm:text-[16px] text-[14px] mt-2">
                                    Submit your project details; we'll<br /> estimate costs and timeline.
                                </li>

                            </div>
                            <div className="border-r-2 mt-4 mr-4 ml-4 sm:block hidden "></div>
                            <div className="col-lg-6 mt-4">

                                <h5 className="text-white font-semibold">Need Assistance With WordPress?</h5>

                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">We quickly solve WordPress challenges</li>
                                <li className="underline text-white lg:text-[16px] sm:text-[16px] text-[14px] mt-2">
                                    Wordpress Support Services
                                </li>
                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">Custom Website Design & Development</li>
                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">WordPress Support & Troubleshooting</li>
                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">Plugin Integration</li>
                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">Performance Optimization</li>

                            </div>



                        </div>

                    </div>


                    <div className="col-lg-6 order-lg-2 order-1 lg:mt-20 mb-4">

                        <Image src="/assets/expertise-image.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg" />
                    </div></div>
            </section>"

            <section className="  lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]" data-aos="fade-up">
                <div className="flex flex-wrap ">
                    <div className="col-lg-6 ">
                        <Image src="/assets/ecommerce-image.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg " />
                    </div>

                    <div className="col-lg-6 mb-4 ">
                    <div className="flex justify-center">
                    <div className="col-lg-10">
                        <div className="pb-4 pt-4 text-gray-400 ">ECOMMERCE</div>
                        <h1 className="lg:text-[40px] sm:text-[30px] text-[20px] max-w-[460px] text-white leading-[1]">
                            ECOMMERCE WEB DESIGN & ONLINE SHOP
                        </h1>
                        <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                            Your digital storefront is your modern "High Street window." We help you create a compelling online shopping experience that engages customers and encourages conversions. Our team excels in integrating:
                        </p>
                        <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc list-inside">
                            <li>Payment Systems</li>
                            <li>Shopping Cart Solutions</li>
                            <li>Facebook Shop Integration</li>
                            <li>Invoice Management</li>
                            <li>WooCommerce & Stock Management</li>
                            <li>Discount & Offer Management</li>
                        </ul>
                        <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                            With over 92% of UK shoppers making online purchases, our expertise positions you to thrive in the competitive eCommerce landscape. The UK eCommerce market reached £200 billion in 2019, and we’re here to help you tap into this vast potential
                        </p>
                    </div>
                </div>
                </div>
                </div>



            </section>
            <section className="  lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]" data-aos="fade-up">
                <div className="flex flex-wrap">


                    <div className="col-lg-6 order-lg-1 order-2 ">
                        <div className="pb-3 pt-3 text-gray-400">WEB DESIGN</div>
                        <h1 className="lg:text-[40px] sm:text-[30px] text-[22px]  text-white leading-[1]">
                            BESPOKE WEBSITE DESIGN
                        </h1>

                        <ul className="mt-4  lg:text-[18px] sm:text-[18px] text-[16px] list-disc list-inside">
                            <li>Mobile & Tablet Friendly</li>
                            <li>User-Friendly CMS</li>
                            <li>SEO-Optimized Design Strategy</li>
                            <li>Engaging User Experience Design</li>
                            <li>Mobile-First Web Design</li>
                            <li>Easy to Manage and Update</li>
                            <li>Ongoing Training & Support</li>

                        </ul>
                        <p className="mt-4  lg:text-[18px] sm:text-[18px] text-[16px]">


                            Our custom website design and development ensure that your business stands out in the digital space. We follow a bespoke process, ensuring 100% design satisfaction from start to finish.
                        </p>
                    </div>
                    <div className="col-lg-6 order-lg-2 lg:px-[80px] px-[40px] order-1">
                        <Image src="/assets/dashboard and image (1).png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg w-full p-4 md:p-8" />
                    </div>
                </div>



            </section>

           
           

<section className="  lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]" data-aos="zoom-in">
                <div className="flex flex-wrap ">
                    <div className="col-lg-6 ">
                        <Image src="/assets/inteligent-image.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg " />
                    </div>

                    <div className="col-lg-6  ">
                    <div className="flex justify-center">
                    <div className="col-lg-10">
                    <div className="pb-4 pt-4 text-gray-400">ECOMMERCE EXPERTISE</div>
                        <h1 className="lg:text-[40px] sm:text-[35px] text-[26px] leading-[1]">
                            INTELLIGENT WEB DEVELOPMENT
                        </h1>
                        <ul className="mt-4 lg:text-[18px]  sm:text-[18px]  text-14px list-disc list-inside">
                            <li>Cutting-Edge Technology</li>
                            <li>Speed-Boosting Integrations</li>
                            <li>User-Friendly Platform</li>
                            <li>Excellent Functionality</li>
                            <li>SEO-Friendly Development</li>
                            <li>API Integrations</li>
                            <li>Cloud Hosting</li>
                        </ul>
                        <p className="mt-4  lg:text-[18px] sm:text-[18px] text-[16px]">
                            Partner with Script Studio and let our team of experts give your business the competitive edge with websites that perform exceptionally well across all devices, boost SEO, and create a seamless shopping experience.
                        </p>
                        </div>
                </div>
                </div>
                </div>



            </section>
            <div className="border-t-2 ms-5 me-5 mt-20 sm:block hidden "></div>

         
            <section className=" lg:px-[80px] px-[40px] flex flex-wrap overflow-hidden lg:pt-[80px] pt-[40px] " data-aos="fade-up">
               
                <div className=" col-lg-6 ">
                    <h1 className="lg:text-[50px] sm:text-[30px] text-white mt-10">OUR APPROACH:</h1>
                    <p className="text-gray-400 mt-6 lg:text-[20px] sm:text-[18px] text-[16px] ">
                    We prioritize user engagement with responsive, mobile-first designs, ensuring self-navigation and optimal usability. Our team optimizes each website for speed, SEO performance, and overall marketability, ensuring that you receive an outstanding digital product that drives success.
                    </p>
                </div>

                <div className="col-lg-6  ">
                <div className=" flex !justify-center lg:justify-end">
    <button className="lg:px-3 flex lg:py-2 px-2 py-2 sm:mt-[20px] mt-[10px] lg:text-lg text-[15px] border border-white rounded-full hover:bg-white hover:text-black transition-all">
        START YOUR PROJECT TODAY
    </button>
</div>
</div>
            </section>

            <div className="border-t-2 ms-5 me-5 mt-20 sm:block hidden "></div>
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
