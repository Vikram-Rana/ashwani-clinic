function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <span className="welcome-badge">
            🌿 Ayurvedic Medical Care
          </span>

          <h1>
            Dr. Ashwani Rana
          </h1>

          <h2>
            B.A.M.S.
          </h2>

          <p className="hero-description">
            Experienced Ayurvedic Medical Officer providing
            compassionate and personalized Ayurvedic consultation
            in Karnal.
          </p>

          <div className="hero-buttons">

            <a
              href="tel:9996407016"
              className="primary-button"
            >
              📞 Call for Consultation
            </a>

            <a
              href="#services"
              className="secondary-button"
            >
              View Services
            </a>

          </div>

          <div className="consultation-info">

            <div>
              <strong>₹200</strong>
              <span>Consultation Fee</span>
            </div>

            <div>
              <strong>6 PM – 9 PM</strong>
              <span>Private Clinic</span>
            </div>

          </div>

        </div>


        {/* Doctor Image */}
        <div className="hero-doctor">
          <img 
          src={`${process.env.PUBLIC_URL}/images/doctor.png`} 
          alt="Dr. Ashwani Rana"
          className="doctor-image"
        />
        </div>

      </div>

    </section>
  );
}

export default Hero;