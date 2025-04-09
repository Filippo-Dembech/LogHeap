import { Button, Divider, Typography } from "@mui/material";
import NavbarLink from "../components/NavbarLink";
import { useState } from "react";
import InsightForm from "../features/insights/InsightForm";

export default function InsightsPage() {
    const [isCreating, setIsCreating] = useState(false);
    const [insights, setInsights] = useState([]);

    function addInsight(insight) {
        setInsights((curr) => [...curr, insight]);
    }

    return (
        <div className="p-8 flex flex-col gap-8">
            <Typography
                variant="h2"
                fontWeight={500}
            >
                INSIGHTS
            </Typography>
            <div>
                <p>
                    Your insights are all the important, useful or just
                    interesting facts about a Computer Science field. An
                    important language specific feature, Some deep dive into a
                    concept you don't know well, something you have finally
                    understood, and more.
                </p>
                <p>
                    To see some examples of what is meant by <em>insights</em>{" "}
                    go{" "}
                    <NavbarLink
                        to="/samples"
                        state={{ targetId: "insights" }}
                    >
                        Here
                    </NavbarLink>
                </p>
            </div>
            <Divider />
            <div>
                <Typography variant="h3">Your Insights</Typography>
                <div className="mt-4">
                    <Button onClick={() => setIsCreating(true)}>
                        + New Insight
                    </Button>
                    <InsightForm
                        className={`mt-3 ${isCreating ? "flex flex-col gap-3" : "hidden"}`}
                        onSave={(insight) => addInsight(insight)}
                        onCleanup={() => setIsCreating(false)}
                    />
                </div>
                <div className="my-3 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {insights.map((insight, i) => (
                        <div
                            key={i}
                            className="shadow-sm rounded-xl p-5 flex flex-col gap-2"
                        >
                            <Typography
                                variant="h5"
                                fontWeight={500}
                            >
                                {insight.title}
                            </Typography>
                            <Divider />
                            <div dangerouslySetInnerHTML={{ __html: insight.content}} />                       </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
