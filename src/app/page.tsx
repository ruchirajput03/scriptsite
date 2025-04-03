
"use client";

import Image from "next/image";
import Header from "@/app/compontes/header";
import { useEffect } from "react";

import "locomotive-scroll/dist/locomotive-scroll.css";
import Expert from "../app/compontes/experties"
import AOS from 'aos';
import "aos/dist/aos.css";
import Footer from "../app/compontes/footer"


export default function Home() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="overflow-hidden" >
      <div >

    
      <Header />

      <section className="overflow-hidden lg:px-[80px] px-[20px] lg:pt-[150px] pt-[15 0px]" >
        <div className="container-fluid ">
          <div
            className="row align-items-center justify-between"
          >
            <div className="col-lg-6 mb-4" data-aos="fade-up"
              data-aos-duration="3000">
              <div className="col-lg-12">
                <video className="relative w-full rounded-lg" autoPlay loop muted playsInline preload="auto">
                  <source src="/assets/mainvi.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>
            </div>

            <div className="col-lg-6 mb-4" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500">
              <div className="flex lg:justify-center">
                <div className="col-lg-11">
                  <p className="lg:text-[60px] text-[30px] lg:leading-[60px] font-bold sm:text-[40px] sm:leading-[45px] leading-[35px]">
                    Partner with the Leading 3% of Industry Experts
                  </p>
                  <div className="col-md-12 d-flex align-items-center mb-4 mt-0">
                    <Image src="/assets/Group 17584.png" alt="..." width={1080} height={1080} className="rounded-[10px] p-0 m-0 w-[70px]" />
                    <p className="ms-3 mb-0 lg:text-[20px] text-[16px] lg:leading-[30x] leading-[20px]">
                      let&apos;s change this <br /> world with design
                    </p>
                  </div>
                  <div className="col-lg-4 items-center justify-center pt-4">
                    <button
                      type="button"
                      className="text-[#ffff] border mb-4 items-center border-white hover:bg-[#ffff] hover:text-[#000] w-full sm:pl-[10px] text-center rounded-full font-[500] text-[16px] px-4 py-2"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 pb-4"  >
        <div className="container-fluid ">

          <div className=" flex justify-center uppercase font-bold  gap-6 marquee items-center ">
            <p className="text-[10vw] ">Script Studio</p>
            <p className="text-[10vw] ">Script Studio</p>
            <p className="text-[10vw] ">Script Studio</p>
            <p className="text-[10vw] ">Script Studio</p>
            <p className="text-[10vw] ">Script Studio</p>
            <p className="text-[10vw] ">Script Studio</p>
          </div>
          <div className="row justify-center pt-4" >
            <div className="col-md-12">
              <video className="relative w-full rounded-lg h-[40vw]" autoPlay loop muted playsInline preload="auto">
                <source src="/assets/mainvii.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>
          </div>
        </div>


      </section>
      <section className="overflow-hidden lg:px-[80px] px-[20px] lg:pt-4 pb-4" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500">
       
           <p className=" flex justify-center items-center  text-[#B8B8B8]">--ABOUT US--</p>
           
            <div className="flex justify-center items-center">
            <div className="col-lg-8 mb-4">
          <p className="lg:text-[30px] text-[16px] justify-center text-center lg:leading-[40px] ">Script Studio is a nurturing workspace full of creativity. We are a team consisting of the top 3% of talent in the <span className="text-[#B8B8B8]">areas of design, development and digital, and we work hard to develop effective solutions that build up brands and businesses</span> </p></div></div>   
          <div className="flex justify-center">
            <button type="button" className="text-[#ffff] border mb-4 items-center  border-white hover:bg-[#ffff] hover:text-[#000] justify-center text-center rounded-3xl lg:px-3 lg:py-2 px-3 py-2" >More About Us</button>
        

         </div>

       </section>
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 pb-4 " data-aos="zoom-in">
         <div className="row relative">
           <div className=" flex justify-center  ">
             <div className="col-lg-5">
             < img className=" text-center w-full" src="/assets/Rectangle 10.png"
              alt="..."
              width={300}
               height={100}
            />

            </div>
             <div className="row absolute lg:top-[250px] top-[150px]">
          <div className="col-11 col-lg-8 lg:mb-[80px] mb-[50px]"  data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                 <p className="text-[70px] md:text-[160px] font-bold text-start">REDESIGN</p>
               </div>
               <div className="col-12 col-lg-10 lg:mb-[80px] mb-[50px]"  data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                 <p className="text-[70px] md:text-[160px] font-bold text-end">REBUILD</p>
               </div>
               <div className="col-12 col-lg-10 lg:mb-[80px] mb-[50px]" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                 <p className="text-[70px] md:text-[160px] font-bold text-start">RETHINK</p>
               </div>
             </div>


          </div>
           <div className="flex justify-end relative  ">
            <div className="col-lg-4 col-12 text-[15px]  mt-sm-4 mt-4"data-aos="zoom-in">
              <p>Our mission here at Script Studio goes hand in hand with the vision of our clients, helping brands with innovative and bespoke digital solutions. We aim to provide an exceptional user experience, effective design and assist in business development in the continuously evolving digital world. By merging imagination with contemporary technology, we prepare the very best professional techniques for any business to excel in every aspect.

                 Our company goals include cultivating longstanding relations with customers by making their concepts tangible and realizing achievable targets that are proofing to the specified audience.</p>
            </div>
          </div>
        </div>

      </section>
      <hr className=" border border-1 border-white " ></hr>
      <section className="overflow-hidden lg:px-[80px] px-[20px]" >
        <div className="container-fluid ">
          <Expert />
        </div>
      </section>
      <hr className=" border border-1.9 " data-aos="fade-up" ></hr>
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 pb-4" data-aos="fade-up">
         <div className="container-fluid p-0 m-0">

           <div className="col-lg-12">
             <div className="row align-items-center">
               <div className="col-lg-1 ">
                 <h3 className="">01.</h3>
               </div>
              <div className="col-lg-4 ">
                 <h3 className="font-bold"> Marketing Strategy</h3>
               </div>
               <div className="col-lg-6 lg:text-[1vw] text-[3vw] ">
                 <p> Your business success will always depend on having a strong presence in the market. A comprehensive brand marketing strategy will clarify the core meaning of your organization and create a sharing vision with the partners. If necessary, we will design logos and come up with messages, or write a slogan to match already developed marketing strategies. This way people will admire your brand and its integrated identity</p>
              </div>
              <div className="col-lg-1 ">
                 <Image className="img-responsive lg:w-[80px] w-[50px]" src="/assets/Border.png" alt="logo" width={1080} height={1080} />
            </div>
             </div>
          </div>
        </div>
       </section>
      <hr className=" border border-1.9 " data-aos="fade-up" ></hr>
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 pb-4"data-aos="fade-up">
        <div className="container-fluid p-0 m-0">

           <div className="col-lg-12">
             <div className="row align-items-center">
               <div className="col-lg-1 ">
                 <h3 className="">02.</h3>
               </div>
               <div className="col-lg-4 ">
                 <h3 className="font-bold">UI/UX Design</h3>
               </div>
               <div className="col-lg-6 lg:text-[1vw] text-[3vw]">
                 <p> We offer our clients the right service they need at Script Studio as we believe a product is not just a solution for a problem but also requires a compelling experience. Our offer of user-friendly interface centers around giving visually stimulating designs while enabling practical performance fostering users&apos; ability to enjoy each use experience. By gaining a deeper comprehension of your audience in addition to incorporating your business objectives into the designs, we build experiences that enhance user retention and overall triumphs in business metrics</p>
               </div>
               <div className="col-lg-1 ">
                 <Image className="img-responsive lg:w-[80px] w-[50px]" src="/assets/Border1.png" alt="logo" width={1080} height={1080} />
              </div>
             </div>
          </div>
         </div>
       </section>
      <hr className=" border border-1.9 " data-aos="fade-up" ></hr>
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 pb-4"  data-aos="fade-up">
        <div className="container-fluid ">

          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-md-1 ">
                <h3 className="">03.</h3>
              </div>
              <div className="col-md-4 ">
                <h3 className="font-bold">Website Design &amp;
                  Development</h3>
              </div>
              <div className="col-lg-6 ">
                <p className="lg:text-[1vw] text-[3vw]"> Our design and development team enables us to build some of the most beautiful and fully functional websites. Our approach revolves around prioritizing any engagement level while boosting the site&apos;s overall UI, from using responsive designs to aiding users with self-navigation. Our service covers optimization of websites to make them search-matching, speedy, and able to perform excellently in the market.</p>
              </div>
              <div className="col-lg-1 ">
                <Image className="img-responsive lg:w-[80px] w-[50px]" src="/assets/Border 3.png" alt="logo" width={1080} height={1080} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className=" border border-1.9 " data-aos="fade-up" ></hr>

      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 pb-4"  data-aos="fade-up">
        <div className="container-fluid ">

          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-lg-1 ">
                <h3 className="">04.</h3>
              </div>
              <div className="col-lg-4 ">
                <h3 className="font-bold"> Motion Design </h3>
              </div>
              <div className="col-lg-6 ">
                <p className="lg:text-[1vw] text-[3vw]"> This will not only be useful as an informative piece but also I will create a small motion graphic used in social media content. Social media motion graphics are striking and captivating and would be an interesting addition to your story. Combining rich designs with animation or video ensures that your target audience is made aware of your content in social media, website, or marketing campaigns. </p>
              </div>
              <div className="col-lg-1 ">
                <Image className="img-responsive lg:w-[80px] w-[50px]" src="/assets/Border2.png" alt="logo" width={1080} height={1080} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className=" border border-1.9 " data-aos="fade-up" ></hr>

      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 pb-4"   data-aos="fade-up">
        <div className="container-fluid ">

          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-md-1 ">
                <h3 className="">05.</h3>
              </div>
              <div className="col-md-4 ">
                <h3 className="font-bold">  AI Development </h3>
              </div>
              <div className="col-lg-6 ">
                <p className="lg:text-[1vw] text-[3vw]"> At Script Studio, we create powerful AI solutions that go beyond problem-solving to enhance user experiences and business performance. Our AI services, including machine learning, predictive analytics, and automation, are tailored to meet your unique needs. We focus on seamless integration, ensuring that AI works intuitively with your existing systems while driving growth and improving user engagement. Our goal is to deliver intelligent, user-friendly solutions that align with your business objectives and deliver measurable results. </p>
              </div>
              <div className="col-md-1 ">
                <Image className="img-responsive lg:w-[80px] w-[50px] " src="/assets/Border2.png" alt="logo" width={1080} height={1080} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className=" border border-1.9 " data-aos="fade-up" ></hr>
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 pb-4" data-aos="fade-up">
        <div className="container-fluid ">

          <div className="col-lg-12">
            <div className="row align-items-center">
              <div className="col-lg-1 ">
                <h3 className="">06.</h3>
              </div>
              <div className="col-lg-4 ">
                <h3 className="font-bold">Game Development </h3>
              </div>
              <div className="col-lg-6 ">
                <p className="lg:text-[1vw] text-[3vw]" >At Script Studio, we create immersive and engaging gaming experiences that captivate players. From concept to launch, we specialize in building custom games that combine innovative design, cutting-edge technology, and seamless gameplay. Whether it&apos;s mobile, web, or console games, we develop interactive worlds that bring your ideas to life. Our team focuses on delivering intuitive controls, stunning visuals, and compelling narratives, ensuring that every game is both entertaining and technically flawless. We help transform your gaming vision into reality, creating memorable experiences that resonate with players and keep them coming back for more.</p>
              </div>
              <div className="col-lg-1 ">
                <Image className="img-responsive lg:w-[80px] w-[50px] " src="/assets/Border2.png" alt="logo" width={1080} height={1080} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className=" border border-1.9 " data-aos="fade-up"></hr>
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 pb-4"  data-aos="fade-up">
        <div className="container-fluid ">

          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-lg-1 ">
                <h3 className="">07.</h3>
              </div>
              <div className="col-lg-4 ">
                <h3 className="font-bold">Blockchain Development </h3>
              </div>
              <div className="col-lg-6 ">
                <p className="lg:text-[1vw] text-[3vw]">At Script Studio, we create immersive and engaging gaming experiences that captivate players. From concept to launch, we specialize in building custom games that combine innovative design, cutting-edge technology, and seamless gameplay. Whether it&apos;s mobile, web, or console games, we develop interactive worlds that bring your ideas to life. Our team focuses on delivering intuitive controls, stunning visuals, and compelling narratives, ensuring that every game is both entertaining and technically flawless. We help transform your gaming vision into reality, creating memorable experiences that resonate with players and keep them coming back for more.</p>
              </div>
              <div className="col-lg-1 ">
                <Image className="img-responsive lg:w-[80px] w-[50px] " src="/assets/Border2.png" alt="logo" width={1080} height={1080} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className=" border border-1.9 sm:block hidden" data-aos="fade-up"></hr>

      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-40 pb-4" data-aos="zoom-in">
         <div className="container-fluid p-0 m-0">
           <div className="col-lg-12">
             <hr className=" border border-1.9 ms-1 me-1"></hr>
            <p>Portfolio</p>
             <div className=" col-lg-8 pt-10 pb-10 align-items-center">
               <p className="text-left lg:text-[80px] text-[40px] p-0 m-0 lg:leading-[80px]  font-bold">Selected Work
                </p>
              <p className="text-left lg:text-[80px] text-[40px]  font-bold">
                 ©2021 — 2024</p>
               <div className="row align-items-center ">
                 <div className="col-lg-2">
                  <Image className="img-responsive lg:w-[100px]  w-[60px]" src="/assets/downarrow.png" alt="logo" width={500} height={500} />
                 </div>
                <div className="col-lg-7 pt-4 text-[#C0C0C0]">
                 <p>Here, you&apos;ll find a curated collection of our finest work, showcasing our expertise in web design, branding, animation, and more. Each project is a testament to our passion for creativity and innovation. Take a glimpse into what we do best and discover how we can transform your ideas into compelling digital experiences. Let our portfolio inspire your next project</p>
                </div>

              </div>
             </div>
           </div>
        </div>


       </section>
      <hr className=" border border-1.9 " data-aos="zoom-in" ></hr>
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 "  data-aos="zoom-in">
        <div className="container-fluid ">
          <div className="items-center pb-4 pt-4 row">
            <div className="col-lg-6 mb-4">
               <div className="flex  lg:gap-3 gap-1.5 items-center">
              <div className="sm:block hidden mb-4">
                <h5>©2024</h5>
              </div>
              <div className=" mb-4 ">

                <button className="text-[#fff] hover:bg-[#fff] lg:w-[120px] w-[120px] text-[13px] hover:text-[#000] border border-white  text-center rounded-full  py-1  uppercase">BRANDING</button>
              </div>
              <div className=" mb-4">
                <button className="text-[#fff] hover:bg-[#fff]  lg:w-[120px] w-[120px]  text-[13px] hover:text-[#000] border border-white  text-center rounded-full  py-1 uppercase ">UI/UX DESIGN</button>
              </div>
              <div className=" mb-4 ">
                <button className="text-[#fff] hover:bg-[#fff] text-[13px]   hover:text-[#000] border border-white  text-center rounded-full lg:w-[120px] w-[120px]  py-1  uppercase">DEVELOPEMENT</button>
              </div>

            </div>
            <div className="row relative items-center">
              <div className="col-12 col-lg-10 mb-0">
                <p className="text-[40px] lg:text-[115px] font-[500]  text-start lg:leading-[120px] leading-[65px]">REIMAGINING
                  REALITY</p>
              </div>
            </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="flex lg:justify-end">
              <div className="col-lg-8 mb-4">
              <Image src="/assets/image 1.png"  alt="..."  width={1080}  height={1080} className="rounded-[10px] w-full"
            />
              </div>

              </div>
          
            </div>
          </div>
      


        </div>
      </section>
      <hr className=" border border-1.9 " data-aos="zoom-in" ></hr>
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 "  data-aos="zoom-in">
        <div className="container-fluid ">
          <div className="items-center pb-4 pt-4 row">
            <div className="col-lg-6 mb-4">
              <div className="flex  lg:gap-3  gap-1.5 items-center">
              <div className="sm:block hidden mb-4">
                <h5>©2024</h5>
              </div>
              <div className=" mb-4 ">

                <button className="text-[#fff] hover:bg-[#fff] lg:w-[120px] w-[120px] text-[13px] hover:text-[#000] border border-white  text-center rounded-full  py-1  uppercase">BRANDING</button>
              </div>
              <div className=" mb-4">
                <button className="text-[#fff] hover:bg-[#fff]  lg:w-[120px] w-[120px]  text-[13px] hover:text-[#000] border border-white  text-center rounded-full  py-1 uppercase ">UI/UX DESIGN</button>
              </div>
              <div className=" mb-4 ">
                <button className="text-[#fff] hover:bg-[#fff] text-[13px]   hover:text-[#000] border border-white  text-center rounded-full lg:w-[120px] w-[120px]  py-1  uppercase">DEVELOPEMENT</button>
              </div>

            </div>
            <div className="row relative items-center">
              <div className="col-12 col-lg-10 mb-0">
                <p className="text-[50px] lg:text-[115px] font-[500]  text-start lg:leading-[120px] leading-[65px]">REIMAGINING
                  REALITY</p>
              </div>
            </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="flex lg:justify-end">
              <div className="col-lg-8 mb-4">
              <Image src="/assets/image 1.png"  alt="..."  width={1080}  height={1080} className="rounded-[10px] w-full"
            />
              </div>

              </div>
          
            </div>
          </div>
      


        </div>
      </section>
      <hr className=" border border-1.9 " data-aos="zoom-in" ></hr>
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-4 "  data-aos="zoom-in">
        <div className="container-fluid ">
          <div className="items-center pb-4 pt-4 row">
            <div className="col-lg-6 mb-4">
             <div className="flex lg:gap-3 gap-1.5  items-center">
              <div className=" sm:block hidden mb-4">
                <h4>©2024</h4>
              </div>
              <div className=" mb-4 ">

                <button className="text-[#fff] hover:bg-[#fff] lg:w-[120px] w-[120px]  text-[13px] hover:text-[#000] border border-white  text-center rounded-full  py-1  uppercase">BRANDING</button>
              </div>
              <div className=" mb-4">
                <button className="text-[#fff] hover:bg-[#fff]  lg:w-[120px] w-[120px]  text-[13px] hover:text-[#000] border border-white  text-center rounded-full  py-1 uppercase ">UI/UX DESIGN</button>
              </div>
              <div className=" mb-4 ">
                <button className="text-[#fff] hover:bg-[#fff] text-[13px]   hover:text-[#000] border border-white  text-center rounded-full lg:w-[120px] w-[120px]  py-1  uppercase">DEVELOPEMENT</button>
              </div>

            </div>
            <div className="row relative items-center">
              <div className="col-12 col-lg-10 mb-0">
                <p className="text-[50px] lg:text-[115px] font-[500]  text-start lg:leading-[120px] leading-[65px]">REIMAGINING
                  REALITY</p>
              </div>
            </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="flex lg:justify-end">
              <div className="col-lg-8 mb-4">
              <Image src="/assets/image 1.png"  alt="..."  width={1080}  height={1080} className="rounded-[10px] w-full"
            />
              </div>

              </div>
          
            </div>
          </div>
      


        </div>
      </section>


      <hr className=" border border-1.9 " data-aos="zoom-in" ></hr>
    
      <section className="overflow-hidden lg:px-[80px] px-[20px] pt-1 pb-5" data-aos="zoom-in">
         <div className="container-fluid p-0 m-0">
          <div className=" col-lg-12 ">
             <p>Blog</p>
           </div>
           <div className="col-lg-3">
             <p className="font-[500] text-[50px] leading-[45px]">Latest News
             &amp; Press</p>
           </div>
         </div>
       </section>
       <section className="overflow-hidden lg:px-[80px] px-[20px] pt-1 pb-5" data-aos="zoom-in">
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
      
      <div className="flex justify-center mb-8 " >
        <div className="col-md-2">
        <button type="button" className="text-[#ffff] border mb-4 items-center w-[160px] border-white hover:bg-[#ffff] hover:text-[#000] justify-center text-center rounded-full py-1 " >VIEW ALL BLOGS</button>
        </div>
      </div> 
  <Footer />


  </div>







    </div>
  );
}
