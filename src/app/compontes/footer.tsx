import Image from "next/image";


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
                                <li>facebook</li>

                                <li>instagram</li>
                                <li>LinkedIn</li>
                                <li> Dribble</li>
                                <li>Behance
                                </li>
                            </div>

                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="pt-4 flex  pb-4 lg:pl-5 lg:justify-start justify-end">
                                <div>
                                    <li>Home</li>

                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li> Projects</li>
                                    <li>Blogs</li>

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
                                        {/* <p className="inline lg:text-[1vw] text-[3vw]">©2024-2025</p> */}
                                        <div className="col-lg-4"><p className=" lg:text-[1vw] text-[3vw] font-medium p-0 m-0">©2024-2025</p></div>
                                    </div></div>

                            </div> 
                        </div>
                        <div className="mt-4 !border-[#fff] border lg:hidden block mb-4"></div>

                        <div className="col-lg-6 mb-4">
                            <div className="flex lg:justify-end">
                                <div className="col-lg-4">
                                    <p className="text-center">All copyrights© reserved by <span className="underline font-medium">scriptstudio.io</span></p>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
                
            </section>




        </>
    );
}
