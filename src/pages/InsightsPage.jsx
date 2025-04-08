import {
    Button,
    Divider,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import NavbarLink from "../components/NavbarLink";
import { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";

export default function InsightsPage() {
    const [isCreating, setIsCreating] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [insights, setInsights] = useState([]);
    const [errors, setErrors] = useState({});

    function resetForm() {
        setNewTitle("");
        setNewContent("");
        setErrors({});
    }
    
    useEffect(() => {
        if (!errors) return
        console.log("hei")
    }, [errors])

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
                    <div className="mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {insights.map((insight, i) => (
                            <div
                                key={i}
                                className="shadow-cool rounded-xl p-5 flex flex-col gap-2"
                            >
                                <Typography
                                    variant="h5"
                                    fontWeight={500}
                                >
                                    {insight.title}
                                </Typography>
                                <Divider />
                                <p>{insight.content}</p>
                            </div>
                        ))}
                    </div>
                    <div
                        style={{ display: isCreating ? "flex" : "none" }}
                        className="relative shadow-cool p-8 flex-col gap-3 rounded-lg mb-3"
                    >
                        <span className="absolute top-1 right-1">
                            <IconButton
                                onClick={() => setIsCreating(false)}
                                size="small"
                            >
                                <GiCancel />
                            </IconButton>
                        </span>
                        <p>What is the insights about?</p>
                        <TextField
                            label="Title"
                            error={errors?.title}
                            helperText={errors?.title}
                            defaultValue={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <p>What is it?</p>
                        <TextField
                            label="Content"
                            error={errors?.content}
                            helperText={errors?.content}
                            defaultValue={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            onClick={() => {
                                if (!newTitle)
                                    setErrors((curr) => ({
                                        ...curr,
                                        title: "Title is required.",
                                    }));
                                if (!newContent)
                                    setErrors((curr) => ({
                                        ...curr,
                                        content: "Content is required.",
                                    }));
                                useState(null)
                                /*
                                setInsights((curr) => [
                                    ...curr,
                                    { title: newTitle, content: newContent },
                                ]);
                                resetForm();
                                setIsCreating(false);
                                */
                            }}
                        >
                            Save
                        </Button>
                    </div>
                    <Button onClick={() => setIsCreating(true)}>
                        + New Insight
                    </Button>
                </div>
            </div>
        </div>
    );
}
