import React from 'react'
import ImagePlate from '../Components/CertificateComponents/ImagePlate';
import achivementsImages from '../Data/achivementsImages'
import certificates from '../Data/certificates'

const Certifications = () => {

  return (
    <div id='Certifications' className='bg-gradient-to-b from-slate-300 to-indigo-300 h-full pt-20 overflow-hidden'>

      <div className='sectionTitle' data-aos-offset="100" data-aos-mirror="true" data-aos='zoom-out'> Certifications & Positions of Responsibity </div>

      <div className='bg-gradient-to-b from-indigo-200 to-gray-400 h-12'></div>

      <div className='grid gap-4 bg-gradient-to-b from-gray-400 to-gray-300 pr-10 md:pr-14 lg:pr-14 pl-10 md:pl-14 lg:pl-14 py-2'>
        <div className='grid sm:grid-flow-col gap-2'>
          {
            certificates.map((certificate, index) => (
              <ImagePlate key={index} index={index} src={certificate.image} title={certificate.title} onClick={() => window.open(certificate.url)} />
            ))
          }
        </div>

        <div className='grid sm:grid-cols-3 sm:grid-flow-row gap-2'>
          {
            achivementsImages.map((achivement, index) => (
              <ImagePlate key={index} index={index} src={achivement.image} title={achivement.title}/>
            ))
          }
        </div>
      </div>
      <div className='bg-gradient-to-b from-gray-300 to-indigo-300 h-20'></div>
    </div>
  )
}

export default Certifications