import React from "react";
import Image from "next/image";

import Header from "@/app/compontes/header"
import Footer from "@/app/compontes/footer"
import Form from 'next/form'


export default function Home() {
    return (
        <>
            <Header />
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px] mb-4">
                <div className="container-fluid p-0 m-0">

                    <div className="lg:flex gap-20 justify-between mb-4">
                        <div className="col-lg-6 mb-4">
                            <button type="button" className="mb-4">BACK</button>
                            <h1 className="text-[#8D8DFF] mb-4">UI/UX DESIGNER</h1>
                            <div className="col-lg-8">
                                <p className="text-[#BEBEBE] lg:text-[18px] sm:text-[16px] text-[14px]">At Script Studio we help our clients achieve the efficiency and ROI they need to succeed. We are currently searching for a talented and motivated Search UI UX Designer to become a crucial part of our team.</p></div>
                            <div className="flex items-center gap-4 flex-wrap">
                                <div className=" flex mb-4 gap-2">
                                    <Image
                                        src="/assets/Group 17640.png"
                                        alt="..."
                                        width={500}
                                        height={500}
                                        className="rounded-[10px] p-0 m-0 w-[25px]  "
                                    />
                                    <p className="m-0 p-0 ">Remote</p>
                                </div>
                                <div className=" flex mb-4 gap-2">
                                    <Image
                                        src="/assets/Group 17642.png"
                                        alt="..."
                                        width={500}
                                        height={500}
                                        className="rounded-[10px] p-0 m-0 w-[20px] h-[20px] "
                                    />
                                    <p className="m-0 p-0 ">Full-Time</p>
                                </div>
                                <div className=" flex mb-4 gap-2">
                                    <Image
                                        src="/assets/Vector.png"
                                        alt="..."
                                        width={500}
                                        height={500}
                                        className="rounded-[10px] p-0 m-0 w-[25px] h-[20px] "
                                    />
                                    <p className="m-0 p-0 ">2-years</p>
                                </div>


                            </div>

                            <h2 className="mt-4">About the job</h2>

                            <p className="text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]">At Script Studio, we help our clients achieve the efficiency and ROI they need to succeed. We are currently looking for a talented and motivated UI/UX Designer to become an integral part of our team. You will play a key role in designing and optimizing user experiences that are intuitive, engaging, and performance-driven. Your work will directly impact the success of our digital campaigns and contribute to the growth of our clients’ brands. This position offers the opportunity to work on diverse, innovative projects with a team that thrives on creativity.</p>

                            <h2 className="mt-4">About You</h2>

                            <p className="text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]">As a detail-oriented and motivated UI/UX Designer, you have a natural flair for understanding user behavior and turning complex problems into simple, beautiful designs. You have a keen eye for design and user experience principles, paired with technical proficiency in designing and prototyping tools. You are comfortable working in a remote environment and have strong communication skills to collaborate effectively with the team and clients.</p>


                            <h2 className="mt-4 mb-4">Perks of Working at ScriptStudio:</h2>
                           <div className="flex mb-4">
                            <li><span className="font-bold lg:text-[17px] sm:text-[17px] text-[16px] "> Freedom and Creativity:</span> <span className="text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]">You&apos;ll have the autonomy to drive your own design projects and contribute creatively to campaigns.</span></li></div>

                               
                           <div className="flex mb-4">
                            <li><span className="font-bold lg:text-[17px] sm:text-[17px] text-[16px] "> Remote Flexibility: </span> <span className="text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]"> Work from the comfort of your own space, anywhere in the world.</span></li></div>

                               
                           <div className="flex mb-4">
                            <li><span className="font-bold lg:text-[17px] sm:text-[17px] text-[16px] "> Collaborative Environment: </span><span className=" text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]">Work alongside a team of talented professionals in a culture that fosters innovation and mutual support.</span></li></div>

                                
                           <div className="flex mb-4">
                            <li><span className="font-bold lg:text-[17px] sm:text-[17px] text-[16px] ">Performance Rewards:</span> <span className="text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]">We recognize and reward outstanding work with a bonus system that reflects your contributions.</span></li></div>

                                
                           <div className="flex mb-4">
                            <li><span className="font-bold lg:text-[17px] sm:text-[17px] text-[16px] "> Career Growth:</span> <span className="text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]"> Opportunities for continuous development and career advancement in an ever-growing digital landscape.</span></li></div>
                            
                           
                            <h2 className="mt-4 mb-4">Responsibilities</h2>
                           <div className="flex mb-4">
                            <li><span className="font-bold lg:text-[17px] sm:text-[17px] text-[16px] ">Design Intuitive Interfaces: </span><span className="text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]">Create user-friendly and visually appealing designs that align with client goals and user needs.</span></li></div>

                               
                           <div className="flex mb-4">
                            <li><span className="font-bold lg:text-[17px] sm:text-[17px] text-[16px] "> User Research & Testing:  </span> <span className="text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]"> Conduct user research to identify pain points and gather insights, driving improvements in user flows and interactions.</span></li></div>

                               
                           <div className="flex mb-4">
                            <li><span className="font-bold lg:text-[17px] sm:text-[17px] text-[16px] "> Wireframing & Prototyping:  </span><span className=" text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]">Develop wireframes and prototypes to effectively communicate design concepts and interact with stakeholders.</span></li></div>

                                
                           <div className="flex mb-4">
                            <li><span className="font-bold lg:text-[17px] sm:text-[17px] text-[16px] ">Collaborate Across Teams:</span> <span className="text-[#BEBEBE]"> Work closely with developers and other team members to ensure designs are implemented seamlessly.</span></li></div>

                                
                           <div className="flex mb-4">
                            <li><span className="font-bold lg:text-[17px] sm:text-[17px] text-[16px] "> Continuous Optimization: </span> <span className="text-[#BEBEBE] lg:text-[16px] sm:text-[16px] text-[15px]">Analyze user feedback and performance data to continuously improve UI/UX designs, optimizing for both user satisfaction and business outcomes.</span></li></div>


                                


                        </div>
                        <div className="  col-lg-6 mb-4 order-lg-1 order-2 ">
                            <div className=" row col-lg-10">
                                <Form action="/search" className="bg-white  rounded-[20px] text-[#505759] p-5 mt-2 ">
                                    <h3 className="mt-2" >APPLY NOW</h3>
                                    <p className="text-[#505759] lg:text-[16px] sm:text-[16px] text-[15px]">Fill out this form, and we will forward your information to the hiring manager!</p>
                                    <div className="mb-4">
                                        <input type="text" className="form-control  mb-2" name="name" placeholder="Enter your name*" />
                                        <input type="text" className="form-control mb-2" name="name" placeholder="Enter Your Email*" />
                                        <input type="text" className="form-control mb-2" name="name" placeholder="Postion*" />
                                        <div className="flex gap-3 ">
                                            <input type="checkbox" id="id" name="name" value="value" />
                                            <label className="p-0 m-0"> I agree with the <span className="underline"> Privacy Policy</span></label></div>


                                    </div>
                                    <div>

                                    </div>
                                    <button type="button" className="text-black hover:text-white border border-blacl hover:bg-gray-100  sm:pl-[10px] text-center rounded-3xl px-3 py-2  mb-4" >APPLY FOR THIS JOB </button>
                                </Form>
                            </div>
                        </div>



                    </div>

                </div>
            </section>

<Footer/>
        </>
    );
}
