import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router";

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
                <ol>
                    <li><strong>Javascript Feature</strong>: Javascript is Single-Threaded.</li>
                    <li><strong>Memory Management</strong>: The Stack is for static memory (e.g. variables), while the Heap is for dynamic memory (e.g. functions, objects, ...).</li>
                    <li><strong>Array vs Map</strong>: Searching in an array is O(n), but searching is a map is O(1).</li>
                </ol>
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