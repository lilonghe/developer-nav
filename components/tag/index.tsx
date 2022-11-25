import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
    return (
        <div className="px-1.5 py-0.5 rounded text-xs inline-block border mr-1 bg-gray-300/20 text-gray-600">
            {children}
        </div>
    )
}