import React from "react";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return(
        <>
            <h1>Single Product Layout</h1>
            {children}
        </>
    )
}