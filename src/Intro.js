import React, { useEffect, useState } from 'react';
import './css/intro.css';
import { Link } from 'react-router-dom';

function Intro({ name }) {
  let myName = 'Aftab Farooq';
  let myImage = './image/aftab.png';
  let introPara =
    'From designing and developing user interfaces to server-side infrastructure and database management, I am well-versed in every aspect of web development.';

  // const messages = [
  //   'MERN Stack Developer',
  //   'Web Designer',
  //   'Software Engineer',
  // ];
  // const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  // const [displayedMessage, setDisplayedMessage] = useState('');
  // const [isTyping, setIsTyping] = useState(true);

  // useEffect(() => {
  //   let timer;

  //   const typeNextCharacter = () => {
  //     const message = messages[currentMessageIndex];
  //     const currentLength = displayedMessage.length;

  //     if (currentLength < message.length) {
  //       setDisplayedMessage(message.substring(0, currentLength + 1));
  //       timer = setTimeout(typeNextCharacter, 10); // Adjust typing speed here (milliseconds)
  //     } else {
  //       setIsTyping(false);
  //       timer = setTimeout(eraseMessage, 5000); // Adjust delay before erasing here (milliseconds)
  //     }
  //   };

  //   const eraseMessage = () => {
  //     const currentLength = displayedMessage.length;

  //     if (currentLength > 0) {
  //       setDisplayedMessage(displayedMessage.substring(0, currentLength - 1));
  //       timer = setTimeout(eraseMessage, 10); // Adjust erasing speed here (milliseconds)
  //     } else {
  //       setIsTyping(true);
  //       setCurrentMessageIndex(
  //         (prevIndex) => (prevIndex + 1) % messages.length
  //       );
  //       timer = setTimeout(typeNextCharacter, 500); // Adjust delay before typing the next message here (milliseconds)
  //     }
  //   };

  //   if (isTyping) {
  //     timer = setTimeout(typeNextCharacter, 250); // Adjust delay before starting typing here (milliseconds)
  //   } else {
  //     timer = setTimeout(eraseMessage, 50); // Adjust delay before erasing here (milliseconds)
  //   }

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [currentMessageIndex, displayedMessage, messages, isTyping]);

  return (
    <div>
      <section data-scroll-index="0" className="intro-section " name={name}>
        <div className="container p-0">
          <div className="row Intro-Row m-0 ">
            <div className="col-lg-6 col-md-4 col-12 d-flex justify-content-center">
              <div className="home-image">
                <img
                  className="image-home-my"
                  src={myImage}
                  alt="web developer"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-12">
              <div className="home-intro">
                <h2 className="MyNameColor">I'm {myName}</h2>
                <h4 className="text-capitalize">
                  <span className="Developer">
                     <span className="devep"> ReactJS & WordPress Web Developer </span>
                    {/* {displayedMessage} */}
                  </span>
                  <span
                    className="element text-theme"
                    data-elements="Full Stack Web Developer.,Software Engineer.,Web Designer.,Web Developer."
                  ></span>
                </h4>
                <p className="intro-Prargraph">{introPara}</p>
                <ul className="list-inline social-icon mt-2">
                  <li className="list-inline-item">
                    <Link
                      target="_blank"
                      to="https://www.facebook.com/Mian.Aafi786"
                    >
                      <i
                        className="fa-brands  fa-facebook-f fa-xl "
                        style={{ color: 'var(--text)' }}
                      ></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      target="_blank"
                      to="https://www.instagram.com/mian_aafi/"
                    >
                      <i
                        className="fa-brands  fa-instagram fa-xl "
                        style={{ color: 'var(--text)' }}
                      ></i>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link
                      target="_blank"
                      to="https://www.linkedin.com/in/aftab-farooq-361843121/"
                    >
                      <i
                        className="fa-brands  fa-linkedin fa-xl "
                        style={{ color: 'var(--text)' }}
                      ></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link target="_blank" to="https://twitter.com/aftabfarooq8">
                      <i
                        className="fa-brands  fa-x-twitter fa-xl "
                        style={{ color: 'var(--text)' }}
                      ></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link target="_blank" to="https://wa.me/923030060900">
                      <i
                        className="fa-brands  fa-whatsapp fa-xl "
                        style={{ color: 'var(--text)' }}
                      ></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link target="_blank" to="https://github.com/MianAafi">
                      <i
                        className="fa-brands  fa-github fa-xl "
                        style={{ color: 'var(--text)' }}
                      ></i>
                    </Link>
                  </li>
                </ul>
                <div className="btn-bar pt-3">
                  <Link
                    download
                    target="_blank"
                    className="px-btn px-btn-primary CV-btn"
                    to="./image/AFTAB-FAROOQ.pdf"
                  >
                    Download Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
