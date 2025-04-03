import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/compontes/header"
import Footer from "@/app/compontes/footer"
import Form from 'next/form'


export default function Home() {
  return (
  <>
  <Header/>
<section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px] mb-4">
        <div className="container-fluid p-0 m-0">
            <div className="row justify between">
                
            <div className=" col-lg-4 align-items-center ">
                <p className="lg:text-[15px] sm:text-[18px] text-[14px] text-[#EEEEEE]"  >KICKSTARTING THE CONVERSATION</p>
          
            </div>
            <div className="col-lg-3 align-items-center">
                <p className="lg:text-[15px] sm:text-[18px] text-[14px] text-[#EEEEEE]" >FROM CONCEPT TO CREATION, WE'VE GOT YOU COVERED— LET'S TALK!</p>
            </div>
        </div>
        </div>
        <hr className=" mt-10 h-1 "></hr>
        </section>
        <section className="sm:px-[100px] px-[20px]   pb-5 mb-4">
        <div className="container-fluid p-0 m-0">
            <div className="row justify between">
            <div className="col-lg-4">
            <div className=" col-lg-8 align-items-center ">
                <p className="lg:text-[15px] sm:text-[18px] text-[14px] text-[#EEEEEE]" >UNLASH YOUR IMAGINATION, AND LET DESIGN WEAVE ITS SPELL.</p>
            </div>
            </div>
            <div className="col-lg-3 align-items-center">
                <p className="lg:text-[15px] sm:text-[18px] text-[14px]" >Ready to turn your vision into reality? Drop your details below and watch the magic unfold!</p>
            </div>
        </div>
        </div>

        </section>
        <div className=" mb-4 flex lg:justify-end justify-center" >
                                    <div className=" row col-lg-6">
                                        <Form action="/search" className="   text-white p-5  ">
                                            
                                            
                                            <div className="mb-4">
                                                <p>YOUR NAME</p>
                                                <input type="text" className="form-control  mb-2" name="name" placeholder="Full Name" />
                                                <p>TYPE YOUREMAIL</p>
                                                <input type="text" className="form-control mb-2" name="name" placeholder="Email Address" />
                                                <p>TYPE YOUREMESSAGE</p>
                                                <input type="text" className="form-control mb-2" name="name" placeholder="What is your Project goals,requirement and specific timeline..." />
                                                <p className="mt-16">PROJECT BUDGET</p>
                                                <input type="text" className="form-control mb-2" name="name" placeholder="What is your Budget(USD)"/>
                                               
        
                                            </div>
                                            <div>
        
                                            </div>
                                            <button type="button" className="text-[#EEEEEE] !hover:text-[#000] border border-white hover:bg-gray-100  sm:pl-[10px] text-center rounded-3xl px-3 py-2  mb-4 mt-4" >SUBMIT REQUEST </button>
                                        </Form>
                                    </div>
                                </div>
<Footer/>
        </>
  )
};