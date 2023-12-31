import About from "@/components/About";
import Employees from "@/components/Employees";
import FormContact from "@/components/FormContact";
import Portfolio from "@/components/Portfolio";
import HomePage from "@/components/HomePage";
import React from "react";
import Carrier from "@/components/Carrier";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/*<section>*/}
            {/*    <Navbar/>*/}
            {/*</section>*/}
            <section is="home" className="flex min-h-screen flex-col items-center justify-between p-24">
                <HomePage/>
            </section>
            <section id="about" className="flex min-h-screen flex-col items-center justify-between p-24">
                <About/>
            </section>
            <section id="employees" className="flex min-h-screen flex-col items-center justify-between p-24">
                <Employees/>
            </section>
            <section id="carrier" className="flex min-h-screen flex-col items-center p-24">
                <Carrier/>
            </section>
            <section id="portfolio" className="flex min-h-screen flex-col items-center justify-between p-24">
                <Portfolio/>
            </section>
            <section id="formContact" className="flex min-h-screen flex-col items-center justify-between p-24">
                <FormContact/>
            </section>
        </main>
    )
}
