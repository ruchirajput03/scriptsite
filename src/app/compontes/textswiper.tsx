import Image from "next/image";
const Textswiper = () => {
    const items = [
        { text: "ORBITAL", image: '/assets/image (8).png', content: "WEBSITE + WEB APP PORTAL", img: '/assets/arrrr.svg' },

        { text: "ACRE MADE", image: '/assets/image (9).png', content: "BRANDING + VISUAL IDENTITY", img: '/assets/arrrr.svg' },

        { text: "MUNCH", image: '/assets/image (5).png', content: "WEBSITE + WEB APP PORTAL", img: '/assets/arrrr.svg' },

        { text: "MONT MARK", image: '/assets/image (10).png', content: "BRANDING + VISUAL IDENTITY", img: '/assets/arrrr.svg' },

        { text: "SWIFTPAL", image: '/assets/image (11).png', content: "WEBSITE + WEB APP PORTAL", img: '/assets/arrrr.svg' },

        { text: "KOVER", image: '/assets/image (12).png', content: "BRANDING + VISUAL IDENTITY", img: '/assets/arrrr.svg' },

    ];

    return (
        <div className="relative overflow-hidden bg-transparent py-4">
            <section className="bg-[#000] overflow-hidden">
                <div className="w-[100vw]">
                    <div className="flex justify-start gap-16 items-center w-[500vw]">
                        {items.concat(items).map((item, index) => (
                            <a
                                href="/project_details"
                                className="no-underline"
                                key={`${item.text}-${index}`}
                            >
                                < div key={index} className="   flex flex-col justify-start items-start marquee-anim  min-w-[200px] " >


                                    <div className="flex w-full justify-between items-center">
                                        <div className="div">
                                            <h4 className="lg:text-[4vw] text-[4vw] text-white  sm:pt-[40px] pt-[10px] ">{item.text}</h4>
                                            <p className="lg:text-[0.8vw] text-[1.8vw] text-gray-400  flex justify-endp-0 m-0 sm:pb-[40px] pb-[15px]">{item.content}</p></div>
                                        <div className="div">
                                            <Image
                                                src={item.img}
                                                alt={`Slide ${index + 1}`}
                                                width={1080}
                                                height={1080}
                                                className="rounded-lg flex justify-end lg:w-20 w-5"
                                            />
                                        </div>
                                    </div>

                                    <Image
                                        src={item.image}
                                        alt={`Slide ${index + 1}`}
                                        width={950}
                                        height={1000}
                                        className="rounded-lg object-cover "
                                    />


                                </div>

                            </a>

                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Textswiper;