'use client'

export default function BottomBar() {
    return (
        <div className="h-20 w-full bg-amber-800">
            <div className="grid h-20 w-full grid-cols-3 gap-3">
                <div className="w-15 bg-red-500">Logo</div>
                <div className="bg-orange-500">Legal</div>
                <div className="bg-violet-500">Contact</div>
            </div>
        </div>
    )
}