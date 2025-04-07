import { HashRouter, Route, Routes } from "react-router";
import PageLayout from "./PageLayout";
import Homepage from "./pages/Homepage";
import InsightsPage from "./pages/InsightsPage";
import QuestionsPage from "./pages/QuestionsPage";
import PatternsPage from "./pages/PatternsPage";
import TodosPage from "./pages/TodosPage";
import SamplesLayout from "./SamplesLayout";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="insights" element={<InsightsPage />} />
                    <Route path="questions" element={<QuestionsPage />} />
                    <Route path="patterns" element={<PatternsPage />} />
                    <Route path="todos" element={<TodosPage />} />
                    <Route path="samples">
                        <Route path="insights" element={<p>Insights samples</p>}/>
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
}
