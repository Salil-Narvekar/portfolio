import { useRef } from 'react'
import ImagePlate from '../Components/CertificateComponents/ImagePlate';
import achivementsImages from '../Data/achivementsImages'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import certificates from '../Data/certificates'

const Certifications = () => {
  const swiperRef = useRef(null);

  return (
    <div id='Certifications' className='bg-gradient-to-b from-slate-300 to-indigo-300 h-full pt-20 overflow-hidden'>

      <div className='sectionTitle' data-aos-offset="100" data-aos-mirror="true" data-aos='zoom-out'>Certifications</div>

      <div className='bg-gradient-to-b from-indigo-200 to-gray-400 h-12'></div>

      <div className='grid gap-4 bg-gradient-to-b from-gray-400 to-gray-300 pr-10 md:pr-14 lg:pr-14 pl-10 md:pl-14 lg:pl-14 py-2'>
        <section className="certificate-swiper">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            loop={true}
            autoplay={{ delay: 5000 }}
            speed={800}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={index}>
                <div className="banner-slide">
                  <div className="img-container">
                    <img src={certificate.image} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* ⬇  Buttons must be HERE (inside Swiper) */}
            <div className="swiper-button-prev-custom">&#10094;</div>
            <div className="swiper-button-next-custom">&#10095;</div>
          </Swiper>
        </section>

        <div className='sectionTitle mb-10 mt-10' data-aos-offset="100" data-aos-mirror="true" data-aos='zoom-out'>Position of Responsibility</div>

        <div className='grid sm:grid-cols-3 sm:grid-flow-row gap-2'>

          {
            achivementsImages.map((achivement, index) => (
              <ImagePlate key={index} index={index} src={achivement.image} title={achivement.title} />
            ))
          }
        </div>
      </div>
      <div className='bg-gradient-to-b from-gray-300 to-indigo-300 h-20'></div>
    </div>
  )
}

export default Certifications