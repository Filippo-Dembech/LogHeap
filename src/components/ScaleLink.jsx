import { NavLink } from "react-router";
import ScaleText from "./ScaleText";

export default function ScaleLink({ to, ...props}) {
    return (
        <NavLink to={to} className="relative">
            <ScaleText
                className="after:transition-all after:border-0 after:w-0 after:content-[''] after:absolute hover:after:border-1 after:bottom-0 after:left-0 hover:after:w-full"
                ratio={1}
            >
                {props.children}
            </ScaleText>
        </NavLink>
    );
}
