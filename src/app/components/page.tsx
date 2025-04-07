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

    // Animate gallery horizontally during vertical scroll
    scroll(
      animate(".img-group", {
        transform: ["none", `translateX(-100vw)`],
      }),
      { target: document.querySelector(".img-group-container") }
    );


  }, []);

  return (
    <section>
      <article id="gallery" className="h-[190vh]">
        <section className="img-group-container h-[200vh] w-screen">
          <div className="sticky top-0 overflow-hidden">
            <ul className="img-group flex gap-4 w-[200vw]">
              {data.map((person, index) => (
                <li
                  key={index}
                  className="img-container flex w-screen h-screen flex-col items-center justify-center"
                >
                  {/* Use Next.js Image component */}
                  <Image
                    src={`/photos/cityscape/${index + 1}.png`} // Image path in your public folder
                    alt={`Cityscape #${index + 1}`} // Alt text for accessibility
                    width={1080} // Set width
                    height={1080} // Set height
                    className="w-[400px] h-[300px]" 
                  />
                  
                  <h3 className="mt-6 font-bold lg:text-[22px] text-[18px] ">{person.name}</h3>

<p className="lg:mt-2 mt-0 lg:text-[16px] text-[12px] text-[#D1D1D1]">{person.designation}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
      </article>
    </section>
  );
};

export default Gallery;
