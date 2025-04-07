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


            <section className='lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px]'>
                <div className='col-lg-6 mb-4'>
                    <h1 className="lg:text-[60px] sm:text-[40px] text-[20px] lg:leading-[65px] sm:leading-[45px] leading-[35px]">
                        Design | Transform | Accelerate
                    </h1>

                </div>
                <div >
                    <p className="text-gray-400 col-lg-5 lg:mt- mt-0 lg:text-[20px] sm:text-[15px] text-[14px] lg:leading-[35px] sm:leading-[35px]">
                        We <span className='text-white font-semibold'>revolutionize user experience </span>by integrating behavioral science into our designs, helping your business thrive in an ever-evolving digital landscape.</p>
                    <div className='pt-4'>
                    <Link href="/Contactus" className='text-white'><button className="lg:px-5 lg:py-1 px-2.5 py-2 border border-white lg:text-lg text-[12px] rounded-full hover:bg-white hover:text-black transition-all">
                        <p className='p-0 m-0 lg:text-[0.8vw] sm:text[1vw] text-[3vw]'>GET A FREE CONSULTATION</p>
                    </button></Link>

                    </div>
                </div>

                <div className="col-lg-12  col-md-12 lg:pt-[80px] pt-[50px]">
                    <Image src="/assets/UI/Rectangle 26oo.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg w-full" />
                </div>

            </section>



            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]">
                <div className="pb-3 pt-3 text-gray-400">Script Studio / UI UX Design</div>
                <div className="flex flex-wrap ">

                    <div className="col-lg-6 order-lg-1 order-2 g:pt-[80px] pt-[40px]">


                        <h1 className="lg:text-[40px] sm:text-[30px] text-[20px] uppercase  lg:leading-[40px] sm:leading-[45px] leading-[35px] ">
                            Script Studio: Client Success Stories
                        </h1>
                        <div className="col-lg-6">
                            <p className="mt-4   text-[#A5A5A5]  lg:text-[18px] sm:text-[18px] text-[16px]">
                                At <span className='text-white font-semibold '>Script Studio,</span> we bring our clients&apos; visions to life by combining <span className='text-white font-semibold '>design expertise,</span> cutting-edge technology, and impactful <span className='text-white font-semibold '>marketing</span> strategies.
                            </p>

                        </div>



                        <div className="col-lg-5 mt-4">



                            <div className="flex">
                                <button className='underline lg:text-[18px] sm:text-[18px] text-[16px] flex'>Let&apos;s Talk<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                            </div>



                        </div>






                    </div>


                    <div className="col-lg-6  order-lg-2 order-1">

                        <Image src="/assets/UI/Rectangle 27hjj.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg" />
                    </div></div>
            </section>


            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]">
                <div className="flex flex-wrap  ">

                    <div className="col-lg-6 ">
                        <Image src="/assets/UI/imageoo.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg " />
                    </div>

                    <div className="col-lg-6 ">
                        <div className="flex justify-center">
                            <div className="col-lg-10 lg:pt-[80px] pt-[40px]">

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[20px]  text-white leading-[1]">
                                    OUR <br></br>EXPERTISE
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                        As a global creative agency, we specialize in transforming your business through design, technology, and marketing solutions. Our team delivers results through:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc list-inside">
                                        <li>UI Design</li>
                                        <li>UX Design</li>
                                        <li>UX Consultancy</li>
                                        <li>Design Systems</li>
                                        <li>Animation</li>
                                        <li>Illustrations</li>
                                    </ul>

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

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[22px] uppercase text-white leading-[1]">
                                    Technology <br></br>Solutions
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                        We combine our design skills with advanced technology to create:

                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc list-inside">
                                        <li>Web Design</li>
                                        <li>Mobile Apps</li>
                                        <li>Web Apps</li>
                                        <li>Front-end Development</li>
                                        <li>Back-end Development</li>

                                    </ul>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/image-2.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 mb-4 w-full">
                        <Image src="/assets/UI/imagevghj.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] uppercase sm:text-[35px] text-[26px] leading-[1]">
                                    Marketing <br></br>Solutions
                                </h1>
                                <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                    At Script Studio, we enhance your brand’s presence with our comprehensive marketing strategies, including:
                                </p>
                                <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc list-inside">
                                    <li>Branding</li>
                                    <li>Brand Name</li>
                                    <li>Brand Guidelines</li>
                                    <li>Strategy Development</li>
                                    <li>Digital Marketing</li>
                                    <li>SEO Optimization</li>

                                </ul>

                            </div>
                        </div>

                    </div>


                </div>
            </section>






            <section className="  lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]">
                <div className="flex flex-wrap">


                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[22px] uppercase text-white leading-[1]">
                                Transforming<br></br>Businesses
                                </h1>


                                <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">

                                We partner with clients across industries to simplify, strengthen, and transform their businesses, driving success through tailored UX/UI design and digital solutions.
                                </p>
                                <div className="flex">
                                    <button className='underline flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full pt-4  order-lg-2 order-1">
                        <Image src="/assets/UI/imagev uhxii.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full" />
                    </div>
                </div>



            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 w-full">
                        <Image src="/assets/UI/imageihiio.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  " />
                    </div>

                    <div className="col-md-6 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">
                                
                                <h1 className="lg:text-[40px] sm:text-[35px] uppercase text-[26px] leading-[1]">
                                Industry <br></br>Impact
                                </h1>
                               








                                <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                Our work spans across multiple sectors, including:
                                </p>
                                <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc list-inside">
                                    <li>FoodTech</li>
                                    <li>FinTech</li>
                                    <li>HealthTech</li>
                                    <li>AI Bots</li>
                                    <li>TravelTech</li>
                                    <li>E-commerce</li>
                                    <li>EdTech</li>

                                </ul>
                                <div className="flex">
                                    <button className='underline flex'>Let’s Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap">


                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">
                                <div className="pb-3 pt-3 uppercase text-gray-400">Guilt free testing</div>
                                <h1 className="lg:text-[40px] sm:text-[30px] uppercase text-[22px]  text-white leading-[1]">
                                UI Testing
                                </h1>


                                <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">


                                Script Studio Technology Pvt. Ltd., a leading UI/UX development company, specializes in creating clean, platform-compatible code tailored to client preferences, with a focus on maximizing business potential.
                                </p>
                                <div className="flex">
                                    <button className='underline flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 w-full order-lg-2 order-1">
                        <Image src="/assets/UI/imagev uhxii.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg w-full " />
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
