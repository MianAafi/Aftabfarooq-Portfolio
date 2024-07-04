import React from 'react';
import './css/Services.css';

function Services({ name }) {
  return (
    <div data-scroll-index="0" className="servicesSection " name={name}>
      <section>
        <div class="container">
          <div class="row section-heading-02">
            <div class="col-md-12">
              <div class="section-title">
                <h3 className="MyServices">
                  <span>
                    My <span style={{ color: 'var(--text)' }}>Services</span>
                  </span>
                </h3>
                <div className="underlinediv"></div>
                <p className="ServicesOffer">SERVICES I OFFER TO MY CLIENTS</p>
              </div>
            </div>
          </div>
          <div class="row gy-4">
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div class="feature-box-01 media">
                <div class="icon">
                  <i class="fa-solid fa-paintbrush size-md"></i>
                </div>
                <div class="feature-content col">
                  <h5>Front End Development</h5>
                  <p>
                    Using my front-end development skills, I create visually
                    appealing and interactive designs that work seamlessly
                    across all devices.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div class="feature-box-01 media">
                <div class="icon">
                  <i class="fa-solid fa-laptop-code size-md"></i>
                </div>
                <div class="feature-content col">
                  <h5>Back End Development</h5>
                  <p>
                    I'll make your website dynamic with back-end development and
                    add an easy-to-use & user-friendly admin panel for future
                    edits and changes.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div class="feature-box-01 media">
                <div class="icon">
                  <i class="fa-solid fa-code size-md"></i>
                </div>
                <div class="feature-content col">
                  <h5>Custom Development</h5>
                  <p>
                    I'll turn your ideas into code & create custom solutions to
                    meet your unique needs. If you have an idea, let's turn your
                    vision into reality.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div class="feature-box-01 media">
                <div class="icon">
                  <i class="fa-sharp fa-solid fa-link size-md"></i>
                </div>
                <div class="feature-content col">
                  <h5>API Development</h5>
                  <p>
                    I create custom APIs to streamline your data transfer needs
                    and enhance the functionality of your website. Let's
                    revolutionize!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div class="feature-box-01 media">
                <div class="icon">
                  <i class="fa-solid fa-bug size-md"></i>
                </div>
                <div class="feature-content col">
                  <h5>Bug Fixes</h5>
                  <p>
                    If you encounter any kind of error with your website, I am
                    here to help. Please describe your bug, and I will fix it
                    for you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div class="feature-box-01 media">
                <div class="icon">
                  <i class="fa-solid fa-wand-magic-sparkles size-md"></i>
                </div>
                <div class="feature-content col">
                  <h5>Customization</h5>
                  <p>
                    For all your website customization needs, including
                    front-end and back-end modifications, additions, or
                    removals. Leave it to me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
