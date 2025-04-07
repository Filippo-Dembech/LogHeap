import { NavLink } from "react-router";

export default function ScaleLink({ to, ...props}) {
    return (
        <NavLink to={to} className="relative">
            <div
                className="uppercase tracking-widest after:transition-all after:border-0 after:w-0 after:content-[''] after:absolute hover:after:border-1 after:bottom-0 after:left-0 hover:after:w-full"
            >
                {props.children}
            </div>
        </NavLink>
    );
}
