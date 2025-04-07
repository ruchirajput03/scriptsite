import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <>


            <section className="lg:px-[80px] px-[40px]  pt-4 pb-5" >
                <div className="container-fluid p-0 m-0">
                    <div className="  !border-[#fff] border" ></div>
                    <div className="row justify-between ">
                        <div className="col-lg-6 lg:border-r lg:border-b-none border-b ">
                            <div className="pt-4 pb-4">
                                <Image className="img-responsive w-32 " src="/assets/arrow.png" alt="logo" width={1080} height={1080} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 border-r">
                            <div className="flex "></div>
                            <div className="pt-4 lg:pl-5 pb-4 ">
                            <Link href="https://www.linkedin.com/company/scriptstudio-io/posts/?feedView=all" className="no-underline  text-white"><li>LinkedIn</li></Link>

                                <Link href="https://www.instagram.com/scriptstudio.io?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="no-underline  text-white"><li>Instagram</li></Link>
                                <Link href="https://dribbble.com/Scriptstudio_io" className="no-underline  text-white"><li>Dribble</li></Link>
                                <Link href="https://www.behance.net/scriptstudio_io" className="no-underline  text-white"><li>Behance</li></Link>
                                <Link href="https://teams.live.com/l/invite/FEA-5lT8B7utyWhuQE" className="no-underline  text-white"><li>Teams</li></Link>
                               
                               
                            
                            </div>

                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="pt-4 flex  pb-4 lg:pl-5 lg:justify-start justify-end">
                                <div>
                                <Link href='/' className="text-white no-underline"><li>Home</li></Link>

                                    <Link href='/Contactus' className="text-white no-underline"><li>About Us</li></Link>
                                    <Link href='/Contactus' className="text-white no-underline"><li>Contact Us</li></Link>
                                    <Link href='#' className="text-white no-underline"><li>Services</li></Link>
                                    <Link href='/projects' className="text-white no-underline"><li>Projects</li></Link>
                                    <Link href='/blog' className="text-white no-underline"><li>Blogs</li></Link>

                                </div>
                            </div>

                        </div>




                    </div>
                    <div className="  !border-[#fff] border" ></div>

                </div>
            </section>
            <section className="lg:px-[100px] px-[40px]  pt-4 pb-5">
                <div className="container-fluid p-0 m-0">
                    <div className="items-end row">
                        <div className="col-lg-6 mb-4">
                            <div className="flex items-start justify-between ">
                                <div className="col-lg-6">
                                    <div className="flex gap-0">
                                        <p className="lg:text-[90px] p-0 m-0 font-bold lg:leading-[90px] text-[80px] leading-[80px] uppercase">SCRIPT Studio</p>
                                        
                                        <div className="col-lg-4"><p className=" lg:text-[1vw] text-[3vw] font-medium p-0 m-0">©2024-2025</p></div>
                                    </div></div>

                            </div> 
                        </div>
                        <div className="mt-4 !border-[#fff] border lg:hidden block mb-4"></div>

                        <div className="col-lg-6 mb-4">
                            <div className="flex lg:justify-end">
                                <div className="col-lg-4">
                                    <p className="text-end">All copyrights© reserved by <span className="underline font-medium  flex justify-end">scriptstudio.io</span></p>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
                
            </section>




        </>
    );
}
