import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Alex Dang Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1MJrkX-PxA-DDYsnH1Z-6ljyV9KJy8KJAogumHX5g59E/edit?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;