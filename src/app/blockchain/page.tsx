'use client';

import Image from 'next/image';

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


            <section className='lg:px-[80px] px-[40px] lg:pt-[150px] pt-[150px] overflow-hidden'  data-aos="fade-up">
                <div className='col-lg-6'>
                    <h1 className="lg:text-[60px] sm:text-[40px] text-[20px] lg:leading-[65px] sm:leading-[45px] leading-[25px]">
                        BLOCKCHAIN<br></br>DEVELOPMENT
                    </h1>

                </div>
                <div >
                    <p className="text-gray-400 col-lg-5 lg:mt-8 mt-0 lg:text-[18px] sm:text-[15px] text-[14px] lg:leading-[30px] sm:leading-[35px]">
                        At <span className='text-white font-semibold'>Script Studio,</span> we offer innovative blockchain development services designed to help businesses tap into the evolving Web3 ecosystem. Whether you&apos;re building <span className='text-white font-semibold'>decentralized applications (DApps),</span> launching <span className='text-white font-semibold'>DeFi platforms, </span>or exploring <span className='text-white font-semibold'>real-world asset (RWA)</span> tokenization, we&apos;re here to bring blockchain innovation to life and create a transformative experience for your business.
                    </p>
                    <div className='pt-4'>
                        <button className=" lg:px-3 lg:py-2 px-2.5 py-2 border border-white lg:text-lg text-[12px] rounded-full hover:bg-white hover:text-black transition-all">
                            GET A FREE CONSULTATION
                        </button>

                    </div>
                </div>

                <div className="col-lg-12 w-full col-lg-12 lg:pt-[80px] pt-[50px]"data-aos="zoom-in">
                    <Image src="/assets/UI/imageijijij.png" alt="Web Design" width={1830} height={750} loading="lazy" className="rounded-lg shadow-lg w-full" />
                </div>

            </section>



            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]"  data-aos="zoom-in">

                <div className="flex flex-wrap items-center">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px] ">

                        <div className="pb-3 mt-3 text-gray-400">Script Studio / Blockchain development agency</div>
                        <h1 className="lg:text-[35px] sm:text-[30px] col-lg-10 text-[20px]  uppercase  lg:leading-[40px] sm:leading-[45px] leading-[35px] ">
                            Blockchain Development Services: Shaping a Scalable Future for the Web3 Economy
                        </h1>
                        <div className="col-lg-8">
                            <p className="mt-4   font-semibold  lg:text-[18px] sm:text-[18px] text-[16px]">
                                Leveraging expertise in over 40 blockchain protocols, we are at the forefront of driving the Web3 revolution with our cutting-edge blockchain development solutions.
                            </p>
                            <p className="mt-4   lg:text-[18px] sm:text-[18px] text-[16px]">
                                With growing consumer demand for sustainability, blockchain technology plays a pivotal role in ensuring ethical practices while boosting security, efficiency, transparency, and compliance in diverse business operations. Antier has established itself as a leading blockchain development company, successfully delivering over 1,000 projects since its inception. Our experienced team of blockchain app developers specializes in creating custom blockchain solutions tailored to businesses of all sizes worldwide.
                            </p>

                        </div>



                        <div className="col-lg-5 mt-4">



                            <div className="flex">
                                <button className='underline lg:text-[18px] sm:text-[18px] text-[16px] flex'>Let&apos;s Talk<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                            </div>



                        </div>






                    </div>


                    <div className="col-lg-6 lg:pt-[80px] pt-[40px] order-lg-2 order-1">

                        <Image src="/assets/blockchain/imageojojxn.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg" />
                    </div></div>
            </section>


            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]" data-aos="zoom-in">
                <div className="flex flex-wrap  ">

                    <div className="col-lg-6 ">
                        <Image src="/assets/blockchain/dappbsxiki.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg w-full shadow-lg " />
                    </div>

                    <div className="col-lg-6 ">
                        <div className="flex justify-center">
                            <div className="col-lg-10 lg:pt-[80px] pt-[40px]">
                                <div className="pb-3 mt-3 col-lg-6 uppercase text-gray-400">Blockchain development</div>
                                <h1 className="lg:text-[40px] sm:text-[30px] uppercase text-[20px]  text-white leading-[1]">
                                    DApp Development
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                        We provide comprehensive blockchain app development services across various industries. Our expertise in creating decentralized applications (DApps) includes:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc  list-outside">

                                        <li className='mt-2'><strong className='font-semibold'>DeFi Platforms: </strong>Build decentralized finance platforms to provide secure, transparent, and decentralized financial services.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Decentralized Exchanges (DEXs): </strong>Develop platforms that enable peer-to-peer trading of assets without the need for intermediaries.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Gaming: </strong>Create blockchain-powered games where players own and trade in-game assets with real-world value.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Wallet Solutions:  </strong>Offer secure, user-friendly wallets for easy storage, management, and trade of digital assets.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Supply Chain Tracking: </strong>Enhance transparency and traceability of goods by implementing blockchain in supply chain management.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Staking, Borrowing, and Lending: </strong>Develop decentralized platforms for blockchain-based lending, staking, and earning opportunities.</li>

                                    </ul>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
            <section className=" lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] " data-aos="zoom-in">
                <div className="flex flex-wrap ">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[22px] uppercase text-white ">
                                    Asset <br></br>Tokenization
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                        Our RWA tokenization services help businesses tokenize a wide range of physical assets. Tokenization enhances liquidity, accessibility, and ease of trading. We specialize in:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc  list-outside">

                                        <li className='mt-2'><strong className='font-semibold'>Real Estate: </strong> Tokenize properties for fractional ownership, making real estate investments more accessible.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Art: </strong>Convert artwork into tokenized forms for fractional ownership and simplified trading.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Shares & Stocks: </strong> Bring traditional assets into the digital world for easier trading and greater transparency.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Loyalty Programs:  </strong> Implement blockchain-based loyalty programs that offer users tangible rewards.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Intellectual Property: </strong>Secure and manage intellectual property assets using blockchain&apos;s transparency and security features.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Precious Metals: </strong>Tokenize precious metals like gold and silver for easier trading and investment.</li>

                                    </ul>


                                </div>
                                <div className="flex">
                                    <button className='underline lg:text-[18px] sm:text-[18px] text-[16px] flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/blockchain/imageuhsii.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] "data-aos="zoom-in">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 mb-4 w-full">
                        <Image src="/assets/blockchain/imagevhh.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] uppercase sm:text-[35px] text-[26px] leading-[1]">
                                    Enterprise<br></br> Blockchain
                                </h1>
                                <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                    We offer tailored enterprise blockchain solutions to streamline business operations. We focus on:
                                </p>
                                <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc  list-outside">

                                    <li className='mt-2'><strong className='font-semibold'>Supply Chain Management:  </strong>Secure and optimize supply chain processes with blockchain integration for real-time traceability and transparency.</li>
                                    <li className='mt-2'><strong className='font-semibold'>Identity Verification:  </strong>Build secure, verifiable identity systems for various business applications using blockchain technology.</li>


                                </ul>
                                <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                    We utilize leading blockchain platforms such as Hyperledger, Corda, and Quorum, ensuring that the solutions we create are scalable, secure, and adaptable to enterprise needs.
                                </p>
                                <div className="flex">
                                    <button className='underline lg:text-[18px] sm:text-[18px] text-[16px] flex'>Let&apos;s Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            <section className=" lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] "data-aos="zoom-in">
                <div className="flex flex-wrap ">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[22px] uppercase text-white ">
                                    Wallet<br></br> Development
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                        We specialize in creating secure wallets that allow users to safely store and manage their cryptocurrencies. Our wallet development services include:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc  list-outside">

                                        <li className='mt-2'><strong className='font-semibold'>State-of-the-art security: </strong> Providing robust encryption and protection for users&apos; digital assets.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Seamless integration: </strong>Ensuring users can easily trade, transfer, and manage their cryptocurrencies with a smooth and user-friendly experience.</li>


                                    </ul>


                                </div>
                                <div className="flex">
                                    <button className='underline flex'>Talk to a Script studio expert today<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 ">
                        <Image src="/assets/blockchain/imageiuhihii.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] " >
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 mb-4 w-full" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <Image src="/assets/blockchain/imagepoopoplp.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] uppercase col-lg-7 sm:text-[35px] text-[26px] lg:leading-[45px]">
                                    Blockchain Security Auditing &amp; Testing
                                </h1>
                                <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                    We provide blockchain security auditing and testing to ensure your platform is secure from vulnerabilities. Our services include:
                                </p>
                                <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc  list-outside">

                                    <li className='mt-2'><strong className='font-semibold'>Design and code evaluation:  </strong>Thorough assessment of your blockchain&apos;s architecture and code to identify security risks.</li>
                                    <li className='mt-2'><strong className='font-semibold'>Security enhancements: </strong>Implementation of patches and improvements to protect your platform against cyber threats and attacks.</li>


                                </ul>

                                <div className="flex">
                                    <button className='underline lg:text-[18px] sm:text-[18px] text-[16px] flex'>Let&apos;s Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            <section className=" lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap ">

                    <div className="col-lg-6 order-lg-1 order-2 lg:pt-[80px] pt-[40px]" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] sm:text-[30px] text-[22px] uppercase text-white ">
                                    AML & KYC <br></br>Compliance
                                </h1>

                                <div className="col-lg-10">
                                    <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                        We help ensure that your blockchain application adheres to Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations. Our compliance services include:
                                    </p>
                                    <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc  list-outside">

                                        <li className='mt-2'><strong className='font-semibold'>Identity verification tools: </strong> Ensuring that only legitimate users have access to your platform.</li>
                                        <li className='mt-2'><strong className='font-semibold'>Transaction monitoring: </strong>Identifying suspicious activity to prevent financial crimes.</li>

                                        <li className='mt-2'><strong className='font-semibold'>Risk assessments: </strong> Ensuring your platform meets global regulatory standards.</li>


                                    </ul>


                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full order-lg-2 order-1 " data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <Image src="/assets/blockchain/aml kycbjnkkk.png" alt="Web Design" width={700} height={450} loading="lazy" className="rounded-lg shadow-lg w-full " />
                    </div>
                </div>





            </section>
            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px] ">
                <div className="flex flex-wrap flex-col md:flex-row items-start  ">
                    <div className="col-lg-6 mb-4 w-full">
                        <Image src="/assets/blockchain/image hjjiii.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="rounded-lg shadow-lg  w-full " />
                    </div>

                    <div className="col-lg-6 mb-4 lg:pt-[80px] pt-[40px]"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <div className="flex justify-center">
                            <div className="col-lg-10">

                                <h1 className="lg:text-[40px] uppercase col-lg-7 sm:text-[35px] text-[26px] lg:leading-[45px]">
                                    Advanced Blockchain Solutions
                                </h1>
                                <p className="mt-4 lg:text-[18px] sm:text-[18px] text-[16px]">
                                    We offer advanced blockchain solutions that enhance user privacy and security. Our services include:                                </p>
                                <ul className="mt-2 lg:text-[18px] sm:text-[18px] text-[16px] list-disc  list-outside">

                                    <li className='mt-2'><strong className='font-semibold'>Zero Knowledge Proofs (ZKPs):  </strong>Secure data sharing while preserving privacy.</li>
                                    <li className='mt-2'><strong className='font-semibold'>Multi-Party Computation (MPC) and MultiSig wallets: </strong>Advanced solutions for key management and securing digital assets.</li>
                                    <li className='mt-2'><strong className='font-semibold'>Gasless Transactions: </strong>Reduce transaction costs and enhance user experience with frictionless, cost-effective transactions.</li>


                                </ul>

                                <div className="flex" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                                    <button className='underline lg:text-[18px] sm:text-[18px] text-[16px] flex'>Let&apos;s Work Together<Image src="/assets/Symbol.png" alt="Web Design" width={1080} height={1080} loading="lazy" className="w-[25px] ml-2" /></button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

            <section className="lg:px-[80px] px-[40px] overflow-hidden lg:pt-[80px] pt-[40px]" data-aos="zoom-in"
     >
                <div className="col-lg-12 flex justify-center">
                    <h2 className='lg:text-[50px] sm:text-[40px] text-[26px] font-semibold text-left mt-4 mb-10'>Why Choose Script Studio for <br></br>Blockchain Development?</h2>
                   
                </div>
                <div className=" lg:px-[80px] px-[40px] overflow-hidden lg:pt-[40px] pt-[20px]">
                        <p className="mt-4 font-bold lg:text-[22px] sm:text-[20px] text-[18px]">1. Expertise in Over 40 Blockchain Protocols</p>
                        <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px] text-[#CFCFCF]">With deep experience in over 40 blockchain protocols, we are well-equipped to select the best technologies to meet your needs.</p>
                        <p className="mt-4 font-bold lg:text-[22px] sm:text-[20px] text-[18px]">2. Tailor-Made Solutions</p>
                        <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px] text-[#CFCFCF]">We craft custom blockchain solutions designed specifically for your business, ensuring scalability, security, and enhanced user experience.</p>
                        <p className="mt-4 font-bold lg:text-[22px] sm:text-[20px] text-[18px]">3. Security-First Approach</p>
                        <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px] text-[#CFCFCF]">We prioritize security at every step—from wallet development to auditing—ensuring your assets and data are always protected.</p>
                        <p className="mt-4 font-bold lg:text-[22px] sm:text-[20px] text-[18px]">4. Seamless Integration</p>
                        <p className="mt-4 lg:text-[18px] sm:text-[16px] text-[14px] text-[#CFCFCF]">We ensure smooth integration of blockchain solutions into your existing systems, maximizing value while providing a seamless user experience.</p>

                        </div>
            </section>


            <div className="border-t-2 ms-5 me-5 mt-16 sm:block hidden"></div>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-8 pb-5" data-aos="zoom-in">
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
            
                             <section className="overflow-hidden lg:px-[80px] px-[40px] pt-1 pb-5" data-aos="zoom-in">
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
            <Footer/>

        </>
    );
}
