"use client";

import Image from "next/image";
import Header from "@/app/compontes/header";
import Footer from "@/app/compontes/footer";
import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

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
            <section className="overflow-hidden lg:px-[80px] px-[40px]  pb-4 lg:pt-[150px] pt-[150px]">
       
                <div className="container-fluid p-0 m-0">
                    <div className=" row align-items-center ">
                        <h2 className="text-center ">OUR MISSION</h2>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="col-lg-8">
                <p className=" lg:text-[20px] sm:text-[18px] text-[14px] mt-3 text-[#F6E3E3] text-center">Our mission here at Script Studio goes hand in hand with the vision of our clients, helping brands with innovative and bespoke digital solutions. We aim to provide an exceptional user experience, effective design and assist in business development in the continuously evolving digital world. By merging imagination with contemporary technology, we prepare the very best professional techniques for any business to excel in every aspect.</p>
                <p className=" lg:text-[22px] sm:text-[18px] text-[14px] mt-3 text-[#F6E3E3] text-center">Our company goals include cultivating longstanding relations with customers by making their concepts tangible and realizing achievable targets that are proofing to the specified audience.</p></div></div>
            </section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-2 pb-4" >
                <div className="flex justify-center mb-8 ">
                    <button type="button" className="text-[#ffff] border mb-4 items-center  border-white hover:bg-[#ffff] hover:text-[#000] justify-center text-center rounded-3xl px-2 py-1 " >ACCELERATE YOUR GROWTH</button>
                </div>
            </section>

            <section className="overflow-hidden  lg:px-[80px] px-[40px]  pt-2 pb-4" data-aos="flip-up">
                <div className=""  >
                    <Image
                        src="/assets/Group 17612.png"
                        alt="..."
                        width={1080}
                        height={1080}
                        className=" p-0 m-0 w-full "
                    />
                </div></section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-4"  data-aos="fade-up"
    >
                <div className="container-fluid p-0 m-0">
                    <div className=" row align-items-center ">
                        <h2 className="text-center ">ABOUT SCRIPT STUDIO</h2>
                    </div>
                </div>
                <p className="  mt-3 lg:text-[20px] lg:px-[80px] px-[0px] sm:text-[18px] text-[14px] text-[#F6E3E3] text-center">Script Studio is not just a digital agency; it is a creative hub fueled by passion and growth. Our team consists of the top 3% of designers, developers, and digital professionals, dedicated to crafting innovative solutions that solve challenges and strengthen brands. We thrive on finding creative ways to build meaningful digital experiences that elevate businesses.</p>
                <p className=" mt-3 lg:text-[20px] lg:px-[80px] px-[0px] sm:text-[18px] text-[14px] text-[#F6E3E3] text-center">We understand that every project is unique, so we offer a flexible approach tailored to meet your specific requirements and objectives. Whether it&apos;s creating a stunning website, developing eye-catching branding, or designing intuitive digital products, we&apos;ve got you covered.</p>
                <p className=" mt-3 lg:text-[20px] lg:px-[80px] px-[0px] sm:text-[18px] text-[14px] text-[#F6E3E3] text-center">Our expertise spans various areas, including web and UI/UX design, motion graphics, and brand strategy. By fusing innovation with imagination, we ensure that every solution is not just functional but also impactful. We are committed to providing our clients with an exceptional experience, working closely with them to deliver results that exceed expectations.</p>
                <p className="  mt-3 lg:text-[20px] sm:text-[18px] lg:px-[80px] px-[0px] text-[14px] text-[#F6E3E3] text-center">
                    At Script Studio, we help companies break barriers in today&apos;s digitally driven world, regardless of whether they are just starting or already well-established. We don&apos;t just design—we develop, refine, and transform ideas into distinctive digital solutions that drive emotions and connect with audiences.</p>
            </section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] lg:pt-20 pt:10 pb-4" data-aos="fade-up">
                <div className="container-fluid p-0 m-0">
                    <div className=" row align-items-center ">
                        <h2 className="text-center ">OUR STORY</h2>
                    </div>
                </div>
                <p className="  mt-3 lg:text-[20px] lg:px-[80px] px-[0px] sm:text-[18px] text-[14px] text-[#F6E3E3] text-center">At Script Studio, we don&apos;t just build digital solutions—we craft experiences, nurture relationships, and fuel growth. Our journey has always been about pushing boundaries, sparking innovation, and helping our clients thrive in an ever-evolving digital world. We believe in the power of collaboration and the magic that happens when ideas are shared openly. Transparency and communication are at the core of every project, ensuring that we are not just meeting expectations but surpassing them.</p>

            </section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-4" data-aos="fade-up">
                <div className="container-fluid p-0 m-0">
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="col-lg-12 text-end text-[#8D8DFF]"><h2 className="p-0 m-0">2017</h2></div>

                        </div>
                        <div className="col-lg-6 border-l-2">
                            <div className="flex items-start">
                                <div className="relative w-3 h-3 left-[-20px] top-4  bg-white rounded-full sm:block hidden  border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <div className="col-lg-11 text-start ">

                                    <h5 >The Beginning of a Bold Vision</h5>
                                    <div ><p className="text-[#C8C9C7] text-start">Script Studio was born from a desire to revolutionize the digital landscape. With a clear vision to combine creativity with technology, we set out to leave our mark in the world of design, development, and digital solutions. We started small, but our passion for innovation and our commitment to helping businesses succeed grew quickly.</p></div>
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="col-lg-12 text-end text-[#8D8DFF]"><h2 className="p-0 m-0">2018</h2></div>

                        </div>
                        <div className="col-lg-6 border-l-2">
                            <div className="flex items-start">
                                <div className="relative w-3 h-3 left-[-20px] top-4  bg-white rounded-full  border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <div className="col-lg-11 text-start ">

                                    <h5 >Stepping into Performance Marketing</h5>
                                    <div><p className="text-[#C8C9C7] text-start">After a year of building our foundation, we saw a new opportunity to transform the way brands connect with their audience. We dove into performance marketing, focusing on strategies that didn&apos;t just reach people but truly engaged and converted them. This leap forward sharpened our focus on creating meaningful, results-driven campaigns that deliver real impact.</p></div>
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="col-lg-12 text-end text-[#8D8DFF]"><h2 className="p-0 m-0">2019</h2></div>

                        </div>
                        <div className="col-lg-6 border-l-2">
                            <div className="flex items-start">
                                <div className="relative w-3 h-3 left-[-20px] top-4  bg-white rounded-full  border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <div className="col-lg-11 text-start ">

                                    <h5 >A Milestone to Celebrate</h5>
                                    <div><p className="text-[#C8C9C7] text-start">What a year! Our dedication and relentless pursuit of excellence paid off. Script Studio hit a major milestone when Adsorb reached $1 million in revenue. This achievement wasn&apos;t just a number—it was a validation of our strategy, our hard work, and our growing reputation as a trusted partner in digital innovation.</p></div>
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="col-lg-12 text-end text-[#8D8DFF]"><h2 className="p-0 m-0">2020</h2></div>

                        </div>
                        <div className="col-lg-6 border-l-2">
                            <div className="flex items-start">
                                <div className="relative w-3 h-3 left-[-20px] top-4  bg-white rounded-full  border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <div className="col-lg-11 text-start ">

                                    <h5 >Resilience in the Face of Adversity</h5>
                                    <div><p className="text-[#C8C9C7] text-start">When the world changed, we adapted. The global challenges of 2020 only strengthened our resolve to deliver exceptional results. Our ability to stay agile and resilient allowed us to continue providing top-tier digital solutions, supporting businesses as they navigated uncertain waters, and ensuring that our clients&apos; goals were met—even in the toughest times.</p></div>
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="col-lg-12 text-end text-[#8D8DFF]"><h2 className="p-0 m-0">2021</h2></div>

                        </div>
                        <div className="col-lg-6 border-l-2">
                            <div className="flex items-start">
                                <div className="relative w-3 h-3 left-[-20px] top-4  bg-white rounded-full  border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <div className="col-lg-11 text-start ">

                                    <h5 >Growth, Expansion, and Innovation</h5>
                                    <div><p className="text-[#C8C9C7] text-start">This was our year to scale. We grew our talented team, expanded our client base, and reached new markets. With fresh ideas and a renewed commitment to innovation, we pushed the boundaries of what was possible in digital design, development, and marketing. This year set the stage for even bigger things to come.</p></div>
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="col-lg-12 text-end text-[#8D8DFF]"><h2 className="p-0 m-0">2022</h2></div>

                        </div>
                        <div className="col-lg-6 border-l-2">
                            <div className="flex items-start">
                                <div className="relative w-3 h-3 left-[-20px] top-4  bg-white rounded-full  border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <div className="col-lg-11 text-start ">

                                    <h5 >Breaking Records and Setting New Standards</h5>
                                    <div><p className="text-[#C8C9C7] text-start">2022 was nothing short of extraordinary. It was a year of milestones as we surpassed 8 figures in revenue and secured our place among the top performance advertisers on multiple platforms. Our success wasn&apos;t just about numbers—it was about being recognized for the impact we made in the industry and the lives we touched through our work.</p></div>
                                </div>
                            </div>



                        </div>

                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="col-lg-12 text-end text-[#8D8DFF]"><h2 className="p-0 m-0">2023</h2></div>

                        </div>
                        <div className="col-lg-6 border-l-2">
                            <div className="flex items-start">
                                <div className="relative w-3 h-3 left-[-20px] top-4  bg-white rounded-full  border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <div className="col-lg-11 text-start ">

                                    <h5 >Entering the Partnership Era</h5>
                                    <div><p className="text-[#C8C9C7] text-start">With success under our belt, we took our growth to the next level. In 2023, we entered the era of strategic partnerships, forging strong relationships with industry leaders to broaden our capabilities and amplify our reach. Together, we&apos;re paving the way for even greater achievements, pushing creative limits and solving challenges that continue to shape the future of business.</p></div>
                                </div>
                            </div>



                        </div>

                    </div>

                </div>
            </section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-4"  data-aos="fade-up">
                <div className="container-fluid p-0 m-0">
                    <div className="col-lg-6 lg:mt-20 ">
                        <h1>OUR VALUES</h1>
                        <p className=" lg:text-[20px] sm:text-[18px] text-[14px] mt-4 lg:text-start  text-[#CBCBCB]">At Script Studio, we don&apos;t just follow best practices—we create them. Our commitment to excellence and our unwavering focus on our clients’ success fuel everything we do. We believe that collaboration and clear communication are at the heart of every great project, and we prioritize transparency at every step to ensure that our clients feel informed, valued, and empowered.</p>
                    </div>

                </div>

            </section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-4"  data-aos="zoom-in">
                <div className="container-fluid p-0 m-0">
                    <div className="row mb-4">

                        <div className="col-lg-4">
                            <Image
                                src="/assets/Group 17614.png"
                                alt="..."
                                width={1080}
                                height={1080}
                                className="rounded-[10px] p-0 m-0 w-[50px] "
                            />
                            <h3 className="mt-6">Efficiency:</h3>
                            <p className="text-[16px] text-[#B8B8B8]">In a world where time is precious, we understand that every second counts. That&apos;s why we focus on maximizing resources and streamlining processes to deliver remarkable results faster and smarter. Our approach combines the latest tools with finely-tuned strategies, ensuring that our solutions are both cost-effective and impactful, without ever compromising on quality.</p>

                        </div>
                        <div className="col-lg-4">
                            <Image
                                src="/assets/Group 17614.png"
                                
                                alt="..."
                                width={1080}
                                height={1080}
                                className="rounded-[10px] p-0 m-0 w-[50px] "
                            />
                            <h3 className="mt-6">Efficiency:</h3>
                            <p className="text-[16px] text-[#B8B8B8]">In a world where time is precious, we understand that every second counts. That&apos;s why we focus on maximizing resources and streamlining processes to deliver remarkable results faster and smarter. Our approach combines the latest tools with finely-tuned strategies, ensuring that our solutions are both cost-effective and impactful, without ever compromising on quality.</p>

                        </div>
                        <div className="col-lg-4">
                            <Image
                                src="/assets/Group 17614.png"
                                alt="..."
                                width={1080}
                                height={1080}
                                className="rounded-[10px] p-0 m-0 w-[50px] "
                            />
                            <h3 className="mt-6">Efficiency:</h3>
                            <p className="text-[16px] text-[#B8B8B8]">In a world where time is precious, we understand that every second counts. That&apos;s why we focus on maximizing resources and streamlining processes to deliver remarkable results faster and smarter. Our approach combines the latest tools with finely-tuned strategies, ensuring that our solutions are both cost-effective and impactful, without ever compromising on quality.</p>

                        </div>



                    </div>
                </div>


            </section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] lg:pt-8 pb-4" data-aos="fade-up">
                <div className="container-fluid p-0 m-0">
                    <div className="row mb-4">

                        <div className="col-lg-4">
                            <Image
                                src="/assets/Group 17614.png"
                                alt="..."
                                width={1080}
                                height={1080}
                                className="rounded-[10px] p-0 m-0 w-[50px] "
                            />
                            <h3 className="mt-6">Efficiency:</h3>
                            <p className="text-[16px] text-[#B8B8B8]">In a world where time is precious, we understand that every second counts. That&apos;s why we focus on maximizing resources and streamlining processes to deliver remarkable results faster and smarter. Our approach combines the latest tools with finely-tuned strategies, ensuring that our solutions are both cost-effective and impactful, without ever compromising on quality.</p>

                        </div>
                        <div className="col-lg-4">
                            <Image
                                src="/assets/Group 17614.png"
                                alt="..."
                                width={1080}
                                height={1080}
                                className="rounded-[10px] p-0 m-0 w-[50px] "
                            />
                            <h3 className="mt-6">Efficiency:</h3>
                            <p className="text-[16px] text-[#B8B8B8]">In a world where time is precious, we understand that every second counts. That&apos;s why we focus on maximizing resources and streamlining processes to deliver remarkable results faster and smarter. Our approach combines the latest tools with finely-tuned strategies, ensuring that our solutions are both cost-effective and impactful, without ever compromising on quality.</p>

                        </div>
                        <div className="col-lg-4">
                            <Image
                                src="/assets/Group 17614.png"
                                alt="..."
                                width={1080}
                                height={1080}
                                className="rounded-[10px] p-0 m-0 w-[50px] "
                            />
                            <h3 className="mt-6">Efficiency:</h3>
                            <p className="text-[16px] text-[#B8B8B8]">In a world where time is precious, we understand that every second counts. That&apos;s why we focus on maximizing resources and streamlining processes to deliver remarkable results faster and smarter. Our approach combines the latest tools with finely-tuned strategies, ensuring that our solutions are both cost-effective and impactful, without ever compromising on quality.</p>

                        </div>



                    </div>
                </div>
                <hr className="border border-1.9 "></hr>

            </section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-0 pb-4" data-aos="fade-up">
                <div className="container-fluid p-0 m-0">
                    <div className="col-lg-6 ">
                        <h1>MEET OUR TEAM</h1>
                        <p className=" lg:text-[20px] sm:text-[20px] text-[14px] text-start text-[#CBCBCB]">At Script Studio, we believe that success comes from the collaboration of talented individuals with diverse skills. Our dedicated team of designers, developers, marketers, and digital experts work together to help your business thrive in the ever-changing digital landscape. With a shared passion for innovation and excellence, we turn ideas into impactful results that drive growth and success. Meet the people behind Script Studio—your partners in digital success.</p>
                    </div>

                </div>

            </section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-4" data-aos="zoom-in">
                <div className="container-fluid p-0 m-0">
                    <div className="row mb-4">

                        <div className="col-lg-4">
                            <Image
                                src="/assets/image.png"
                                alt="..."
                                width={1080}
                                height={1080}
                                className=" p-0 m-0  "
                            />
                            <h3 className="mt-6">Akash Verma</h3>

                            <p className="lg:mt-2 mt-0 lg:text-[16px] text-[12px] text-[#D1D1D1]">Founder, Business Development Head</p>


                        </div>
                        <div className="col-lg-4">
                            <Image
                                src="/assets/image (2).png"
                                alt="..."
                                width={1080}
                                height={1080}
                                className=" p-0 m-0  "
                            />
                            <h3 className="mt-6">Akanksha Singh </h3>

                            <p className="lg:mt-2 mt-0 lg:text-[16px] text-[12px] text-[#D1D1D1]">Chief Financial Officer</p>


                        </div>
                        <div className="col-lg-4">
                            <Image
                                src="/assets/image (3).png"
                                alt="..."
                                width={1080}
                                height={1080}
                                className=" p-0 m-0  "
                            />
                            <h3 className="mt-6">Kalpana Kashyap</h3>

                            <p className="lg:mt-2 mt-0 lg:text-[16px] text-[12px] text-[#D1D1D1]">Human Resource Manager</p>


                        </div>



                    </div>
                </div>

            </section>

            <section className="overflow-hidden lg:px-[80px] px-[40px] lg:pt-4 pb-4" data-aos="fade-up">
                <div className="container-fluid p-0 m-0">
                    <div className="row align-items-center justify-between">

                        <div className="col-lg-6 mb-4">
                            <p className="lg:text-[30px] text-[15px] lg:leading-[35px] leading-[15px]">
                                At <span className="text-[#7070FF] ">Script Studio</span>, you can trust that you&apos;re partnering with a <span className="text-[#7070FF]">team of experts</span> committed to your<span className="text-[#7070FF]"> business&apos;s success.</span>
                            </p>

                        </div>


                        <div className="col-lg-6 mb-4 ">
                            <div className="flex justify-center">
                                <div>
                                    <p className="text-[#C8C9C7] lg:mt-9">Whether you&apos;re aiming to boost online sales, generate quality leads, or drive targeted traffic, we&apos;ve got the expertise to help you achieve your goals.
                                        </p>
                                        <p className="text-[#C8C9C7] lg:mt-9">
                                        Get in touch with us today and discover how we can elevate your marketing strategy and create lasting results for your business.</p>
                                    <button type="button" className="text-[#ffff] border mb-4 items-center border-white hover:bg-[#ffff] hover:text-[#000] sm:pl-[10px] text-center rounded-3xl lg:px-4 lg:py-3 mt-6 px-1 py-1" >CONTACT US NOW TO GET STARTED!</button>
                                </div>
                            </div>






                        </div>
                    </div>
                </div>

            </section>
<Footer/>
            </>
    );
}
