import Image from "next/image";
const Textswiper = () => {
    const items = [
        { text: "ORBITAL", image: '/assets/image (8).png' },

        { text: "ACRE MADE", image: '/assets/image (9).png' },

        { text: "MUNCH", image: '/assets/image (5).png' },

        { text: "MONT MARK", image: '/assets/image (10).png' },

        { text: "SWIFTPAL", image: '/assets/image (11).png' },

        { text: "KOVER", image: '/assets/image (12).png' },

    ];

    return (
        <div className="relative overflow-hidden bg-transparent py-4">
            <section className="bg-[#000] overflow-hidden">
                <div className="w-[100vw]">
                    <div className="flex justify-start gap-16 items-center marquee-anim w-[200vw]">
                        {items.concat(items).map((item, index) => (


                            < div key={index} className="   flex flex-col justify-start items-start  min-w-[200px] " >



                                <h4 className="lg:text-[2vw] text-[6vw] text-white  sm:pt-[40px] pt-[10px] sm:pb-[40px] pb-[15px]">{item.text}</h4>

                                <Image
                                    src={item.image}
                                    alt={`Slide ${index + 1}`}
                                    width={950}
                                    height={1000}
                                    className="rounded-lg object-cover "
                                />
                            </div>

                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Textswiper;