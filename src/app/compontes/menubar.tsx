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
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = (dropdown: string, event: React.MouseEvent) => {
        // Stop event propagation to prevent closing when clicking the dropdown button
        event.stopPropagation();
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    // Handle clicks outside the menu to close it
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setmenushow(false);
                setOpenDropdown(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Define menu structure
    const menuItems: MenuItem[] = [
        { name: "Home", link: "/", hasDropdown: false },
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
        { name: "Work With Us", link: "/workwithus", hasDropdown: false },
        { name: "Blog", link: "/blog", hasDropdown: false },
        { name: "Contact Us", link: "/Contactus", hasDropdown: false },
    ];

    // Social media links
    const socialLinks: SocialLink[] = [
        { name: "LinkedIn", link: "https://www.linkedin.com/company/scriptstudio-io/?viewAsMember=true" },
        { name: "Instagram", link: "https://www.instagram.com/scriptstudio.io?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        { name: "Dribbble", link: "https://dribbble.com/Scriptstudio_io" },
        { name: "Behance", link: "https://www.behance.net/scriptstudio_io" },
        { name: "Teams", link: "https://teams.live.com/l/invite/FEA-5lT8B7utyWhuQE" },
    ];

    // Border color based on dropdown state
    const borderColor = openDropdown ? "border-gray-300" : "border-black";
    const activeBorderColor = "border-black";

    // Handler for clicks inside menu but outside dropdown
    const handleMenuClick = (event: React.MouseEvent) => {
        // Only check if we need to close dropdown when there's one open
        if (openDropdown) {
            const target = event.target as HTMLElement;
            // Check if click was on dropdown button
            const isDropdownToggle = !!target.closest('[data-dropdown-toggle]');
            // Check if click was inside dropdown content
            const isInsideDropdown = !!target.closest('[data-dropdown]');

            // If click was not on dropdown button and not inside dropdown content, close dropdown
            if (!isDropdownToggle && !isInsideDropdown) {
                setOpenDropdown(null);
            }
        }
    };

    return (
        <div className="flex items-center justify-center relative pb-5 ">
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
                <div
                    ref={menuRef}
                    className={`bg-white ${isMobile ? 'w-full fixed top-0 left-0 z-50' : 'lg:w-[calc(100vw-185px)] bg-[#fff] absolute top-[-20px] z-40'} lg:rounded-[35px] px-4 pb-8 pt-6`}
                    onClick={handleMenuClick}
                >
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

                    <div className="overflow-y-auto max-h-[80vh]">
                        {/* Main Navigation - First row */}
                        <div className="flex flex-wrap gap-2 mb-4 lg:justify-start justify-between ">
                            {menuItems.slice(0, 3).map((item) => (
                                <div key={item.name} className="mx-1">
                                    {item.hasDropdown ? (
                                        <button
                                            data-dropdown-toggle={item.name}
                                            onClick={(e) => toggleDropdown(item.name, e)}
                                            className={`py-2  lg:w-[200px] w-[180px] rounded-full text-[14px] border 
                                                ${openDropdown === item.name
                                                    ? 'bg-black text-white border-black'
                                                    : `text-[#000] hover:bg-[#000] hover:text-[#fff] ${borderColor}`}`}
                                        >
                                            {item.name}
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.link || '#'}
                                            className={`py-2  lg:w-[200px] w-[170px] text-center text-[#000] hover:bg-[#000] hover:text-[#fff] !no-underline rounded-full border ${borderColor} hover:border-gray-500 text-[14px] inline-block`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Dropdown content for Services */}
                        {openDropdown === "Services" && (
                            <div
                                ref={dropdownRef}
                                className="flex flex-wrap gap-2 mb-4"
                                data-dropdown="Services"
                            >
                                {menuItems[2].dropdownItems?.map((dropItem) => (
                                    <Link
                                        key={dropItem.name}
                                        href={dropItem.link}
                                        className={`py-2 lg:w-[200px] w-full text-[14px] text-center text-[#000] hover:bg-[#000] hover:text-[#fff] !no-underline rounded-full border ${activeBorderColor} hover:border-gray-500 inline-block`}
                                    >
                                        {dropItem.name}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Remaining menu items - Second row */}
                        <div className="flex flex-wrap gap-2 mb-4 ">
                            {menuItems.slice(3).map((item) => (
                                <div key={item.name} className="mx-1">
                                    <Link
                                        href={item.link || '#'}
                                        className={`py-2  lg:w-[170px] w-[170px] text-center text-[#000] hover:bg-[#000] hover:text-[#fff] !no-underline rounded-full border ${borderColor} hover:border-gray-500 text-[14px] inline-block ${openDropdown ? 'opacity-80' : ''}`}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-dark my-5"></div>

                        {/* Social links */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`py-2  lg:w-[200px] w-[170px] text-center text-[#000] hover:bg-[#000] hover:text-[#fff] !no-underline rounded-full border ${borderColor} hover:border-gray-500 inline-block ${openDropdown ? 'opacity-80' : ''}`}
                                >
                                    {social.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}