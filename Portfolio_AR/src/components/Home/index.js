import { Link } from 'react-router-dom';
//import LogoTitle from '../../assets/images/LetterA2.png';
import './index.scss';
import Loader from 'react-loaders';
//import AnimatedLetters from '../AnimatedLetters';
//import { useEffect, useState } from 'react';

const Home = () => {

//the comments of this portion is because there was an error trying to 
//use the animate errors something about destroy function

    /*
  const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l','o','b','o','d','a','n']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    
    useEffect(() =>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
    */
  
                /*<img src={LogoTitle} alt="developer" /> this goes on line 46 if you want the rotating animation*/

    return (
    <>
        <div className='container home-page'>
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                
                Adrian
                <br />
                Web Developer
                </h1>
                <h2> Frontend Devloper / Java expert / Student / Tutor</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
        <Loader type="pacman" />
    </>
    )
}

export default Home