import React from "react";
import NavBar from "@/components/NavBar";

function Layout({children,}: { children: React.ReactNode }) {
    return <section >
        <NavBar/>
        {children}
    </section>
}

export default Layout;