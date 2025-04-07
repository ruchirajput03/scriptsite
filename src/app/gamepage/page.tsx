'use client';

import Image from 'next/image';
import Link from 'next/link';



import Header from "@/app/compontes/header"
import Footer from "@/app/compontes/footer";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import { useEffect } from "react";
// import AOS from 'aos';
// import "aos/dist/aos.css";
export default function Home() {
   

    return (
        <>
            <Header />


            <section className='lg:px-[80px]  px-[40px] lg:pt-[150px] pt-[150px] overflow-hidden' >
                <div>
                <div className='col-lg-6' >
                    <h1 className="lg:text-[60px] font-bold sm:text-[40px] text-[20px] lg:leading-[65px] sm:leading-[45px] leading-[20px]">
                       GAME<br></br> DEVELOPMENT
                    </h1>

                </div>
                <div  >
                    <p className='font-bold lg:pt-4 lg:text-[18px] sm:text-[18px] text-[16px]'>Crafting Unforgettable Experiences, One Game at a Time</p>
                    <p className="text-gray-400 col-lg-5 lg:pt-4 mt-0 lg:text-[18px] sm:text-[16px] text-[14px] lg:leading-[30px] sm:leading-[25px]">
                    Welcome to<span className='text-white font-semibold'>Script Studio,</span>  where we blend <span className='text-white font-semibold'>Creativity </span> and <span className='text-white font-semibold'>Technology </span> to create <span className='text-white font-semibold'> Immersive Gaming Experiences.</span> As a trusted game development partner, we help you bring your game ideas to life with cutting-edge technology, captivating storytelling, and engaging gameplay. Whether it’s a<span className='text-white font-semibold'> Mobile Adventure,</span>  A  <span className='text-white font-semibold'>Console Masterpiece,</span>  or an <span className='text-white font-semibold'>NFT-Powered Universe,</span>  we have the expertise to create games that leave a lasting impact.
                    </p>
                    <div className='pt-4'>
                    <Link href="/Contactus" className='text-white no-underline'><button className="lg:px-5 lg:py-1 px-2.5 py-2 border border-white lg:text-lg text-[12px] rounded-full hover:bg-white hover:text-black transition-all">
                        <p className='p-0 m-0 lg:text-[0.8vw] sm:text[1vw] text-[3vw]'>GET A FREE CONSULTATION</p>
                    </button></Link>

                    </div>
                </div>

                </div>

                <div className="col-lg-12 w-full col-md-12 lg:pt-[80px] pt-[50px]">
                    <Image src="/assets/motion/imagehbajjjajj.png" alt="Web Design" width={1830} height={750} loading="lazy" className="rounded-lg shadow-lg w-full" />
                </div>

            </section>



            <section className="lg:px-[80px]  px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]">

                <div className="flex flex-wrap items-center">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px] ">

                        <div className="pb-3 mt-3 text-gray-400">Script Studio / Game development agency</div>
                        <h1 className="lg:text-[35px] sm:text-[30px] font-semibold text-[20px]  uppercase  lg:leading-[40px] sm:leading-[45px] leading-[35px] ">
                        Your Trusted Game <br></br>Development Partner
                        </h1>
                        <div className="col-lg-8">
                            <p className="mt-4 g:text-[18px] sm:text-[16px] text-[14px]">
                            Script Studios is a leading custom game development company offering end-to-end game development services. Having worked on 500+ projects with 200+ noteworthy brands, we have a stronghold in the industry and an extensive portfolio showcasing our expertise in various game genres, platforms, and technologies. From generating game ideas to providing LiveOps support, we can help you throughout the game development cycle.
                            </p>


                        </div>



                        <div className="col-lg-5 mt-4">



                            <div className="flex">
                                <button className='underline flex'>Let’s Talk<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                            </div>



                        </div>






                    </div>


                    <div className="col-lg-6 lg:pt-[80px] pt-[40px] order-lg-2 order-1">

                        <Image src="/assets/UI/2151618522uhuhiu.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg" />
                    </div></div>
            </section>


            <section className="lg:px-[80px]  px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]">
                <div className="flex flex-wrap items-center  ">

                    <div className="col-lg-6 ">
                        <Image src="/assets/motion/hiiiuybsu.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg " />
                    </div>

                    <div className="col-lg-6 ">
                        <div className="flex justify-center">
                            <div className="col-lg-10 lg:pt-[80px] pt-[40px]">

                                <h1 className="lg:text-[40px] font-semibold sm:text-[30px] uppercase text-[20px]  text-white leading-[1]">
                                Mobile Game<br></br> Development
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 font-bold text-[16px]">
                                    Games That Travel With You
                                    </p>
                                    <p className="mt-4 g:text-[18px] sm:text-[16px] text-[14px]">
                                    Dive into the world of mobile gaming, where players are always ready for their next adventure. Our mobile game development team specializes in creating games that are visually stunning, highly interactive, and optimized for the smoothest gameplay experience. Whether it’s Android or iOS, we deliver high-performance mobile games that keep players engaged on the go.
                                    </p>
                                    <ul className="mt-2 g:text-[18px] sm:text-[16px] text-[14px] list-disc font-bold  list-outside">

                                        <li className='mt-2'>Cross-Platform Mobile Games</li>
                                        <li className='mt-2'>Visually Captivating & Performance-Optimized</li>
                                        <li className='mt-2'>Engaging Player Experience</li>

                                    </ul>
                                    <p className="mt-4  g:text-[18px] sm:text-[16px] text-[14px]">
                                    Let’s create a game that players can’t put down!
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
            <section className=" lg:px-[80px]  px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap  items-center">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] font-semibold sm:text-[30px] text-[22px] uppercase text-white ">
                                PC Game <br></br>Development
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 font-bold text-[16px]">
                                    Games That Make an Impact
                                    </p>
                                    <p className="mt-4  g:text-[18px] sm:text-[16px] text-[14px]">
                                    When it comes to PC gaming, we know what it takes to create an experience that resonates. From Windows, macOS, and Linux, our team designs and develops games that push the boundaries of creativity and performance. With our transparent production pipeline, we ensure your game is ready to captivate the gaming community on all platforms.
                                    </p>
                                    <ul className="mt-2 g:text-[18px] sm:text-[16px] text-[14px] list-disc font-bold  list-outside">

                                        <li className='mt-1'>Games for Windows, macOS & Linux</li>
                                        <li className='mt-1'>Immersive Cross-Platform Titles</li>
                                        <li className='mt-1'>Comprehensive Game Production</li>

                                    </ul>

                                    <p className="mt-4  g:text-[18px] sm:text-[16px] text-[14px]">Let&apos;s build a world that keeps players coming back for more.</p>
                                </div>
                                <div className="flex mt-4">
                                    <button className='underline g:text-[18px] sm:text-[16px] text-[14px] flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/motion/image.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px]  px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-center  ">
                    <div className="col-lg-6 mb-4 w-full">
                        <Image src="/assets/UI/imageojojojo.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] font-semibold uppercase sm:text-[35px] text-[26px] leading-[1]">
                                Console Game <br/>Development
                                </h1>
                                <p className="mt-4 g:text-[18px] sm:text-[16px] text-[14px] font-bold">
                                Your Console, Your Game, Our Expertise
                                </p>
                                <p className="mt-4 lg:g:text-[18px] sm:text-[16px] text-[14px] ">
                                Crafting the perfect console game requires a mix of creativity, technical know-how, and an understanding of player expectations. At Script Studio, we specialize in creating games for Xbox, PlayStation, and Nintendo. From game art to LiveOps, we handle every step to deliver a console game that players will love.
                                </p>
                                <ul className="mt-2 lg:g:text-[18px] sm:text-[16px] text-[14px]  list-disc font-bold  list-outside">

                                    <li className='mt-2'>Tailored Games for Xbox, PlayStation, & Nintendo</li>
                                    <li className='mt-2'>Complete Development Process</li>
                                    <li className='mt-2'>Seamless Integration for LiveOps</li>


                                </ul>
                                <p className="mt-4 g:text-[18px] sm:text-[16px] text-[14px]">
                                Let’s build a game that defines the next generation of console gaming.
                                </p>
                                <div className="flex lg:pt-[20px] pt-[10px]">
                                    <button className='underline flex'>Let&apos;s Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            <section className=" lg:px-[80px]  px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap items-center ">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] font-semibold sm:text-[30px] text-[22px] uppercase text-white ">
                                Unity Game <br></br>Development
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 text-[16px] font-bold">
                                    Where Imagination Meets Reality
                                    </p>
                                    <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px]">
                                    With Unity, the possibilities are endless. Our team brings your 2D & 3D games to life, using Unity&apos;s powerful engine to deliver stunning visuals and engaging mechanics. We also dive into the realm of VR/AR gaming, taking your players on journeys like never before.
                                    </p>
                                    <ul className="mt-2 lg:text-[16px] text-[14px] list-disc font-bold list-outside">

                                        <li className='mt-2'>2D & 3D Game Development</li>
                                        <li className='mt-2'>Unity-Powered VR/AR Experiences</li>
                                        <li className='mt-2'>Cross-Platform Unity Games</li>


                                    </ul>
                                    <p className="mt-4 text-[16px]">
                                    Let&apos;s build an experience that pushes the limits of what&apos;s possible.
                                    </p>


                                </div>
                                <div className="flex">
                                    <button className='underline flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/UI/imagebuhihii.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px]  px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap  flex-col md:flex-row items-center  ">
                    <div className="col-lg-6 mb-4 w-full">
                        <Image src="/assets/UI/imagehijijoj.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] font-semibold uppercase col-lg-7 sm:text-[35px] text-[26px] ">
                                Unreal Game <br></br>Development
                                </h1>
                                <p className="mt-4 text-[16px] font-bold">
                                Immersive Worlds, Unmatched Visuals
                                </p>
                                <p className="mt-4 g:text-[18px] sm:text-[16px] text-[14px]">
                                For breathtaking visuals and truly immersive experiences, the Unreal Engine is a game-changer. Whether it&apos;s creating an epic VR adventure or developing a visually stunning MR game, our team harnesses Unreal&apos;s power to deliver state-of-the-art gameplay that will amaze your players.
                                </p>
                                <ul className="mt-2 g:text-[18px] sm:text-[16px] text-[14px] list-disc  font-bold list-outside">

                                    <li className='mt-2'>Epic Visuals & Immersive Gameplay</li>
                                    <li className='mt-2'>VR & MR Game Development</li>
                                    <li className='mt-2'>Post-Release Game Support</li>


                                </ul>
                                <p className='mt-4 g:text-[18px] sm:text-[16px] text-[14px]'>Let&apos;s bring your most ambitious ideas to life with Unreal.</p>

                                <div className="flex">
                                    <button className='underline g:text-[18px] sm:text-[16px] text-[14px] flex'>Let&apos;s Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            <section className=" lg:px-[80px]  px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap items-center ">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] font-semibold sm:text-[30px] text-[22px] uppercase text-white ">
                                NFT Game <br></br>Development
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 text-[16px] font-bold">
                                    Gaming with Real-World Value
                                    </p>
                                    <p className="mt-4 g:text-[18px] sm:text-[16px] text-[14px] ">
                                    Enter the world of blockchain gaming where NFTs make your game assets truly valuable. At Script Studio, we integrate NFTs into your game, allowing players to create, trade, and own in-game assets. This innovative approach enhances the player experience while enabling new revenue streams through blockchain technology.
                                    </p>
                                    <ul className="mt-2 g:text-[18px] sm:text-[16px] text-[14px] list-disc font-bold  list-outside">

                                        <li className='mt-2'>NFTs as Tradeable In-Game Assets</li>
                                        <li className='mt-2'>Blockchain Integration for Digital Ownership</li>
                                        <li className='mt-2'>Engagement-Driven NFT Ecosystem</li>
                                        


                                    </ul>
                                    <p className="mt-4 g:text-[18px] sm:text-[16px] text-[14px] ">Let&apos;s revolutionize the gaming experience with<span className='font-semibold'> NFT-powered games.</span> </p>


                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/UI/imagebuuuuhb.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            

           

            <div className="border-t-2 ms-5 me-5 mt-16 sm:block hidden"></div>
           <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-5" >
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
                       
                                        <section className="overflow-hidden lg:px-[80px] px-[40px] pt-1 pb-5">
                                          <div className="container-fluid p-0 m-0">
                                            <div className="row items-center mb-4 justify-center ">
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
            <Footer/>

        </>
    );
}
