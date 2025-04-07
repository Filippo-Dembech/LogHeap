import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Typography } from "@mui/material";
import { FaMapPin, FaQuestion, FaTasks } from "react-icons/fa";
import { LuBlocks } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router";

function TabContent(props) {
    return <div className="p-8 bg-purple-50">{props.children}</div>;
}

function AreaContent({ title, content }) {
    return (
        <div className="flex flex-col gap-1 text-slate-700">
            <NavLink
                to={`/${title}`}
                className="relative bold text-3xl font-semibold text-purple-800 after:border-0 cursor-pointer self-start after:content-[''] hover:after:border-1 after:absolute after:bottom-0 after:transition-all after:w-0 after:left-0 hover:after:w-full pr-1"
            >
                {title}
            </NavLink>
            <p>{content}</p>
        </div>
    );
}

export default function Areas({ className }) {
    const [activeTab, setActiveTab] = useState(0);

    const setTab = (e, newValue) => setActiveTab(newValue);
    const navigate = useNavigate();

    const areas = [
        {
            title: "insights",
            icon: <FaMapPin />,
            content:
                "Collect all the cool and useful stuff you learn about the language.",
        },
        {
            title: "questions",
            icon: <FaQuestion />,
            content: "Confused while reading? Stash questions and keep going.",
        },
        {
            title: "patterns",
            icon: <LuBlocks />,
            content: "Found cool patterns in code or docs? Save them here!",
        },
        {
            title: "todos",
            icon: <FaTasks />,
            content:
                "Got tech, articles, or tutorials to check out? Stash them here for later!",
        },
    ];

    return (
        <div className={className}>
            <div className="flex flex-col px-8 gap-8 sm:hidden">
                {areas.map((area) => (
                    <div className="group bg-white shadow-md relative rounded-xl p-5 cursor-pointer transition-all hover:scale-105 hover:bg-purple-50" onClick={() => navigate(`/${area.title}`)}>
                        <Box
                            className="absolute top-0 right-0 scale-200 rotate-30 transition-all group-hover:rotate-0 group-hover:top-5 group-hover:right-5"
                            color="primary.main"
                        >
                            {area.icon}
                        </Box>
                        <Typography
                            variant="h4"
                            color="primary.main"
                        >
                            {area.title}
                        </Typography>
                        <p>{area.content}</p>
                    </div>
                ))}
            </div>
            <div className="hidden sm:block sm:w-min sm:m-auto bg-purple-200 rounded-2xl overflow-hidden">
                <Tabs
                    value={activeTab}
                    onChange={setTab}
                    centered
                >
                    {areas.map((area, i) => (
                        <Tab
                            key={i}
                            value={i}
                            label={area.title}
                        />
                    ))}
                </Tabs>
                {activeTab === 0 && (
                    <TabContent>
                        <AreaContent {...areas[0]} />
                    </TabContent>
                )}
                {activeTab === 1 && (
                    <TabContent>
                        <AreaContent {...areas[1]} />
                    </TabContent>
                )}
                {activeTab === 2 && (
                    <TabContent>
                        <AreaContent {...areas[2]} />
                    </TabContent>
                )}
                {activeTab === 3 && (
                    <TabContent>
                        <AreaContent {...areas[3]} />
                    </TabContent>
                )}
            </div>
        </div>
    );
}
