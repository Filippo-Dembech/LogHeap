export default function Tags({ className, tags }) {
    return (
        <div className={`text-xs ${className}`}>
            <span className="mr-2 font-bold tracking-wider">TAGS:</span>
            {tags.map((tag) => (
                <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 font-mono rounded-lg mx-1">
                    {tag.label}
                </span>
            ))}
        </div>
    )
}