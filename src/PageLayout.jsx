import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Navbar from "./ui/Navbar";
import { Outlet } from "react-router";

export default function PageLayout() {
    const responsiveTheme = responsiveFontSizes(createTheme());

    return (
        <ThemeProvider theme={responsiveTheme}>
            <div>
                <Navbar />
                <main className="p-5 sm:p-10 md:p-15 lg:20">
                    <Outlet />
                </main>
            </div>
        </ThemeProvider>
    );
}
