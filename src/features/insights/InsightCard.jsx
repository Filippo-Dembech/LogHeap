import { Divider, Typography } from "@mui/material";

export default function InsightCard({ insight }) {
    return (
        <div
            className="codeblock shadow-sm rounded-xl p-5 flex flex-col gap-2"
        >
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
        </div>
    );
}
