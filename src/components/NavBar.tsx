import Link from "next/link";

function NavBar(props) {
    return (
        <nav className="group flex justify-around rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href="/"
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
                Home
            </Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About us</Link>
        </nav>
    );
}

export default NavBar;