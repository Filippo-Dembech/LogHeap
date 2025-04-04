import { Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

function TabContent(props) {
    return <div className="p-8 bg-fuchsia-700 text-violet-100">{props.children}</div>;
}

function Area({ title, ...props }) {
    return (
        <div className="bg-linear-80 to-purple-600 via-purple-800 from-fuchsia-800 p-4 rounded-2xl">
            <Typography
                variant="h4"
                fontWeight="bold"
                color="white"
                textTransform="uppercase"
            >
                {title}
            </Typography>
            <Divider className="bg-white"/>
            <p className="text-slate-50 mt-3">{props.children}</p>
        </div>
    );
}

export default function Areas() {
    const [activeTab, setActiveTab] = useState(0);

    const setTab = (e, newValue) => setActiveTab(newValue);

    const areas = [
        {
            title: "insights",
            content:
                "Stash all the insights of a language, all the syntactic quirks, all the special cases and things that you find insightful and useful.",
        },
        {
            title: "questions",
            content:
                "You are reading a documentation or a Stack O. answer and you don't know what the author is talking about? Don't worry, stash all the questions you have here and check them out later! If you try to answer EVERY single question you have while reading docs, answers, or something else you will never get to the end of it. Stash questions and keep reading...",
        },
        {
            title: "patterns",
            content:
                "You have read a lot of docs and code and you have found interesting patterns you are willing to save. Save them here! Syntax patterns, coding patterns, whathever you want...",
        },
        {
            title: "todos",
            content:
                "Some tech to check out? Some new article you want to read? Some new tutorial to watch? Stash all of them here in the log heap! You will check them later!",
        },
    ];

    return (
        <div>
            <div className="flex flex-col gap-5 px-8 sm:hidden">
                {areas.map((area) => (
                    <Area
                        key={area.content}
                        title={area.title}
                    >
                        {area.content}
                    </Area>
                ))}
            </div>
            <div className="hidden sm:block sm:w-min sm:m-auto bg-fuchsia-200 rounded-2xl overflow-hidden">
                <Tabs value={activeTab} onChange={setTab} centered>
                    {areas.map((area, i) => (
                        <Tab
                            key={i}
                            value={i}
                            label={area.title}
                        />
                    ))}
                </Tabs>
                {activeTab === 0 && <TabContent>{areas[0].content}</TabContent>}
                {activeTab === 1 && <TabContent>{areas[1].content}</TabContent>}
                {activeTab === 2 && <TabContent>{areas[2].content}</TabContent>}
                {activeTab === 3 && <TabContent>{areas[3].content}</TabContent>}
            </div>
        </div>
    );
}
