import { HashRouter, Route, Routes } from "react-router";
import PageLayout from "./PageLayout";
import Homepage from "./Homepage";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route path="/" element={<Homepage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}
