import { Typography } from "@mui/material";
import TypewriterHero from "../ui/Typewriter";
import Areas from "../ui/Areas";
import GradientText from "../components/GradientTexrt";

export default function Homepage() {
    return (
        <div className="max-w-[800px] m-auto">
            <div className="p-4">
                <Typography
                    variant="h1"
                    textAlign="center"
                    fontWeight="bold"
                    marginY={4}
                >
                    <GradientText>Log-Heap</GradientText>
                </Typography>

                <TypewriterHero />
            </div>

            <div className="flex flex-col gap-8 mt-8">
                <div className="bg-linear-90 from-purple-400 to-fuchsia-500 p-8 mx-5 rounded-2xl">
                    <Typography variant="h4" textAlign="center" fontWeight="">Stash all your Computer Science knowledge in a single place</Typography>
                </div>
                <Typography
                    variant="h3"
                    textAlign="center"
                >
                    <GradientText>AREAS</GradientText>
                </Typography>
                <Areas />
            </div>
        </div>
    );
}
