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
                    <Typography variant="h3" fontWeight="bold">WHAT IS Log-Heap?</Typography>
                    <p className="mt-2">
                        A place where to keep all your coding knowledge. Save
                        interesting finds while browsing the web — things you
                        don't want to forget. Stash them for later and stay
                        focused on your workflow. Track your coding journey
                        without interruptions.
                    </p>
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
