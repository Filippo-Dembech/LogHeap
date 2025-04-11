import { CircularProgress, Divider, Typography } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db/db";
import Tags from "../tags/Tags";

export default function InsightCard({ insight }) {
    const tags = useLiveQuery(() =>
        db.tags.where("id").anyOf(insight.tagsId).toArray()
    );

    if (!tags) return <CircularProgress />;

    return (
        <div className="codeblock shadow-sm rounded-xl p-5 flex flex-col gap-4">
            <div>
                <Typography
                    variant="h5"
                    fontWeight={700}
                    marginBottom={1}
                >
                    {insight.title}
                </Typography>
                <Divider />
            </div>
            <div
                className="bg-slate-50 p-3 rounded-xl"
                dangerouslySetInnerHTML={{
                    __html: insight.content,
                }}
            />{" "}
            <Tags className="mt-auto" tags={tags} />
        </div>
    );
}
