import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Alex Dang Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1qqCPSZn_RBRnvNsRvwHziovRkK2eTEv2U-O5Zvyb2m4/edit?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;