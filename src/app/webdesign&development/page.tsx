'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from "@/app/compontes/header"
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


            <section className='lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px]' >
                <div className='col-lg-6'>
                    <h1 className="lg:text-[60px]  font-bold  sm:text-[40px] text-[26px] lg:leading-[65px] sm:leading-[45px] leading-[35px]">
                        WEB DESIGN &amp; DEVELOPMENT
                    </h1>

                </div>
                <div >
                    <p className="text-gray-400 lg:mt-8 mt-0 lg:text-[20px] sm:text-[18px] text-[14px] lg:leading-[45px] sm:leading-[35px]">
                        Enhancing Your Online Presence – Distinguish Yourself On The Web And Attract Potential Clients
                    </p>
                    <Link href="/Contactus" className='text-white no-underline'><button className="lg:px-5 lg:py-1 px-2.5 py-2 border border-white lg:text-lg text-[12px] rounded-full hover:bg-white hover:text-black transition-all">
                        <p className='p-0 m-0 lg:text-[0.8vw] sm:text[1vw] text-[3vw]'>GET A FREE CONSULTATION</p>
                    </button></Link>
                </div>

                <div className="col-lg-12  col-lg-12 lg:pt-[80px] pt-[40px]">
                    <Image src="/assets/hero-image.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg w-full" />
                </div>
            </section>


            <section className="lg:px-[80px] px-[40px]  lg:pt-[80px] pt-[20px] ">
                <div className="pb-3 pt-3 text-gray-400 mb-4">Script Studio / Web Design &amp; Development</div>
                <div className="row lg:items-center ">
                    <div className="col-lg-6 order-lg-1 order-2 mb-4 " >


                        <h1 className="lg:text-[40px] sm:text-[35px] font-semibold text-[26px] lg:leading-[45px] sm:leading-[45px] leading-[35px] ">
                            EXPERTS IN WEBSITE DESIGN &amp; DEVELOPMENT
                        </h1>
                        <div className="col-lg-9">
                            <p className="mt-4 text-white font-semibold lg:text-[16px] sm:text-[18px] text-[14px]">
                                At Script Studio, we specialize in creating custom, visually stunning, and user-friendly websites that not only look great but also rank high on search engines. Our web design and development team ensures that your website stands out and attracts more customers by blending aesthetic appeal with optimized functionality.
                            </p>
                            <p className="text-gray-400 mt-4 lg:text-[14px] sm:text-[16px] text-[14px]">
                                We combine the right platforms, the latest technology, and a customized approach to suit your unique needs. Whether  you&apos;re looking for an eCommerce site, web app, or mobile app, we employ cutting-edge tech to ensure top-tier performance. From the initial design phase to development and launch, we work closely with you to create a digital experience that captivates and converts.
                            </p></div>

                        <div className="flex flex-wrap">

                            <div className="col-lg-5 mt-4">

                                <h5 className="text-white font-semibold">Need A Fresh Website?</h5>

                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">We craft and create standout websites.</li>
                                <li className="underline text-white lg:text-[16px] sm:text-[16px] text-[14px] mt-2">
                                    Submit your project details; We&apos;ll<br /> estimate costs and timeline.
                                </li>

                            </div>
                            <div className="border-r-2 mt-4 mr-4 ml-4 sm:block hidden "></div>
                            <div className="col-lg-6 mt-4">

                                <h5 className="text-white font-semibold">Need Assistance With WordPress?</h5>

                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">We quickly solve WordPress challenges</li>
                                <li className="underline text-white lg:text-[16px] sm:text-[16px] text-[14px] mt-2">
                                    Wordpress Support Services
                                </li>
                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">Custom Website Design &amp; Development</li>
                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">WordPress Support &amp; Troubleshooting</li>
                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">Plugin Integration</li>
                                <li className="text-gray-400 lg:text-[16px] sm:text-[16px] text-[14px] mt-2">Performance Optimization</li>

                            </div>



                        </div>

                    </div>


                    <div className="col-lg-6 order-lg-2 order-1 lg:sticky lg:max-h-screen lg:top-[200px] mb-4">

                        <Image src="/assets/expertise-image.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg sticky w-full shadow-lg" />
                    </div></div>
            </section>

            <section className="  lg:px-[80px] px-[40px]  lg:pt-[80px] pt-[40px]" >
                <div className="flex flex-wrap lg:items-center ">
                    <div className="col-lg-6 lg:sticky lg:max-h-screen lg:top-[200px]  ">
                        <Image src="/assets/ecommerce-image.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg " />
                    </div>

                    <div className="col-lg-6 mb-4 ">
                        <div className="flex justify-center">
                            <div className="col-lg-10">
                                <div className="pb-4 pt-4 text-gray-400 ">ECOMMERCE</div>
                                <h1 className="lg:text-[40px] sm:text-[30px] text-[20px] max-w-[460px] text-white leading-[1]">
                                    ECOMMERCE WEB DESIGN &amp; ONLINE SHOP
                                </h1>
                                <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                    Your digital storefront is your modern High Street window&ldquo; We help you create a compelling online shopping experience that engages customers and encourages conversions. Our team excels in integrating:
                                </p>
                                <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc list-inside">
                                    <li>Payment Systems</li>
                                    <li>Shopping Cart Solutions</li>
                                    <li>Facebook Shop Integration</li>
                                    <li>Invoice Management</li>
                                    <li>WooCommerce &amp; Stock Management</li>
                                    <li>Discount &amp; Offer Management</li>
                                </ul>
                                <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                    With over 92% of UK shoppers making online purchases, our expertise positions you to thrive in the competitive eCommerce landscape. The UK eCommerce market reached £200 billion in 2019, and  We&apos;re here to help you tap into this vast potential
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
            <section className="  lg:px-[80px] px-[40px]  lg:pt-[80px] pt-[40px]" >
                <div className="flex flex-wrap items-center">


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
                    <div className="col-lg-6 order-lg-2 lg:px-[80px] px-[40px] order-1 lg:sticky lg:max-h-screen lg:top-[200px]">
                        <Image src="/assets/dashboard and image (1).png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg w-full p-4 md:p-8" />
                    </div>
                </div>



            </section>




            <section className="  lg:px-[80px] px-[40px] lg:pt-[80px] pt-[40px]" >
                <div className="flex flex-wrap  items-center">
                    <div className="col-lg-6 lg:sticky lg:max-h-screen lg:top-[200px] ">
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


            <section className=" lg:px-[80px] px-[40px] flex flex-wrap overflow-hidden items-start lg:pt-[80px] pt-[40px] " >

                <div className=" col-lg-6 ">
                    <h1 className="lg:text-[50px] sm:text-[30px] text-white mt-10">OUR APPROACH:</h1>
                    <p className="text-gray-400 mt-6 lg:text-[20px] sm:text-[18px] text-[16px] ">
                        We prioritize user engagement with responsive, mobile-first designs, ensuring self-navigation and optimal usability. Our team optimizes each website for speed, SEO performance, and overall marketability, ensuring that you receive an outstanding digital product that drives success.
                    </p>
                </div>

                <div className="col-lg-6  ">
                    <div className=" flex !justify-center lg:justify-end">
                        <button className="lg:px-5 lg:py-1 px-2.5 py-2 flex sm:mt-[20px] mt-[10px] lg:text-lg text-[15px] border border-white rounded-full hover:bg-white hover:text-black transition-all">
                            START YOUR PROJECT TODAY
                        </button>
                    </div>
                </div>
            </section>

            <div className="border-t-2 ms-5 me-5 mt-20 sm:block hidden "></div>
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

            <Footer />
        </>
    );
}
