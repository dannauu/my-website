import { useContext, useEffect } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import emailjs from '@emailjs/browser'
import './App.css'


// Initialize EmailJS with your credentials
emailjs.init("_Ganmn5SWbfH0Yjj8"); // You'll need to replace this with your actual EmailJS public key

const sendEmailNotification = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const templateParams = {
    to_email: 'scatterman16@gmail.com',
    from_name: 'QR Code Scanned',
    message: `Your QR code was scanned on ${formattedDate}!`,
  };

  emailjs.send('service_c53hktm', 'template_mmobb2o', templateParams)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
};

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  useEffect(() => {
    sendEmailNotification();
  }, []);

  useEffect(() => {
    window.location.href = 'https://www.danielnau.com';
  }, []);


  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
