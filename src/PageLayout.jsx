import Navbar from "./ui/Navbar";
import { Outlet } from "react-router";

export default function PageLayout() {

    return (
        <div>
            <main>
                <Navbar />
                <Outlet />
            </main>
        </div>
    );
}
