'use client';

import Image from 'next/image';
import Link from 'next/link';

import Header from "@/app/compontes/header"
import Footer from "@/app/compontes/footer";
import "locomotive-scroll/dist/locomotive-scroll.css";
// import { useEffect } from "react";
// import AOS from 'aos';
// import "aos/dist/aos.css";
export default function Home() {
    
    return (
        <>
            <Header />


            <section className='lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px]'>
                <div className='col-lg-6'>
                    <h1 className="lg:text-[60px] sm:text-[40px] mb-4 text-[20px] lg:leading-[70px] sm:leading-[50px] leading-[25px]">
                    MOTION <br></br>DESIGN
                    </h1>

                </div>
                <div >
                    <p className="text-gray-400 col-lg-5 lg:mt-8 mt-0 lg:text-[20px] sm:text-[20px] text-[15px] lg:leading-[35px] sm:leading-[25px]">
                    At <span className='text-white font-semibold'>Script Studio,</span> we specialize in <span className='text-white font-semibold'>motion design</span> to create visually immersive and captivating graphics for any project. Whether you want to grab attention or deliver your message with impact, we help make your brand memorable with expertly crafted <span className='text-white font-semibold'> motion graphics.</span></p>
                    <div className='pt-4'>
                    <Link href="/Contactus" className='text-white'><button className="lg:px-5 lg:py-1 px-2.5 py-2 border border-white lg:text-lg text-[12px] rounded-full hover:bg-white hover:text-black transition-all">
                        <p className='p-0 m-0 lg:text-[0.8vw] sm:text[1vw] text-[3vw]'>GET A FREE CONSULTATION</p>
                    </button></Link>


                    </div>
                </div>

                <div className="col-lg-12  col-lg-12 lg:pt-[80px] pt-[50px]">
                    <Image src="/assets/motion/imageiooojo.png" alt="Web Design" width={1830} height={750} loading="lazy" className="rounded-lg shadow-lg w-full" />
                </div>

            </section>



            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]">
                
                <div className="flex flex-wrap items-center">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px] ">

                    <div className="pb-3 mt-3 text-gray-400">Script Studio / Built for comms, creative & marketing teams</div>
                        <h1 className="lg:text-[40px] sm:text-[30px] text-[18px] col-lg-8 uppercase  lg:leading-[40px] sm:leading-[45px] leading-[30px] ">
                        Drive impact with professional motion design expertise.
                        </h1>
                        <div className="col-lg-8">
                            <p className="mt-4   font-semibold  lg:text-[18px] sm:text-[16px] text-[12px]">
                            Make an impression in every inbox with our tailored email design services. We create visually captivating and strategically designed emails that connect with your audience and reflect your brand&apos;s identity.
                            </p>
                            <p className="mt-4   lg:text-[15px] sm:text-[14px] text-[12px]">
                            Make an impression in every inbox with our tailored email design services. We create visually captivating and strategically designed emails that connect with your audience and reflect your brand&apos;s identity.
                            </p>

                        </div>



                        <div className="col-lg-5 mt-4">



                            <div className="flex">
                                <button className='underline flex'>Let&apos;s Talk<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                            </div>



                        </div>






                    </div>


                    <div className="col-lg-6 lg:pt-[80px] pt-[40px] order-lg-2 order-1">

                        <Image src="/assets/motion/imagecvvgu.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg" />
                    </div></div>
            </section>


            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]">
                <div className="flex flex-wrap  ">

                    <div className="col-lg-6 ">
                        <Image src="/assets/motion/imageb jiii.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg " />
                    </div>

                    <div className="col-lg-6 ">
                        <div className="flex justify-center">
                            <div className="col-lg-10 lg:pt-[80px] pt-[40px]">
                            <div className="pb-3 mt-3 col-lg-4 uppercase lg:text-[16px] sm:text-[14px] text-[12px] text-gray-400">Our Motion Design Services</div>
                                <h1 className="lg:text-[40px] sm:text-[30px] text-[18px]  text-white leading-[1]">
                                    MOTION ADS
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 lg:text-[20px] sm:text-[18px] text-[14px] ">
                                    Boost your conversions with motion ads designed to stand out and tell a compelling story. With scroll-stopping designs, we help delight your audience and increase engagement, ensuring your message resonates effectively.
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

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[18px] uppercase text-white ">
                                Custom Motion <br></br>Graphics
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 lg:text-[20px] sm:text-[18px] text-[14px]">
                                    Transform your brand&apos;s identity across all platforms with custom motion graphics. Tailored specifically for your brand, our graphics adapt seamlessly across mediums—from websites to social media, ensuring consistency and impact everywhere.

                                    </p>
                                    

                                </div>
                                <div className="flex">
                                    <button className='underline lg:text-[20px] sm:text-[18px] text-[14px] flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/motion/imageoiippp.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 mb-4 w-full">
                        <Image src="/assets/motion/imagehiiinkp.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] uppercase sm:text-[35px] text-[20px] leading-[1]">
                                Animated Videos
                                </h1>
                                <p className="mt-4 lg:text-[20px] sm:text-[18px] text-[14px]">
                                Enhance your storytelling with animated videos that amplify your message. Whether it&apos;s for explainer videos or brand stories, we create animations that not only inform but also entertain, keeping your audience engaged throughout the funnel.
                                </p>
                                
                                <div className="flex">
                                    <button className='underline lg:text-[20px] sm:text-[18px] text-[14px] flex'>Let&apos;s Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

            <div className="border-t-2 ms-5 me-5 mt-16 sm:block hidden"></div>
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
