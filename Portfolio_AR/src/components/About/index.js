import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {
    return (
    <>
    
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About Me
                </h1>
                <p>
                    I'm an up and coming developer that wants to work in any 
                    realm of software engineering, whether it be cars, A.I, 
                    websites, etc. Software is the future of society, and a 
                    field I want my future to be a part of.
                </p>
                <p>
                    Regarding my tech skills, I will be the first to admit 
                    that I am still green. However, in an ever evolving and 
                    growing field I will adapt and build myself up using the 
                    sources that are available to me and by creating projects 
                    such as these.
                </p>
                <p>
                    Defining myself in one sentence, I would say I'm observant 
                    and kind. Being honest to myself is what i try and strive for 
                    everyday to try and better myself everyday. Sports are a big 
                    part of my life often playing volleyball and just going outside 
                    with friends.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EC4D28" />
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
                    </div>

                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default About