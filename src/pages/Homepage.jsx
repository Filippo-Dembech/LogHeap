import { Typography } from "@mui/material";
import TypewriterHero from "../ui/Typewriter";

export default function Homepage() {

    return (
        <div className="max-w-[800px] m-auto">
            <Typography
                variant="h1"
                textAlign="center"
                fontWeight="bold"
                marginY={4}
            >
                Log-Heap
            </Typography>
            <TypewriterHero />
            <p>
                Stash all your questions, your todos, your insightful readings
                in a single place.
            </p>
        </div>
    );
}
