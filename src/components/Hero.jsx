const Hero = () => {
    return (
        <div className="hero-container">
            <img className="profile-img" src="https://vietlongdang.github.io/portfolio/images/profile.jpeg" alt="Alex Dang personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Alex Dang 👋</h1>
                <p>
                    I'm computer science graduate software developer.<br />
                    My passion is crafting innovative and user-friendly apps for various platforms.
                </p>
                <div className="social-icons">
                    <a
                        href="https://t.me/dangalex"
                        aria-label="Telegram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a
                        href="https://github.com/vietlongdang"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dang-viet-long"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;