import ButtonNav from "./ui/buttonNav"

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="nama-slogan">
                    <h1>SMK NEGERI 1 TUBAN</h1>
                    <h3>TERDEPAN DAN TERPERCAYA</h3>
                </div>

                <div className="btn-nav">
                    <ButtonNav />
                </div>
            </div>
        </section>
    )
}