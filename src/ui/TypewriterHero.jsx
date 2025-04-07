import { Typography } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import { useNavigate } from "react-router";

export default function TypewriterHero({ className }) {
    const navigate = useNavigate();

    function goTo(text) {
        if (text[0] === "i") navigate("/insights");
        if (text[0] === "q") navigate("/questions");
        if (text[0] === "p") navigate("/patterns");
        if (text[0] === "t") navigate("/todos");
    }
    return (
        <div className={className}>
            <Typography
                variant="h2"
                style={{ fontSize: "clamp(1rem, 7vw, 3.4rem)" }}
            >
                <code className="flex justify-between px-5 sm:px-10 md:px-22">
                    <span>Log.Heap(</span>
                    <span>
                        <span
                            className="inline-block text-fuchsia-800 font-bold cursor-pointer"
                            onClick={(e) => goTo(e.target.innerText)}
                        >
                            <TypewriterComponent
                                options={{
                                    strings: [
                                        "insights",
                                        "questions",
                                        "patterns",
                                        "todos",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    deleteSpeed: 60,
                                }}
                            />
                        </span>
                    </span>
                    <span>)</span>
                </code>
            </Typography>
        </div>
    );
}
