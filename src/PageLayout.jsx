import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Navbar from "./ui/Navbar";
import { Outlet } from "react-router";
import { colors } from './theme/colors';

export default function PageLayout() {
    const theme = createTheme({
        palette: {
            primary: {
                main: colors.fuchsia[600],
                dark: colors.fuchsia[800],
                light: colors.fuchsia[50],
            }
        }
    })
    const responsiveTheme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={responsiveTheme}>
            <div>
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <footer className="bg-fuchsia-300 mt-8 text-right p-10">
                    Created by Filippo Dembech ©
                </footer>
            </div>
        </ThemeProvider>
    );
}
