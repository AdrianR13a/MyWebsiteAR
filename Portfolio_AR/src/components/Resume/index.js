import Loader from 'react-loaders'
import resumeFile1 from '../../assets/images/Part1WebResume.png';
import resumeFile2 from '../../assets/images/Part2WebResume.png';
import './index.scss'

// <a href={resumeFile}>Link to My File</a>

const Resume = () => {
    return (
        <>
            <div className='container resume-page'>
                <div className='text-zone'>
                    <h1>
                        My Resume
                    </h1>
                    <p>
                        This resume includes education, citizenship, 
                        projects, and experiences. 
                        <a href="https://docs.google.com/document/d/1-1Yo_ujD38gNEbNl5YvmbKMoQMJCsB8GdyEjESnrfSI/edit?usp=sharing"> 
                         Current Resume</a>
                    </p>
                   <ul className='imgs'>
                    <li>
                        <img src={resumeFile1} alt="resume1" className='pt1'/>
                    </li>
                    <li>
                        <img src={resumeFile2} alt="resume2" className='pt2'/>
                    </li>
                   </ul>
                    
                    
                </div>
            </div>

            <Loader type="pacman" />
        </>
        
    )
}

export default Resume