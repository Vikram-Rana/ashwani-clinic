function Map() {
  return (
    <section className="clinic-map-section" id="map">

      {/* Google Map */}
      <div className="clinic-map-background">
        <iframe
        title="Ashwani Clinic Location Map"
        src="https://www.google.com/maps/embed?pb=!4v1788521851110!6m8!1m7!1sxhyRHN7Ft-NLxu7dJedHXw!2m2!1d29.68822447897555!2d76.96560083315696!3f180.2863!4f0!5f0.7820865974627469"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="clinic-map-overlay"></div>

      {/* Contact Details */}
      <div className="clinic-map-container">

        <div className="clinic-map-card">

          <span className="clinic-map-label">
            CONTACT DETAILS
          </span>

          <h2>Visit Ashwani Clinic</h2>

          <p className="clinic-map-description">
            We are here to provide trusted and compassionate
            healthcare for you and your family.
          </p>

          <div className="clinic-map-detail">
            <div className="clinic-map-icon">📍</div>

            <div>
              <h3>Clinic Address</h3>

              <p>
                Kaithal Road,
                <br />
                Shiv Colony, Gali No. 1,
                <br />
                Karnal, Haryana
              </p>
            </div>
          </div>

          <div className="clinic-map-detail">
            <div className="clinic-map-icon">📞</div>

            <div>
              <h3>Phone</h3>

              <a href="tel:9996407016">
                9996407016
              </a>
            </div>
          </div>

          <div className="clinic-map-detail">
            <div className="clinic-map-icon">🕕</div>

            <div>
              <h3>Clinic Hours</h3>

              <p>
                Monday – Saturday
                <br />
                6 PM – 9 PM
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/5t5c5Fc61dnFBYiB9"
            target="_blank"
            rel="noopener noreferrer"
            className="clinic-map-button"
          >
            Get Directions →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Map;