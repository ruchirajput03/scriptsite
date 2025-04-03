'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "@/app/compontes/header"
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

    return (
       <><Header />
        

            <motion.section
                className="lg:px-[80px] px-[20px] overflow-hidden lg:pt-[80px] pt-[40px] "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div  className='col-lg-6'>
                    <h1 className="lg:text-[60px] sm:text-[40px] text-[20px] lg:leading-[65px] sm:leading-[45px] leading-[35px]">
                    BRAND DESIGN SERVICES
                    </h1>
                
                </div>
                <div >
                    <p className="text-gray-400 lg:mt-4  lg:text-[20px] sm:text-[40px] text-[16px] lg:leading-[25px] sm:leading-[45px] leading-[35px]">
                    Create a Brand Your Customers Will Love</p>
                    <button className="lg:mt-8 mb-4 lg:px-3 lg:py-2 px-2 py-1 text-lg border border-white rounded-full hover:bg-white hover:text-black transition-all">
                        GET A FREE CONSULTATION
                    </button>
                </div>
              
                <div className="lg:mt-16 flex justify-start w-full">
                    <Image  src="/assets/brand.png"  alt="Web Design"  width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg w-full"  />
                </div>
            </motion.section>


            <section className="lg:px-[80px] px-[20px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="pb-3 lg:pt-3 text-gray-400">Script Studio / Brand Design</div>
                <div className="flex flex-wrap">
                    <div className="col-lg-6">


                        <h1 className="lg:text-[60px] sm:text-[40px] uppercase text-[20px] lg:leading-[65px] sm:leading-[45px] leading-[35px] ">
                        Branding That Makes an Impact
                        </h1>
                        <div className="col-lg-9">
                            <p className="mt-4 text-white font-semibold lg:text-[16px] sm:text-[12px] text-[16px]">
                            At Script Studio, we help businesses rise above the noise with strategic, purpose-driven brand design. Our approach goes beyond just aesthetics; we focus on delivering brands that resonate with your audience, drive loyalty, and spark conversations. Whether you’re launching a new venture or revamping an existing identity, we ensure that your brand stands tall and speaks volumes.
                            </p>
                            <h4 className='lg:text-[26px] sm:text-[24px] text-[22px] mt-4'>What is a Brand?</h4>
                            <p className="text-gray-400 mt-4 text-[14px]">
                            Your brand is your story told visually. It’s how your business communicates with your audience, and how customers identify with you. A strong brand builds trust and fosters connection. At Script Studio, we start by understanding your unique vision, goals, and market challenges. We then conduct in-depth research into your industry, competitors, and audience preferences. This allows us to craft a brand identity that speaks directly to your target demographic, cutting through the clutter and leaving a lasting impression.
                            </p></div>

                        <div className="flex flex-wrap">

                            <div className="col-lg-5 mt-4">

                                <h5 className="text-white font-semibold">Innovative Brand Design?</h5>
                                <p className="text-gray-400 mt-4 lg:text-[14px] sm:text-[12px] col-lg-11">
                                Your brand is your story told visually. It’s how your business communicates with your audience, and how customers identify with you. A strong brand builds trust and fosters connection. At Script Studio, we start by understanding your unique vision, goals, and market challenges. We then conduct in-depth research into your industry, competitors, and audience preferences. This allows us to craft a brand identity that speaks directly to your target demographic, cutting through the clutter and leaving a lasting impression.</p>
                                <div className="flex">
                        <button className='underline flex'>Let’s Talk<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                        </div>

                               

                            </div>
                            <div className="border-r-2 mt-4 mr-6 sm:block hidden"></div>
                            <div className="col-lg-6 mt-4 ">

                                <h5 className="text-white font-semibold">Creating and evolving our favourite
                                brands through great design.</h5>
                                <p className="text-gray-400 mt-4 text-[14px]">
                                Our team creates the right artwork for digital and print based designs ensuring they have the desired effect. From brainstorming impactful stand out designs, we can also print your literature with cost-effective rates and arrange delivery.</p>

                              

                            </div>



                        </div>

                    </div>


                    <div className="col-lg-6 mt-20">

                        <Image src="/assets/Border27.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg" />
                    </div></div>
            </section>"

            <section className="  lg:px-[80px] px-[20px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap ">
                    <div className="col-lg-6 ">
                        <Image src="/assets/Border 2.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg " />
                    </div>

                    <div className="col-lg-6 ">
                        <div className="pb-3 pt-3 text-gray-400 ">BRANDING & CREATIVE AGENCY</div>
                        <h1 className="lg:text-[40px] sm:text-[30px] text-[20px]  text-white leading-[1]">
                        EXPERT<br></br> DESIGNERS
                        </h1>
                        <h4 className='lg:text-[26px] sm:text-[24px] text-[22px] mt-4'>What Makes Us Different?</h4>
                        <p className="mt-4 text-[16px]">
                        We’re not just about following trends. We’re about creating meaningful, tailored brand identities that reflect your unique voice. What sets us apart? Our team’s commitment to understanding your audience’s psychology—how color, shapes, typography, and overall design affect perception. Every detail plays a part in making your brand truly memorable.
                        </p>
                        
                        <p className="mt-4 lg:text-[16px] sm:text-[14px]">
                        Whether you're a startup looking to make a splash, a business refreshing its identity, or launching a new product, we’re here to help. From business cards to websites, brochures to banners, we design all the elements that make up your brand’s story. Every piece needs to work in harmony to make a bold statement.
                        </p>
                    </div>
                </div>



            </section>
            <section className="  lg:px-[80px] px-[20px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap">


                    <div className="col-lg-6 ">
                        <div className="pb-3 pt-3 text-gray-400">CREATING BRANDS TO INSPIRE BUSINESS</div>
                        <h1 className="lg:text-[40px] sm:text-[30px] text-[22px]  text-white leading-[1]">
                        BRANDING <br></br>AGENCY
                        </h1>

                        
                        <p className="mt-4 lg:text-[16px] sm:text-[14px]">


                        At Script Studio, we are a creative branding agency that builds brands with purpose. We believe that design is more than just making something look good—it’s about creating a cohesive, strategic identity that inspires trust, sparks emotions, and drives business growth. From concept to execution, we’re with you every step of the way, ensuring that your brand not only looks amazing but also drives results.
                        </p>
                        <div className="flex">
                        <button className='underline flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <Image src="/assets/image-2.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full p-4 md:p-8" />
                    </div>
                </div>



            </section>

           
            <section className="lg:px-[80px] px-[20px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6">
                    <Image src="/assets/image-3.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg p-4 " />
                    </div>

                    <div className="col-lg-6">
                        <div className="pb-3 pt-3 text-gray-400">BUSINESS FOCUSED DESIGN</div>
                        <h1 className="lg:text-[40px] sm:text-[35px] text-[26px] leading-[1]">
                        Bespoke. Bold. Unforgettable.
                        </h1>
                        
                        <p className="mt-4 lg:text-[18px] sm:text-[14px] text-12px">
                        Forget cookie-cutter designs that lack personality. At Script Studio, we deliver bespoke branding solutions that stand out and make a statement. Our goal is simple: to create designs that reflect your business’ true essence, build trust, and leave an unforgettable mark on your customers.
                        </p>
                        <p className="mt-4 lg:text-[18px] sm:text-[14px] text-12px">
                        Ready to elevate your brand to the next level? Whether you’re looking for a complete rebrand or just a refresh, we’re here to collaborate and bring your vision to life.
                        </p>
                        <div className="flex">
                        <button className='underline flex'>Let’s Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                        </div>

                    </div>


                </div>
            </section>
           

         
            

            
            <div className="border-t-2 ms-5 me-5 mt-16 sm:block hidden"></div>
            <section className="lg:px-[80px] px-[20px] overflow-hidden lg:pt-[80px] pt-[40px] ">
            
            <div className=" pt-2 ">BLOG</div>
                <h2 className="lg:text-[50px] sm:text-[40px] text-[26px] font-semibold text-left mt-4 mb-10">LATEST NEWS <br/>& PRESS</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
                    {newsData.map((item, index) => (
                        <div
                            key={index}
                            className="relative group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <Image
                                src={item.image}
                                alt={item.alt}
                                width={547}
                                height={365}
                                loading="lazy"
                                className="transition-opacity duration-300 group-hover:opacity-75"
                            />
                            <div className="p-6">
                                <p className="text-gray-300 text-lg font-small">{item.text}</p>

                                <p className="pt-6 text-gray-400 text-sm uppercase font-semibold">{item.date}</p>

                            </div>

                        </div>
                    ))}
                </div>
                <div className="flex justify-center  mt-10 mb-8 ">
                    <button type="button" className="text-white hover:text-gray-400 border  border-white hover:bg-black justify-center text-center rounded-3xl px-2 py-1 " >VIEW ALL BLOGS</button>
                  </div>
            </section>
     
        </>
    );
}
