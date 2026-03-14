import './App.css'

function App() {
  return (
    <div className="site">
      {/* Hero Section with Video */}
      <section className="hero-section">
        <div className="hero-label">New Release</div>
        <h1 className="artist-name">소란 - 사과 하나를 그려</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/CU3QtuHIpS8?rel=0&modestbranding=1"
            title="고영배 신곡 MV"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Divider */}
      <div className="divider">
        <span className="divider-dot" />
        <span className="divider-line" />
        <span className="divider-dot" />
      </div>

      {/* Photo Section */}
      <section className="photo-section">
        <div className="photo-frame">
          <img src="/artist.jpg" alt="고영배" className="artist-photo" />
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <p>&copy; 2026 고영배. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
