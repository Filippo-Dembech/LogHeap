import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router";
import InsightCard from '../features/insights/InsightCard';

export default function SamplesPage() {
    
    const location = useLocation();

    useEffect(() => {
        if (location?.state?.targetId) {
            const target = document.getElementById(location.state.targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [location])
    
    return (
        <div className="py-6 px-8">
            <div id="insights">
                <Typography variant="h2">Insights Samples</Typography>
                <InsightCard insight={{ title: "Javascript Feature", content: "Javascript is Single-Threaded"}}/>
                <InsightCard insight={{ title: "Memory Management", content: "The Stack is for static memory (e.g. variables), while the Heap is for dynamic memory (e.g. functions, objects, ...)."}}/>
                <InsightCard insight={{ title: "Array vs Map", content: "Searching in an array is O(n), but searching is a map is O(1)."}}/>
            </div>
            <div id="questions">
                <Typography variant="h2">Questions Samples</Typography>
            </div>
            <div id="patterns">
                <Typography variant="h2">Patterns Samples</Typography>
            </div>
            <div id="todos">
                <Typography variant="h2">Todos Samples</Typography>
            </div>
        </div>
    )
}