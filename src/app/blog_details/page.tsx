import Image from 'next/image';
import Header from '@/app/compontes/header'
import Footer from '@/app/compontes/footer'
export default function App() {
    return (
        <>
            <Header />
            <section className='lg:px-[80px] px-[40px] overflow-hidden lg:pt-[150px] pt-[150px] mb-4'>
                <div className="col-lg-10 mb-4">
                    <h1 className='lg:text-[3vw] text-[5vw] lg:leading-[3vw] leading-[5.5vw]'>Rethink is on the Quest for Exceptional Talent to Join<br></br> Our Team</h1>
                </div>
                <div className="lg:flex mt-8 sm:block hidden">
                    <div className="col-lg-4">
                        <p>December 04,2024</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <p>(@)</p>
                    </div>
                    <div className="col-lg-4 text-end">
                        <p>Scroll Down</p>
                    </div>
                </div>
                <hr className='border-2  sm:block hidden '></hr>
            </section>
            <section className='overflow-hidden mb-4  lg:px-[80px] px-[40px]'>
                <Image
                    src="/assets/Statue.png"
                    alt="..."
                    width={1080}
                    height={1080}
                    className=" p-0 m-0 w-full rounded-lg"
                />
            </section>
            <section className='overflow-hidden mb-4  lg:px-[80px] px-[40px]'>
                <div className="justify-center flex">
                    <div className="col-lg-8 ">
                        <p className='lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] mt-10'>In the dynamic world of web design and digital innovation, talent is the driving force that propels creativity and sets the stage for groundbreaking projects. At Rethink, we are embarking on an exciting quest to discover and welcome exceptional talent into our team. If you are passionate about pushing the boundaries of digital design, fueled by innovation, and ready to make your mark in the industry, Rethink invites you to be part of our creative journey.</p>
                        <p className='lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] mt-10'>Rethink is more than a web studio; we are a community of visionaries, designers, developers, and creatives who come together to transform ideas into extraordinary digital experiences. Our commitment to excellence, innovation, and collaboration sets us apart in the ever-evolving landscape of web design.</p>
                        <h2 className=' mt-10'>What We Value</h2>
                        <p className='lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] mt-10'><span className='font-bold lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw]'>1.Innovation:</span> At Rethink, we thrive on innovation. We believe in challenging the status quo and pushing the boundaries of what is possible. If you have a passion for exploring new technologies, trends, and design methodologies, you'll find a home in our dynamic environment.</p>
                        <p className='lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] mt-10'><span className='font-bold lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw]'>2.Collaboration:</span> Collaboration is at the heart of everything we do. We understand that the most exceptional projects emerge from the collective genius of a diverse team. If you value teamwork, open communication, and the exchange of ideas, you'll fit right into our collaborative culture.</p>
                        <p className='lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] mt-10'><span className='font-bold lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw]'>3.Continuous Learning:</span>In the fast-paced world of digital design, staying ahead requires a commitment to continuous learning. Whether you're a seasoned professional or an emerging talent, Rethink provides opportunities for growth, skill enhancement, and staying at the forefront of industry trends.</p>
                    </div>
                </div>

            </section>
            <section className='lg:px-[80px] px-[40px] pb-5 overflow-hidden'>
            <div className="justify-center flex">
            <div className="col-lg-8 ">
            <h2 className=' '>Open Positions</h2>
            <p className='lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] mt-8'>Script studio is currently seeking exceptional individuals to join our team in various roles,
            including:</p>
            <div className="flex mb-4">
            <li className='ml-10'><span className="font-semibold lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] "> UI/UX Designers:</span> <span className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] text-[#BEBEBE]">Turn concepts into visually stunning and user-friendly interfaces.</span></li></div>
            <div className="flex mb-4">
            <li className='ml-10'><span className="font-semibold lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] ">Front-End Developers:</span> <span className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] text-[#BEBEBE]">Bring designs to life with expertise in HTML,CSS,and JavaScript.</span></li></div>
            <div className="flex mb-4">
            <li className='ml-10'><span className="font-semibold lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw]"> Digital Marketing Specialist:</span> <span className="text-[#BEBEBE] lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] ">Drive online visibility and engagement through strategic  digital marketing campaigns.</span></li></div>
            <div className="flex mb-4">
            <li className='ml-10'><span className="font-semibold lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] ">Project Managers:</span> <span className="text-[#BEBEBE] lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw]">Oversee the end-to-end execution of projects,ensuring delhivery on time and within scope.</span></li></div>
            <p className='lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] mt-8'>If you're passionate about making a difference in the digital landscape, we want to hear from you!</p>
                </div>
                </div>

            </section>

            <section className='lg:px-[80px] px-[40px] pb-5 overflow-hidden'>
            <div className="justify-center flex">
            <div className="col-lg-8 ">
            <h2 className=' '>How to Apply</h2>
            <p className='lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] mt-8'>Visit our careers page to explore open positions and submit your application. Tell us about your passion, showcase your portfolio, and let us know why you're the exceptional talent we've been searching for. As we embark on this quest for exceptional talent, we invite you to join the Script Studio experience. Be part of a team that values creativity, embraces innovation, and thrives on collective success. Your journey with Script Studio awaits. Apply now and let's create extraordinary digital experiences together!</p>
            <div className="flex gap-1">
            <p className='lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] mt-8 m-0 p-0'>Are you ready to Script Studio your career?</p>
            <button type='button' className='underline lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw] decoration-nodashed font-bold'>Apply today!</button></div>
            </div>
            </div>
            </section>
            <section className="overflow-hidden lg:px-[80px] px-[40px] pt-1 pb-5">
                    <div className="container-fluid p-0 m-0">
                      <div className=" col-lg-12 border-t-2 mt-4 mb-4 ">
                        <p className='mt-4 lg:text-[1vw] text-[3.4vw] lg:leading-[1.5vw] leading-[4.5vw]'>BLOG</p>
                      </div>
                      <div className="col-lg-3">
                        <p className="font-[500] lg:text-[4vw] text-[6vw] lg:leading-[4.5vw]  ">Latest News
                          & Press</p>
                      </div>
                    </div>
                  </section>
                  <section className="overflow-hidden lg:px-[80px] px-[40px] pt-1 pb-5">
                    <div className="container-fluid p-0 m-0">
                      <div className="row mb-4">
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
                    <div className="flex justify-center  mt-10 mb-8 ">
                    <button type="button" className="text-white hover:text-white border  border-white hover:bg-black justify-center text-center rounded-3xl px-2 py-1 " >VIEW ALL BLOGS</button>
                  </div>
                  </section>
            
<Footer/>
        </>

    );
}