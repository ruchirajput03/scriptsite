'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import Header from "@/app/compontes/header"
import Footer from "@/app/compontes/footer"
export default function Home() {


    return (
        <><Header />


            <motion.section
                className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className='col-lg-6'>
                    <h1 className="lg:text-[60px] sm:text-[40px] text-[20px] lg:leading-[65px] sm:leading-[45px] leading-[35px]">
                        BRAND DESIGN SERVICES
                    </h1>

                </div>
                <div >
                    <p className="text-gray-400 lg:mt-4  lg:text-[20px] sm:text-[40px] text-[16px] lg:leading-[25px] sm:leading-[45px] leading-[35px]">
                        Create a Brand Your Customers Will Love</p>
                    <button className=" lg:px-6 lg:py-2 px-2.5 mb-4  lg:mt-4 py-2 border border-white lg:text-lg text-[12px] rounded-full hover:bg-white hover:text-black transition-all">
                        <p className='p-0 m-0 lg:text-[0.8vw]'> GET A FREE CONSULTATION</p>
                    </button>
                </div>

                <div className="lg:mt-16 flex justify-start w-full">
                    <Image src="/assets/brand.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg w-full" />
                </div>
            </motion.section>


            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="pb-3 lg:pt-3 text-gray-400">Script Studio / Brand Design</div>
                <div className="flex flex-wrap">
                    <div className="col-lg-6 order-lg-1 mt-4 order-2">


                        <h1 className="lg:text-[60px] sm:text-[40px] uppercase text-[20px] lg:leading-[65px] sm:leading-[45px] leading-[35px] ">
                            Branding That Makes an Impact
                        </h1>
                        <div className="col-lg-9">
                            <p className="mt-4 text-white font-semibold lg:text-[16px] sm:text-[12px] text-[14px]">
                                At Script Studio, we help businesses rise above the noise with strategic, purpose-driven brand design. Our approach goes beyond just aesthetics; we focus on delivering brands that resonate with your audience, drive loyalty, and spark conversations. Whether you&apos;re launching a new venture or revamping an existing identity, we ensure that your brand stands tall and speaks volumes.
                            </p>
                            <h4 className='lg:text-[26px] sm:text-[24px] text-[22px] mt-4'>What is a Brand?</h4>
                            <p className="text-gray-400 mt-4 lg:text-[16px] sm:text-[12px] text-[14px]">
                                Your brand is your story told visually. It&apos;s how your business communicates with your audience, and how customers identify with you. A strong brand builds trust and fosters connection. At Script Studio, we start by understanding your unique vision, goals, and market challenges. We then conduct in-depth research into your industry, competitors, and audience preferences. This allows us to craft a brand identity that speaks directly to your target demographic, cutting through the clutter and leaving a lasting impression.
                            </p></div>

                        <div className="flex flex-wrap">

                            <div className="col-lg-5 mt-4">

                                <h5 className="text-white font-semibold">Innovative Brand Design?</h5>
                                <p className="text-gray-400 mt-4 lg:text-[16px] sm:text-[12px] text-[14px] col-lg-11">
                                In today cluttered world, there are so many advertising messages sent out to consumers on a daily basis, our design team are experts in ensuring your brand is noticed by your targeted customers. At Wirefox, we value long-term working relationships. The thing about relationships, of course, is that they always start with a conversation.</p>
                                <div className="flex">
                                    <button className='underline flex'>Let&apos;s Talk<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>



                            </div>
                            <div className="border-r-2 border-gray-600 mt-4 mr-6 sm:block hidden "></div>
                            <div className="col-lg-6 mt-4 ">

                                <h5 className="text-white font-semibold">Creating and evolving our favourite
                                    brands through great design.</h5>
                                <p className="text-gray-400 mt-4  lg:text-[16px] sm:text-[12px] text-[14px] ">
                                    Our team creates the right artwork for digital and print based designs ensuring they have the desired effect. From brainstorming impactful stand out designs, we can also print your literature with cost-effective rates and arrange delivery.</p>



                            </div>



                        </div>

                    </div>


                    <div className="col-lg-6 order-lg-2 order-1 lg:mt-20 mt-4">

                        <Image src="/assets/Border27.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg" />
                    </div></div>
            </section>


            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 rounded-lg shadow-lg ">
                        <div className="col-lg-11 w-full">
                        <Image src="/assets/ruchi.png" alt="Web Design" width={1080} height={1080} loading="lazy" className=" w-full" />
                    </div></div>

                    <div className="col-lg-6">
                        <div className="pb-3 pt-3 text-gray-400">BRANDING & CREATIVE AGENCY</div>
                        <h1 className="lg:text-[40px] sm:text-[35px] text-[26px] leading-[1]">
                            EXPERT<br></br> DESIGNERS
                        </h1>
                        <h4 className='lg:text-[26px] sm:text-[24px] text-[22px] mt-4'>What Makes Us Different?</h4>

                        <p className="mt-4  lg:text-[18px] sm:text-[12px] text-[14px]  text-12px">
                            We&apos;re not just about following trends. We&apos;re about creating meaningful, tailored brand identities that reflect your unique voice. What sets us apart? Our team&apos;s commitment to understanding your audience&apos;s psychology—how color, shapes, typography, and overall design affect perception. Every detail plays a part in making your brand truly memorable.
                        </p>
                        <p className="mt-4  lg:text-[16px] sm:text-[12px] text-[14px] ">
                            Whether you&apos;re a startup looking to make a splash, a business refreshing its identity, or launching a new product, we&apos;re here to help. From business cards to websites, brochures to banners, we design all the elements that make up your brand&apos;s story. Every piece needs to work in harmony to make a bold statement.
                        </p>


                    </div>


                </div>
            </section>
            <section className="  lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap">


                    <div className="col-lg-6 order-lg-1 order-2 ">
                       
                        <div className="pb-3 pt-3 text-gray-400">CREATING BRANDS TO INSPIRE BUSINESS</div>
                        <h1 className="lg:text-[40px] sm:text-[30px] text-[22px]  text-white leading-[1]">
                            BRANDING <br></br>AGENCY
                        </h1>


                        <p className="mt-4  lg:text-[16px] sm:text-[12px] text-[14px] ">


                            At Script Studio, we are a creative branding agency that builds brands with purpose. We believe that design is more than just making something look good—it’s about creating a cohesive, strategic identity that inspires trust, sparks emotions, and drives business growth. From concept to execution, we’re with you every step of the way, ensuring that your brand not only looks amazing but also drives results.
                        </p>
                        <div className="flex">
                            <button className='underline flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 w-full order-lg-2 order-1">
                  
                        <Image src="/assets/ruchi1.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full p-4 md:p-8" />
             
                    </div>
                </div>



            </section>


            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 w-full">
                        <Image src="/assets/image-3.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg w-full shadow-lg p-4 " />
                    </div>

                    <div className="col-lg-6 ">
                        <div className="col-lg-10">
                        <div className="pb-3 pt-3 text-gray-400">BUSINESS FOCUSED DESIGN</div>
                        <h1 className="lg:text-[40px] sm:text-[35px] text-[26px] leading-[1]">
                            Bespoke. Bold. Unforgettable.
                        </h1>

                        <p className="mt-4  lg:text-[16px] sm:text-[12px] text-[14px] ">
                            Forget cookie-cutter designs that lack personality. At Script Studio, we deliver bespoke branding solutions that stand out and make a statement. Our goal is simple: to create designs that reflect your business&apos; true essence, build trust, and leave an unforgettable mark on your customers.
                        </p>
                        <p className="mt-4  lg:text-[16px] sm:text-[12px] text-[14px] ">
                            Ready to elevate your brand to the next level? Whether you&apos;re looking for a complete rebrand or just a refresh, we&apos;re here to collaborate and bring your vision to life.
                        </p>
                        <div className="flex">
                            <button className='underline  lg:text-[16px] sm:text-[12px] text-[14px]  flex'>Let&apos;s Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                        </div>
                        </div>
                    </div>


                </div>
            </section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-5" >
                <div className="container-fluid p-0 m-0">
                    <div className=" col-lg-12 mt-8 ">
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
