import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

function Layout({children,}: { children: React.ReactNode }) {
    return <section >
        <NavBar/>
        {children}
        <Footer/>
    </section>
}

export default Layout;