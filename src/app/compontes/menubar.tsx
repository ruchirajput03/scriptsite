import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from 'next/link';

interface DropdownItem {
    name: string;
    link: string;
}

interface MenuItem {
    name: string;
    link?: string;
    hasDropdown: boolean;
    dropdownItems?: DropdownItem[];
}

interface SocialLink {
    name: string;
    link: string;
}

export default function MenuBar({ isMobile }: { isMobile: boolean }) {
    const [menushow, setmenushow] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    // Handle clicks outside the dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && menushow) {
                // If the click is inside the menu container, check if it's a dropdown item or button
                if (menuRef.current.contains(event.target as Node)) {
                    // If it's a click on a dropdown button, toggle handled separately
                    // If it's a click inside an open dropdown, don't close
                    const targetElement = event.target as HTMLElement;
                    const isInsideDropdown = !!targetElement.closest(`[data-dropdown="${openDropdown}"]`);
                    const isDropdownButton = !!targetElement.closest('[data-dropdown-toggle]');

                    // If not inside dropdown content and not a dropdown toggle button, close dropdown
                    if (!isInsideDropdown && !isDropdownButton && openDropdown) {
                        setOpenDropdown(null);
                    }
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menushow, openDropdown]);

    // Define menu structure
    const menuItems: MenuItem[] = [
        { name: "Home", link: "app/page", hasDropdown: false },
        { name: "About Us", link: "/aboutus", hasDropdown: false },
        {
            name: "Services",
            hasDropdown: true,
            dropdownItems: [
                { name: "Website Development", link: "webdesign&development" },
                { name: "Blockchain Development", link: "blockchain" },
                { name: "Game Development", link: "gamepage" },
                { name: "AI Development", link: "ai" },
                { name: "Brand Design", link: "brand" },
                { name: "UI/UX Design", link: "uipage" },
                { name: "Motion Design", link: "motion_design" },
            ]
        },
       
               
       
        { name: "Projects", link: "/projects", hasDropdown: false },
        { name: "Work with us", link: "/workwithus", hasDropdown: false },
        { name: "blog", link: "/blog", hasDropdown: false },
        
        { name: "Contact Us", link: "/Contactus", hasDropdown: false },
    ];

    // Social media links
    const socialLinks: SocialLink[] = [
        { name: "LinkedIn", link: "https://linkedin.com" },
        { name: "Instagram", link: "https://instagram.com" },
        { name: "Facebook", link: "https://facebook.com" },
        { name: "Dribbble", link: "https://dribbble.com" },
        { name: "Behance", link: "https://behance.net" },
        { name: "Skype", link: "https://skype.com" },
    ];

    return (
        <div className="flex items-center justify-center relative ">
            <button onClick={() => setmenushow(true)} aria-label="Open menu">
                <Image
                    src="/assets/menudot.svg"
                    width={1080}
                    height={1080}
                    className="w-[22px] m-[auto]"
                    alt="Menu icon"
                />
            </button>

            {menushow && (
                <div ref={menuRef} className={`bg-white ${isMobile ? 'w-full h-full fixed top-0  left-0 z-50 ' : 'lg:w-[calc(100vw-185px)] bg-[#fff] absolute top-[-20px]  z-40'} lg:rounded-[35px] px-4 pb-8 pt-6`}>
                  
                    <div className="flex justify-between items-center mb-5">
                        <div>
                            <Link href="/">
                                <Image
                                    src="/assets/droplogo.svg"
                                    width={1080}
                                    height={1080}
                                    className="w-[120px]"
                                    alt="Script Studio Logo"
                                />
                            </Link>
                        </div>
                        <div>
                            <button onClick={() => setmenushow(false)} aria-label="Close menu">
                                <Image
                                    src="/assets/cross.svg"
                                    width={40}
                                    height={40}
                                    alt="Close icon"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto max-h-[300px] mb-5 ">
                    <div className="">
                        {/* Main Navigation */}
                        <div className="flex flex-wrap gap-[10px] justify-between">
                            {menuItems.map((item) => (
                                <div key={item.name} className={`${item.hasDropdown ? '' : ''}`}>
                                    {item.hasDropdown ? (
                                        <button
                                            data-dropdown-toggle={item.name}
                                            onClick={() => toggleDropdown(item.name)}
                                            className={`py-2 text-[#000] hover:bg-[#000]  hover:text-[#fff]   lg:w-[200px] w-[150px]  rounded-full text-[14px] ${openDropdown === item.name ? 'bg-black text-white' : 'border text-[#000] border-gray-300 hover:border-gray-500'}`}
                                        >
                                            {item.name}
                                        </button>
                                    ) : (
                                        <Link href={item.link || '#'} className="py-2  lg:w-[170px] w-[150px]  text-center text-[#000]  hover:bg-[#000] hover:text-[#fff] !no-underline rounded-full border border-gray-300 hover:border-gray-500 text-[14px] inline-block">
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="pb-4 ">

                            {menuItems.map((item) => (
                                item.hasDropdown && item.dropdownItems && openDropdown === item.name && (
                                    <div
                                        key={`dropdown-${item.name}`}
                                        className="flex flex-wrap gap-3 pt-4  "
                                        data-dropdown={item.name}
                                    >
                                        {item.dropdownItems.map((dropItem) => (
                                            <Link
                                                key={dropItem.name}
                                                href={dropItem.link}
                                                className="py-2  lg:w-[240px] w-full border-dark   text-[14px] text-center text-[#000] hover:bg-[#000] hover:text-[#fff] !no-underline rounded-full border border-gray-300 hover:border-gray-500 inline-block"
                                            >
                                                {dropItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-dark my-3"></div>


                        <div className="flex flex-wrap justify-between gap-3 mt-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.link}
                                    className="py-2  lg:w-[170px] w-[140px]  text-center text-[#000] hover:bg-[#000] hover:text-[#fff] !no-underline rounded-full border border-gray-300 hover:border-gray-500 inline-block"
                                >
                                    {social.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    </div>
                </div>
            )}


        </div>
    );
}