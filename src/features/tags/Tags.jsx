export default function Tags({ tags }) {
    return (
        <div className="text-xs">
            <span className="mr-2">TAGS:</span>
            {tags.map((tag) => (
                <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 font-mono rounded-lg mx-1">
                    {tag.label}
                </span>
            ))}
        </div>
    )
}