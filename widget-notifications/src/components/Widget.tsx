export function Widget() {
    return (
        <div className="w-[448px] rounded overflow-hidden">
            {/* HEADER */}
            <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
                <span className="font-bold">Notifications</span>
                <button className="text-xs font-bold text-violet-500 uppercase hover:text-violet-400">mark all as read</button>
            </div>
        </div>
    )
}