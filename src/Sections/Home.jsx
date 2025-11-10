import ResumeButton from '../Components/ResumeButton'
import SkillsPlate from '../Components/SkillsPlate'
import TypewriterComponent from 'typewriter-effect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div id='Home' className='homePageLayout bg-gradient-to-b from-indigo-300 to-indigo-200'>

      <div className='self-description'>
        <h2 className="welcome" data-aos-offset="90" data-aos-mirror="true" data-aos='fade-right'>Welcome to my portfolio!</h2>
        <h1 className='name' data-aos-offset="120" data-aos-mirror="true" data-aos='fade-right'>Salil Narvekar</h1>

        <h2 className='designation' data-aos-offset="120" data-aos-mirror="true" data-aos='zoom-out-right'>
          <TypewriterComponent
            options={{
              strings: [
                'Data Analyst & Scientist.',
                'Python Developer with AI ML Experties.',
                'Freelance Frontend Web Developer.',
                'Freelance Full Stack Web Developer.'
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              delay: 30,
              shuffle: true,
              pauseFor: 1000,
              fadeOut: true,
              deleteSpeed: 20,
              wrapperClassName: 'typewriter-text',
            }}
          />
        </h2>

        <div className='grid justify-items-center md:justify-items-start lg:justify-items-start mt-2' data-aos-mirror="true" data-aos='flip-up'>
          <ResumeButton />
        </div>
      </div>

      <div className='tags'>
        <h1 className='tagline' data-aos-offset="90" data-aos-mirror="true" data-aos='zoom-out'>
          <FontAwesomeIcon icon={faQuoteLeft} className="text-violet-950 mb-2" />
          Transforming Ideas into Intelligent Digital Solutions <br /> Crafting Web, Data with AI Experties.
          <FontAwesomeIcon icon={faQuoteRight} className="text-violet-950 mb-2" />
        </h1>
        <hr className='horizontal-line-home border-violet-950' data-aos-offset="90" data-aos-mirror="true" data-aos='zoom-out' />

        <h3 className="subTagline" data-aos-offset="90" data-aos-mirror="true" data-aos='zoom-out'> I am a <b className='text-violet-950'>Data Analyst & Freelance Full stack developer</b> with a strong foundation in <b className='text-violet-950'>Python & React.js, </b> along with an experience in all the technical skills mentioned. </h3>
      </div>

      <SkillsPlate />
    </div>
  )
}

export default Home