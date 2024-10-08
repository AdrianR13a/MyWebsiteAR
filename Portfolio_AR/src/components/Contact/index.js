import Loader from 'react-loaders'
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef()
    
    const sendEmail =(e) => {
        e.preventDefault()

        emailjs 
            .sendForm(
                'service_j60zg3g',
                'template_emyy2g6',
                refForm.current,
                'yC4C5FzmdN4mymaXX'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, Please try again.')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                        I am a student seeking oppurtunites to expand my software
                        knowledge. Please contact me using the form below if I 
                        fit your criteria, or if you simply wish to contact me.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className='info-map'>
                    Adrian Rojas,
                    <br />
                    United States, California
                    <br />
                    Chula Vista, Escaya Community
                    <br />
                    <span>Adrianrjs02@yahoo.com</span>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact