import React from "react";

import Header from "@/app/compontes/header"
import Footer from "@/app/compontes/footer"
import Form from 'next/form'


export default function Home() {
    return (
        <>
            <Header />
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px] mb-4">
                <div className="container-fluid p-0 m-0">
                    <div className="row justify between">

                        <div className=" col-lg-4 align-items-center mt-4 ">
                            <p className="lg:text-[14px] sm:text-[18px] text-[12px] text-[#EEEEEE]"  >KICKSTARTING THE CONVERSATION</p>

                        </div>
                        <div className="col-lg-6 align-items-center">
                            <p className="lg:text-[18px] sm:text-[18px] text-[12px] text-[#EEEEEE]" >FROM CONCEPT TO CREATION, WE&apos;VE GOT YOU COVERED — LET&apos;S TALK!</p>
                        </div>
                    </div>
                </div>
                <hr className=" mt-10 h-1 "></hr>
            </section>
            <section className="sm:px-[100px] px-[40px]   pb-5 mb-4">
                <div className="container-fluid p-0 m-0">
                    <div className="flex flex-wrap justify between">

                        <div className="col-lg-4">
                            <div className=" col-lg-6 align-items-center ">
                                <p className="lg:text-[14px] sm:text-[18px] text-[12px] text-[#EEEEEE]" >UNLASH YOUR IMAGINATION, AND LET DESIGN WEAVE ITS SPELL.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="col-lg-12 align-items-center mb-8">
                                <p className="lg:text-[18px] uppercase sm:text-[18px] text-[12px]" >   — Ready to turn your vision into reality? Drop your details below and watch the magic unfold!</p>

                            </div>
                            <div className=" mb-4 lg:flex lg:justify-start flex-wrap " >
                                <div className=" row col-xl-12">
                                    <Form action="/search" className="   text-white   ">


                                        <div className="mb-4 mt-8">

                                            <p className="lg:text-[0.7vw] sm:text-[2vw] text-[3vw]"> YOUR NAME</p>
                                            <input type="text" className="border-bottom lg:placeholder:text-[1.2vw] sm:placeholder:text-[2vw] placeholder:text-[3vw] bg-transparent border-white w-full !shadow-none focus:outline-none focus:ring-0 mb-2" name="name" placeholder="Full name" />
                                            <p className="lg:text-[0.7vw] sm:text-[2vw] text-[3vw] mt-8"> YOUR EMAIL</p>
                                            <input type="text" className="border-bottom lg:placeholder:text-[1.2vw] sm:placeholder:text-[2vw] placeholder:text-[3vw]  bg-transparent border-white w-full !shadow-none focus:outline-none focus:ring-0 mb-2" name="name" placeholder="Email Address" />

                                            <p className="lg:text-[0.7vw] sm:text-[2vw] text-[3vw] mt-4"> YOUR MESSAGE</p>
                                            <textarea rows={3} id="textarea" className="border-bottom bg-transparent  lg:placeholder:text-[1.2vw] sm:placeholder:text-[2vw] placeholder:text-[3vw]  border-white w-full !shadow-none focus:outline-none focus:ring-0 mb-2  " name="name" placeholder="What is your Project goals, requirement and specific timeline..." />
                                            <p className="lg:text-[0.7vw] sm:text-[2vw] text-[3vw] mt-10">PROJECT BUDGET</p>
                                            <input id="textarea" className="border-bottom bg-transparent  lg:placeholder:text-[1.2vw] sm:placeholder:text-[2vw] placeholder:text-[3vw]  border-white w-full !shadow-none focus:outline-none focus:ring-0 mb-2  " name="name" placeholder="What is your Budget (USD)" />




                                        </div>
                                        <div>

                                        </div>
                                        <button type="button" className="text-[#EEEEEE]  border border-white  sm:pl-[10px] text-center rounded-3xl lg:px-5 lg:py-2 px-2 py-1  mb-4 mt-4" >SUBMIT REQUEST </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
};