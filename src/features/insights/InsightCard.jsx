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
        <div className="codeblock shadow-sm rounded-xl p-5 flex flex-col gap-2">
            <Typography
                variant="h5"
                fontWeight={700}
            >
                {insight.title}
            </Typography>
            <Divider />
            <div
                dangerouslySetInnerHTML={{
                    __html: insight.content,
                }}
            />{" "}
            <Tags className="mt-2" tags={tags} />
        </div>
    );
}
