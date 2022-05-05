import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { useState, useEffect, useRef } from 'react';
import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState()
  const refForm = useRef()

  const title = "Contact me"
  const titleArray = Array.from({length: title.length}, (_, i) => title[i])

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('contact_service', 'contact_form', refForm.current, 'AN9zL9ZyAfid1mynF')
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    )
  }
    
  return (
  <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
            <AnimatedLetters
                letterClass={letterClass}
                strArray={titleArray}
                idx={15}
            />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='contact-form'>
        <form ref={refForm} onSubmit={sendEmail}>
          <ul>
            <li className='half'>
              <input type='text' name='name' placeholder='Name' required />
            </li>
            <li className='half'>
              <input type='email' name='email' placeholder='Email' required />
            </li>
            <li>
              <input placeholder='Subject' type='text' name='subject' required />
            </li>
            <li>
              <textarea placeholder='Message' name='message' required></textarea>
            </li>
            <li>
              <input type='submit' className='flat-button' value='SEND' />
            </li>
          </ul>
        </form>
        </div>
      </div>
      <div className='info-map'>
        Zach Egner<br />
        2010 William J Day Blvd,<br />
        Boston, MA 02127<br />
        United States,<br />
        <span>egner.zach@gmail.com</span>
      </div>
      <div className='map-wrap'>
        <MapContainer center={[42.3378699, -71.014647]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[42.3378699, -71.014647]}>
            <Popup>My favorite place to go in Boston</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
    <Loader type='pacman' />
  </>);
};

export default Contact;
