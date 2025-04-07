import { Typography } from "@mui/material";
import { NavLink } from "react-router";

export default function Logo({ className }) {
    return (
        <NavLink to="/" className={`flex items-center gap-2 ${className}`}>
            <img
                className="w-15"
                src="logheap-logo.png"
                alt="logo-img"
            />
            <Typography variant="h5"><code>Log.Heap()</code></Typography>
        </NavLink>
    );
}
