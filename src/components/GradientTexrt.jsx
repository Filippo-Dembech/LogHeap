export default function GradientText({ from="from-fuchsia-800", via="via-purple-700", to="to-fuchsia-500", className, ...props }) {
    return (
        <span className={`text-transparent bg-clip-text font-extrabold bg-gradient-to-r ${from} ${via} ${to} ${className}`} >
            {props.children}
        </span>
    );
}
