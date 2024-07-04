
import SubmitForm from './SubmitForm';
import './css/Contact.css';

import './css/Portfolio.css';

function Contact({ name }) {
 
 
  return (
    <div>
      <section data-scroll-index="0" className="contactSection " name={name}>
        <section
          data-scroll-index="4"
          className="section contactus-section border-top-g"
        >
          <div className="container">
            <div className="row section-heading-02">
              <div className="col-md-12">
                <div className="section-title">
                  <h3 className="contact-head">
                    <span>
                      Get <span style={{ color: 'var(--text)' }}>In Touch</span>
                    </span>
                    <div className="underlinediv"></div>
                  </h3>
                  <p className="feelfreecontact-P">
                    FEEL FREE TO CONTACT ME ANYTIME
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="ContactInfo col-md-12 col-lg-5 col-xl-4  ">
                <div className="contact-form">
                  <h5 className="worktogather">Let's work together!</h5>
                  <p className="workTogather-p">
                    Choosing the right developer is critical to the success of
                    your project. I am dedicated to delivering quality results,
                    on time, and within budget. When you work with me, you can
                    be sure your project is in good hands.
                  </p>
                  <div className="mt-4">
                    <h6 className="m-0 mb-2 custom-text-white">
                      Address:{' '}
                      <span className="faisalabad custom-text-light">
                        Faisalabad, Pakistan
                      </span>
                    </h6>
                    <h6 className="m-0 mb-2 custom-text-white">
                      Phone:{' '}
                      <a className="custom-text-light" href="tel:+923030060900">
                        <span className="">+92-303-0060900</span>
                      </a>
                    </h6>
                    <h6 className="m-0 mb-2 custom-text-white">
                      Web:{' '}
                      <a
                        className="custom-text-light"
                        href="https://aftabfarooq.site"
                      >
                        <span className="">www.aftabfarooq.site</span>
                      </a>
                    </h6>
                    <h6 className="m-0 mb-0 custom-text-white">
                      Mail:{' '}
                      <a
                        className="custom-text-light"
                        href="mailto:aftabfarooq8@gmail.com"
                      >
                        aftabfarooq8@gmail.com
                      </a>
                    </h6>
                    <ul className="list-inline social-icon mt-1 mb-0">
                      <li className="list-inline-item">
                        <h6 className="mt-4 mb-0 custom-text-white">
                          {/* FOLLOW ME */}
                        </h6>
                      </li>
                      <li className="list-inline-item">
                        <a
                          target="_blank"
                          href="https://www.facebook.com/Mian.Aafi786"
                        >
                          <i className="fa-brands custom-text-light fa-facebook-f fa-lg"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          target="_blank"
                          href="https://www.instagram.com/mian_aafi/"
                        >
                          <i className="fa-brands custom-text-light fa-instagram fa-lg"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/aftab-farooq-361843121/"
                        >
                          <i className="fa-brands custom-text-light fa-linkedin fa-lg"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          target="_blank"
                          href="https://twitter.com/aftabfarooq8"
                        >
                          <i className="fa-brands custom-text-light fa-x-twitter fa-lg"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a target="_blank" href="https://wa.me/923030060900">
                          <i className="fa-brands custom-text-light fa-whatsapp fa-lg"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a target="_blank" href="https://github.com/MianAafi">
                          <i className="fa-brands custom-text-light fa-github fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="SubmitYourDetails col-md-12 col-lg-7 col-xl-8  ">
              <SubmitForm/>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Contact;
