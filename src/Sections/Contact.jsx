import React, { useState } from 'react'
import MarqueeCell from '../Components/ContactComponents/MarqueeCell'
import Marquee from "react-fast-marquee";
import InputField from '../Components/InputField.jsx';
import Button from '../Components/Button.jsx';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import marqueeContent from '../Data/marqueeContent.js';

const Contact = () => {

  const [connectDetails, setConnectDetails] = useState({
    email: '',
    name: '',
    message: ''
  })

  const [validationMessage, setValidationMessage] = useState(false)
  const [validEmail, setValidEmail] = useState(null)

  const validateEmail = (email) => {
    const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(format.test(email))
  }

  const sendMail = () => {
    if (connectDetails.name && connectDetails.email && connectDetails.message && validEmail) {

      if (validateEmail) {

        setValidationMessage(false)
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=narvekarsalil1106@gmail.com&su=" + 'Through portfolio connect - Name: ' + connectDetails.name + ' | Email: ' + connectDetails.email +
          "&body=" + connectDetails.message + '%0A%0ARegards,%0A' + connectDetails.name)

      } else {
        setValidationMessage(true)
      }

    } else {
      setValidationMessage(true)
    }
  }

  return (
    <div id='Contact' className='bg-gradient-to-b from-indigo-300 to-indigo-200 h-full md:h-dvh lg:h-dvh pt-20 pb-10 md:pb-0 lg:pb-0 overflow-hidden'>

      <div className='grid sm:grid-cols-2 h-2/4 gap-4 md:gap-0 lg:gap-0 pr-4'>

        <div className='font-serif content-center justify-items-center pl-10 md:pl-20 lg:pl-20'>
          <span className='text-slate-600 contactTitle' data-aos-offset="80" data-aos-mirror="true" data-aos='zoom-out' data-aos-delay="100">Let's build </span><br />
          <span className='text-slate-600 contactTitle' data-aos-offset="80" data-aos-mirror="true" data-aos='zoom-out' data-aos-delay="300">something </span><br />
          <span className='text-slate-800 contactTitleDark' data-aos-offset="80" data-aos-mirror="true" data-aos='zoom-out' data-aos-delay="500">great together.</span>
        </div>

        <Marquee
          className='content-center cursor-grab marquee'
          behavior="scroll"
          direction="left"
          loop={0}
          speed={200}
          pauseOnHover={true}
          play={true}
        >
          <div className='grid grid-flow-col gap-20 mr-20' data-aos-offset="80" data-aos-mirror="true" data-aos='fade-left' data-aos-delay="1500">
            {
              marqueeContent.map((content, index) => (
                <MarqueeCell key={index} index={index} cellLogo={content.cellLogo} cellTitle={content.cellTitle} />
              ))
            }
          </div>
        </Marquee>

      </div>

      <div className='grid sm:grid-cols-2 pl-12 md:pl-20 lg:pl-20'>
        <div className='grid sm:grid-flow-row gap-2 justify-start content-start' data-aos-offset="10" data-aos-mirror="true" data-aos='zoom-out' data-aos-delay="400">

          <div className='grid grid-flow-row md:grid-flow-col lg:grid-flow-col gap-2'>

            <InputField
              name='email'
              id='email'
              label='Your email'
              validationMessage={(validationMessage && !connectDetails.email) ? 'email required' : validEmail === false && 'enter a valid email'}
              onChange={(e) => { setConnectDetails({ ...connectDetails, email: e.target.value }), validateEmail(e.target.value) }}
              error={validationMessage && !connectDetails.email && true}
              warning={validEmail ? true : false}
            />

            <InputField
              name='name'
              id='name'
              label='Your name'
              validationMessage={validationMessage && !connectDetails.name && 'name required'}
              onChange={(e) => setConnectDetails({ ...connectDetails, name: e.target.value })}
              error={validationMessage && !connectDetails.name && true}
              warning={null}
            />
          </div>

          <InputField
            name='message'
            id='message'
            label='Your message'
            validationMessage={validationMessage && !connectDetails.message && 'message required'}
            textArea={true}
            onChange={(e) => setConnectDetails({ ...connectDetails, message: e.target.value })}
            error={validationMessage && !connectDetails.message && true}
          />

          <Button label="Send" variant='outlined' buttonIcon={<ForwardToInboxIcon />} onClick={() => sendMail()} />
        </div>
      </div>
    </div>
  )
}

export default Contact