import { NavLink, Outlet } from "react-router";
import Logo from "./ui/Logo";
import { Drawer, IconButton } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function PageLayout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen((curr) => !curr);

    return (
        <div>
            <nav className="bg-fuchsia-300 p-3 flex items-center justify-between">
                <Logo className="hidden sm:flex"/>
                <div className="sm:hidden">
                    <IconButton>
                        <RxHamburgerMenu onClick={toggleDrawer} />
                    </IconButton>
                </div>
                <div className="hidden sm:flex">
                    <NavLink className="hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:border-2">Homepage</NavLink>
                </div>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                >
                    <div className="p-3">
                        <Logo />
                        <div className="flex flex-col gap-3 mt-5">
                            <NavLink className="px-2 py-1 transition-colors rounded-lg hover:bg-slate-200">Homepage</NavLink>
                        </div>
                    </div>
                </Drawer>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
