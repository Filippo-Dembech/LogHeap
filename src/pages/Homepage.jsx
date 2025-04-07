import { Typography } from "@mui/material";
import TypewriterHero from "../ui/TypewriterHero";
import Areas from "../ui/Areas";
import GradientText from "../components/GradientTexrt";

export default function Homepage() {
    return (
        <div className="max-w-[800px] m-auto flex flex-col gap-8 py-8">
            <Typography
                variant="h1"
                textAlign="center"
                fontWeight="bold"
            >
                <GradientText>Log-Heap</GradientText>
            </Typography>

            <div
                className="bg-purple-200 text-white py-8 px-3"
            >
                <Typography
                    variant="h4"
                    textAlign="center"
                    fontFamily="Maven Pro"
                    fontWeight="bold"
                >
                    Stash all your Computer Science knowledge in a single place
                </Typography>
            </div>

            <TypewriterHero />

            <Areas className="bg-purple-200 py-8"/>
        </div>
    );
}
