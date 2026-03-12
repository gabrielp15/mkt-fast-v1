import React from 'react';
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <img
            src="/logo.png?v=fixed"
            alt="Fast MKT Logo"
            className={cn("h-16 w-auto object-contain pointer-events-none select-none", className)}
        />
    );
}
