"use client";
import { useEffect } from "react";
import { animate, scroll } from "motion";
import Image from "next/image"; // Import the Image component from Next.js

// Your data array
const data = [
  { name: "Akash Verma", designation: "Founder, Business Development Head" },
  { name: "Akanksha Singh", designation: "Chief Financial Officer" },
  { name: "Kalpana Kashyap", designation: "Human Resource Manager" },
  { name: "Vishal Verma", designation: "Social Media Head" },
  { name: "Deepanshu Chauhan", designation: "UI/UX and Creative Head" },
  { name: "Anurag Singh Yadav", designation: "Senior Full Stack Developer" },
  { name: "Muhammed T", designation: "Senior Full Stack Developer" },
  { name: "Akshay Verma", designation: "Graphic Designer" },
  { name: "Aishwarya Patel", designation: "Frontend Developer" },
  { name: "Ruchi Rajput", designation: "Frontend Developer" },
];

const Gallery = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".img-container");
    console.log(items)

    // Animate gallery horizontally during vertical scroll
    scroll(
      animate(".img-group", {
        transform: ["none", `translateX(-100vw)`],
      }),
      { 
        target: document.querySelector(".img-group-container") ?? undefined 
      }
    );



  }, []);

  return (
    <section>
      <article id="gallery" >
        <section className="img-group-container lg:h-[200vh] w-screen">
          <div className="lg:sticky lg:top-[200px] w-full">
            <ul className="img-group flex   gap-4 lg:w-[200vw] w-full ">
              {data.map((person, index) => (
                <li
                  key={index}
                  className="img-container flex   w-full flex-col  lg:block hidden items-center justify-center "
                >
                  {/* Use Next.js Image component */}
                  <Image
                    src={`/photos/cityscape/${index + 1}.png`} // Image path in your public folder
                    alt={`Cityscape #${index + 1}`} // Alt text for accessibility
                    width={1080} // Set width
                    height={1080} // Set height
                    className=" lg:w-full w-[500px] lg:h-full h-[500px]"
                  />

                  <h3 className="mt-6 font-bold lg:text-[22px] text-[18px] ">{person.name}</h3>

                  <p className="lg:mt-2 mt-0 lg:text-[16px] text-[12px] text-[#D1D1D1]">{person.designation}</p>
                </li>
              ))}
            </ul>

          </div>
          <div className="flex gap-1  overflow-x-auto pb-4 ">
          {data.map((person, index) => (
                <li
                  key={index}
                  className=" flex col-6    w-full flex-col  lg:hidden block items-center justify-center "
                >
                  {/* Use Next.js Image component */}
                  <Image
                    src={`/photos/cityscape/${index + 1}.png`} // Image path in your public folder
                    alt={`Cityscape #${index + 1}`} // Alt text for accessibility
                    width={1080} // Set width
                    height={1080} // Set height
                    className=" lg:w-full w-full rounded-md lg:h-full"
                  />

                  <h3 className="mt-6 font-bold lg:text-[22px] text-[18px] ">{person.name}</h3>

                  <p className="lg:mt-2 mt-0 lg:text-[16px] text-[12px] text-[#D1D1D1]">{person.designation}</p>
                </li>
              ))}
          </div>
        </section>

      </article>
    </section>
  );
};

export default Gallery;
