import Logo from "./Logo";
import { Drawer, IconButton } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import NavbarLink from "../components/NavbarLink";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen((curr) => !curr);

    const navItems = [
        {
            path: "/",
            label: "Homepage",
        },
        {
            path: "/insights",
            label: "Insights",
        },
        {
            path: "/questions",
            label: "Questions",
        },
        {
            path: "/patterns",
            label: "Patterns"
        },
        {
            path: "/todos",
            label: "Todos"
        }
    ];

    return (
        <nav className="bg-purple-400 p-3">
            <div className="flex justify-between md:hidden">
                <IconButton onClick={toggleDrawer}>
                    <RxHamburgerMenu />
                </IconButton>
                <Logo onlyIcon/>
            </div>
            <div className="hidden items-center justify-start md:flex">
                <Logo className="mr-15"/>
                <div className="flex flex-1 justify-evenly">
                    {navItems.map((navItem) => (
                        <NavbarLink
                            key={navItem.label}
                            to={navItem.path}
                        >
                            {navItem.label}
                        </NavbarLink>
                    ))}
                </div>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
            >
                <div className="py-7 pl-4 pr-6">
                    <Logo  onClick={() => isOpen && toggleDrawer()} />
                    <div className="flex flex-col items-center gap-3 mt-5 p-3">
                        {navItems.map((navItem) => (
                            <NavbarLink
                                key={navItem.label}
                                to={navItem.path}
                                onClick={toggleDrawer}
                            >
                                {navItem.label}
                            </NavbarLink>
                        ))}
                    </div>
                </div>
            </Drawer>
        </nav>
    );
}
