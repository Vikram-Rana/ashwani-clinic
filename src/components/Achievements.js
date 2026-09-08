import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Achievements() {
const awards = [
  `${process.env.PUBLIC_URL}/images/1.jpg`,
  `${process.env.PUBLIC_URL}/images/2.jpg`,
  `${process.env.PUBLIC_URL}/images/3.jpg`,
  `${process.env.PUBLIC_URL}/images/4.jpg`,
  `${process.env.PUBLIC_URL}/images/5.jpg`,
  `${process.env.PUBLIC_URL}/images/6.jpg`,
  `${process.env.PUBLIC_URL}/images/7.jpg`,
  `${process.env.PUBLIC_URL}/images/8.jpg`,
  `${process.env.PUBLIC_URL}/images/9.jpg`,
  `${process.env.PUBLIC_URL}/images/10.jpg`,
  `${process.env.PUBLIC_URL}/images/11.jpg`,
  `${process.env.PUBLIC_URL}/images/12.jpg`,
  `${process.env.PUBLIC_URL}/images/13.jpg`,
  `${process.env.PUBLIC_URL}/images/14.jpg`,
  `${process.env.PUBLIC_URL}/images/15.jpg`,
  `${process.env.PUBLIC_URL}/images/16.jpg`,
  `${process.env.PUBLIC_URL}/images/17.jpg`,
  `${process.env.PUBLIC_URL}/images/18.jpg`,
  `${process.env.PUBLIC_URL}/images/19.jpg`,
  `${process.env.PUBLIC_URL}/images/20.jpg`,
];

return ( <section className="achievements-section" id="achievements">

  <div className="achievements-container">

    {/* Section Heading */}
    <div className="achievements-heading">

      <span>ACHIEVEMENTS & RECOGNITION</span>

      <h2>
        A Journey of Excellence
      </h2>

      <p>
        Recognized for professional excellence, leadership,
        and dedicated service to the medical community.
      </p>

    </div>


    {/* Achievement Cards */}
    <div className="achievements-grid">

      {/* NIMA President */}
      <div className="achievement-card achievement-featured">

        <div className="achievement-icon">
          🏆
        </div>

        <div className="achievement-number">
          4 Years
        </div>

        <h3>
          NIMA Karnal President
        </h3>

        <p>
          Served as President of NIMA Karnal on four occasions,
          contributing to the growth and development of the
          medical community.
        </p>

      </div>


      {/* Award */}
      <div className="achievement-card">

        <div className="achievement-icon">
          🥇
        </div>

        <div className="achievement-number">
          10+
        </div>

        <h3>
          Awards & Honours
        </h3>

        <p>
          Honoured with numerous awards and recognitions for
          outstanding contribution and commitment to healthcare.
        </p>

      </div>


      {/* Experience */}
      <div className="achievement-card">

        <div className="achievement-icon">
          ⭐
        </div>

        <div className="achievement-number">
          35+
        </div>

        <h3>
          Years of Excellence
        </h3>

        <p>
          Decades of dedicated medical practice and service,
          helping patients and families with compassionate care.
        </p>

      </div>


      {/* Community */}
      <div className="achievement-card">

        <div className="achievement-icon">
          🤝
        </div>

        <div className="achievement-number">
          1000+
        </div>

        <h3>
          Community Contributions
        </h3>

        <p>
          Actively involved in medical awareness programs,
          community initiatives, and professional activities.
        </p>

      </div>

    </div>

    {/* Bottom Highlight */}
    <div className="achievement-highlight">

      <div className="achievement-highlight-icon">
        🏅
      </div>

      <div>

        <span>PROFESSIONAL RECOGNITION</span>

        <h3>
          Committed to Excellence in Healthcare
        </h3>

        <p>
          Every recognition represents a commitment to
          professional integrity, continuous learning,
          and quality patient care.
        </p>

      </div>

    </div>


    {/* Awards Slider */}
    <div className="awards-slider-section"> 
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={1}

        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
        }}
      >

        {awards.map((award, index) => ( 
        <SwiperSlide key={index}> 
          <div className="award-image">
            <img
            src={award}
            alt={`Award ${index + 1}`}
            /> 
          </div> 
        </SwiperSlide>
        ))}
      </Swiper>


    </div>

  </div>

</section>


);
}

export default Achievements;
