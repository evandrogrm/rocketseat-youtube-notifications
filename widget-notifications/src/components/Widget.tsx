import { Rocket } from 'lucide-react'

export function Widget() {
    return (
        <div className="w-[448px] rounded overflow-hidden">
            {/* HEADER */}
            <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
                <span className="font-bold">Notifications</span>
                <button className="text-xs font-bold text-violet-500 uppercase hover:text-violet-400">mark all as read</button>
            </div>
            {/* RECENT SECTION */}
            <div>
                <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
                    Recent
                </div>

                <div className="divide-y-2 divide-zinc-950">
                    <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
                        <Rocket className="w-6 h-6 text-violet-500 mt-3" />
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed text-zinc-100">You received a <strong>invitation</strong> to be part of the <strong>Rocketseat</strong> company.</p>
                            <div className="text-xxs text-zinc-400 flex items-center gap-2">
                                <span>Invite</span>
                                <span>3 minutes ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
                        <Rocket className="w-6 h-6 text-violet-500 mt-3" />
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed text-zinc-100">You received a <strong>invitation</strong> to be part of the <strong>Rocketseat</strong> company.</p>
                            <div className="text-xxs text-zinc-400 flex items-center gap-2">
                                <span>Invite</span>
                                <span>3 minutes ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PAST SECTION */}
            <div>
                <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
                    Past
                </div>

                <div className="divide-y-2 divide-zinc-950">
                    <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
                        <Rocket className="w-6 h-6 text-violet-500 mt-3" />
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed text-zinc-400">You received a <strong>invitation</strong> to be part of the <strong>Rocketseat</strong> company.</p>
                            <div className="text-xxs text-zinc-400 flex items-center gap-2">
                                <span>Invite</span>
                                <span>3 minutes ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
                        <Rocket className="w-6 h-6 text-violet-500 mt-3" />
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed text-zinc-400">You received a <strong>invitation</strong> to be part of the <strong>Rocketseat</strong> company.</p>
                            <div className="text-xxs text-zinc-400 flex items-center gap-2">
                                <span>Invite</span>
                                <span>3 minutes ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}