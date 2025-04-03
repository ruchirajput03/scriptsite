

const AutoSwiper = () => {
    const items = [
  
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
      { text: "Expertise" },
  
  
  
  
    ];
  
    return (
      <div className="relative overflow-hidden bg-transparent ">
        <section className=" overflow-hidden">
          <div><div className="flex justify-start items-center marquee-anim ">
          {items.concat(items).map((item, index) => (
            <div  key={index}  className="flex-shrink-0 flex items-center ]" >
                 <p className='lg:text-[6vw] text-[6vw] text-[#fff] font-bold   text-center sm:p-[50px] p-[10px] uppercase'> {item.text}</p>
            </div>
          ))}
     </div>        
      </div>
            </section>
     
     
      </div>
    );
  };
  
  export default AutoSwiper;
  