import { useEffect, useRef } from 'react'
import PhoneIcon from '@material-ui/icons/Phone'
import { about } from '../../portfolio'
import gsap from 'gsap'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const aboutRef = useRef(null)
  const greetingRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Typing animation for the full greeting
      const text = `Hello, my name is ${name}.`
      const chars = text.split('')
      let currentText = ''

      chars.forEach((char, i) => {
        gsap.delayedCall(i * 0.1, () => {
          currentText += char
          greetingRef.current.textContent = currentText
        })
      })

      // Stagger the role and description
      gsap.from('.about__role, .about__desc', {
        scale: 0,
        rotation: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)',
        delay: chars.length * 0.1 + 0.5 // Start after typing animation
      })

      // Animate the contact section
      gsap.from('.about__contact', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'bounce.out',
        delay: chars.length * 0.1 + 0.8 // Start after typing animation
      })
    }, aboutRef)

    return () => ctx.revert()
  }, [name])

  return (
    <div className='about center' ref={aboutRef}>
      <h1 className='text-center'>
        <span className='about__name'>
          <span ref={greetingRef}></span>
          <span ref={cursorRef} className='cursor'>|</span>
        </span>
      </h1>

      {role && <h2 className='about__role center text-center'>I am a {role}.</h2>}
      <p className='about__desc text-center'>{description && description}</p>
      
    </div>
  )
}

export default About
