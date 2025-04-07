import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";

export default function SamplesPage() {
    
    const location = useLocation();
    
    console.log(location.state.targetId)

    useEffect(() => {
        if (location?.state?.targetId) {
            const target = document.getElementById(location.state.targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [location])
    
    return (
        <div>
            <div id="insights">
                <Typography variant="h2">Insights Samples</Typography>
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