import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/">Next.js Crash Course</Link>
                </div>
                <nav className="links">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/about/team">Team</Link>
                    <Link href="/code/repos">Code</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
