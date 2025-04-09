import { Button, Divider, LinearProgress, TextField, Typography } from "@mui/material";
import NavbarLink from "../components/NavbarLink";
import { useEffect, useState } from "react";
import InsightForm from "../features/insights/InsightForm";
import InsightCard from "../features/insights/InsightCard";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db/db";
import { useLocation } from "react-router";

export default function InsightsPage() {
    const [isCreating, setIsCreating] = useState(false);
    const insights = useLiveQuery(() => db.insights.toArray());
    const { state } = useLocation();
    
    useEffect(() => {
        if (state?.openForm) {
            setIsCreating(true)
        }
    }, [state])

    if (!insights) return <LinearProgress />
        

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
                        focus={isCreating}
                        className={`mt-3 ${
                            isCreating ? "flex flex-col gap-3" : "hidden"
                        }`}
                        onCleanup={() => setIsCreating(false)}
                    />
                </div>
                <div className="my-3 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {insights.map((insight, i) => (
                        <InsightCard
                            key={i}
                            insight={insight}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
