import { Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import TypewriterComponent from "typewriter-effect";

export default function Homepage() {
    const navigate = useNavigate();

    function goTo(text) {
        if (text[0] === "i") navigate("/insights");
        if (text[0] === "q") navigate("/questions");
        if (text[0] === "p") navigate("/patterns");
        if (text[0] === "t") navigate("/todos");
    }

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
            <Typography
                variant="h2"
                style={{ fontSize: "min(3.4rem, 7vw)" }}
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
            <p>
                Stash all your questions, your todos, your insightful readings
                in a single place.
            </p>
        </div>
    );
}
