// imports
import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import AccountMenu from "./AccountMenu";
// import icons
import { BiChevronDown, BiSearch, BiBell } from "react-icons/bi";

// menu fixed
const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    // useEffect for fixed menu
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // show mobile menu
    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);
    // show acount menu
    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div
                className={`
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            ${showBackground ? "bg-violet-800 bg-opacity-80" : ""}

        `}
            >
                <img className="h-5 lg:h-8" src="/images/bg-logo.png" />
                <div
                    className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                    "
                >
                    <NavbarItem label="Home" />
                    <NavbarItem label="TV Shows" />
                    <NavbarItem label="Movies" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by Languages" />
                </div>
                <div
                    onClick={toggleMobileMenu}
                    className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
                >
                    <p className="text-white text-sm">Browse</p>
                    <BiChevronDown
                        className={`text-white transition ${
                            showMobileMenu ? "rotate-180" : "rotate-0"
                        }`}
                    />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-2xl text-gray-200 hover:text-gray-300 cursor-pointer">
                        <BiSearch />
                    </div>
                    <div className="text-2xl text-gray-200 hover:text-gray-300 cursor-pointer">
                        <BiBell />
                    </div>
                    <div
                        onClick={toggleAccountMenu}
                        className="flex flex-row items-center gap-2 cursor-pointer relative"
                    >
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/user-image.jpg" alt="" />
                        </div>
                        <BiChevronDown
                            className={`text-white transition ${
                                showAccountMenu ? "rotate-180" : "rotate-0"
                            }`}
                        />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
