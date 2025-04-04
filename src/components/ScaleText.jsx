export default function ScaleText({ ratio = 0, className, ...props }) {
    const scale =
        ratio === 1 ? "scale-110" :
        ratio === 2 ? "scale-120" :
        ratio === 3 ? "scale-150" :
                        "scale-200";
    return (
        <span
            className={`inline-block transition-transform hover:${scale} ${className}`}
        >
            {props.children}
        </span>
    );
}
