import firefly from "@assets/img/firefly.png";

export default function Galeri() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-content">
          <img src={firefly} alt="tes galeri" />
        </div>
      </div>
    </section>
  );
}
