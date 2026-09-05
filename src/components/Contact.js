function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="section-container">

        <div className="contact-content">

          <div>

            <span>CONTACT</span>

            <h2>
              Book a Consultation
            </h2>

            <p>
              For consultation or appointment-related information,
              please contact Dr. Ashwani Rana.
            </p>

            <a
              href="tel:9996407016"
              className="phone-number"
            >
              📞 9996407016
            </a>

          </div>


          <div className="address-card">

            <h3>
              📍 Ashwani Clinic
            </h3>

            <p>
              Kaithal Road,
              <br />
              Shiv Colony, Gali No. 1,
              <br />
              Karnal, Haryana
            </p>

            <p className="clinic-time">
              🕕 Clinic Hours: 6 PM – 9 PM
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;