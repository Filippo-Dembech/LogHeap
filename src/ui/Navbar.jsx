import Logo from "./Logo";
import { Drawer, IconButton } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import ScaleLink from "../components/ScaleLink";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen((curr) => !curr);

    const navItems = [
        {
            path: "/",
            label: "Homepage",
        },
    ];

    return (
        <nav className="bg-fuchsia-300 p-3 flex items-center justify-between sm:justify-start">
            <Logo className="hidden sm:flex sm:mr-15" />
            <div className="sm:hidden">
                <IconButton>
                    <RxHamburgerMenu onClick={toggleDrawer} />
                </IconButton>
            </div>
            <div className="hidden sm:flex">
                {navItems.map((navItem) => (
                    <ScaleLink
                        key={navItem.label}
                        to={navItem.path}
                    >
                        {navItem.label}
                    </ScaleLink>
                ))}
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
            >
                <div className="py-7 pl-4 pr-6">
                    <Logo />
                    <div className="flex flex-col items-center gap-3 mt-5 p-3">
                        {navItems.map((navItem) => (
                            <ScaleLink
                                key={navItem.label}
                                to={navItem.path}
                            >
                                {navItem.label}
                            </ScaleLink>
                        ))}
                    </div>
                </div>
            </Drawer>
        </nav>
    );
}
