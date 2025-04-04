import { HashRouter, Route, Routes } from "react-router";
import PageLayout from "./PageLayout";
import Homepage from "./pages/Homepage";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/insights" element={<p>Insights</p>} />
                    <Route path="/questions" element={<p>questions</p>} />
                    <Route path="/patterns" element={<p>patterns</p>} />
                    <Route path="/todos" element={<p>todos</p>} />
                </Route>
            </Routes>
        </HashRouter>
    );
}
