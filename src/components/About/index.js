import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
            idx={15}
            />
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci justo, lobortis ut diam vel, fermentum interdum sapien. Duis sed tempor lacus, nec sollicitudin erat. Duis eu imperdiet ex, in commodo dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean suscipit odio in sodales consectetur. Nullam pretium, dolor a ultrices ullamcorper, ante sem dictum arcu, sit amet venenatis enim lectus eu orci. Vivamus egestas erat eu lorem suscipit bibendum in a lacus. Nunc pharetra, lacus ut malesuada tempus, eros lorem tempus metus, eget consectetur ante quam et eros. Donec dignissim justo vel neque maximus, sollicitudin sollicitudin lacus maximus. Nunc nec commodo massa, id ornare leo. Suspendisse ultricies, enim ut ornare commodo, eros urna faucibus leo, at egestas ante mauris id lectus. Donec in condimentum ex.</p>
        <p>Proin ac eros ipsum. Proin quam arcu, viverra vel eros sed, finibus cursus libero. Integer eget imperdiet libero. Nullam malesuada pellentesque tellus, id pulvinar eros hendrerit quis. Vestibulum eu dignissim sem. Donec risus nunc, luctus sit amet cursus eget, tristique non lorem. Duis nec ornare neque. Curabitur sollicitudin, felis quis interdum rhoncus, ex nunc sodales elit, ut eleifend est risus ac urna. Duis non finibus ipsum.</p>
        <p>Fusce ac neque sapien. Maecenas velit justo, consequat sed egestas vel, elementum sit amet odio. Quisque placerat imperdiet ex, eget ullamcorper nisi porttitor ut. Etiam non ullamcorper justo. Phasellus cursus lectus ut nibh elementum, vestibulum ornare erat facilisis. Donec tortor nunc, varius nec pellentesque vulputate, bibendum sit amet nisl. Donec commodo nulla et libero luctus, vel bibendum erat hendrerit. Vestibulum in tortor sem. Fusce tempus viverra dolor, nec consectetur lorem varius ut. Pellentesque fermentum nunc quis velit laoreet sodales. Nullam mattis nunc augue, faucibus hendrerit massa maximus vel.</p>
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
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
};

export default About;
