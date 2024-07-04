import React from 'react';
import './css/FAQ.css';

function FAQ() {
  return (
    <div className="faq_area section_padding" id="faq">
      <div className="container">
        <div className="row ">
          <div className="col-12 ">
            <div
              className="section_heading  wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: 'visible',
                animationDelayL: '0.2s',
                animationName: 'fadeInUp',
              }}
            >
              <h3 className="FAQ-head">
                <span style={{ color: 'black' }}>Frequently </span> Asked
                Questions
              </h3>
              <div className="underlinediv"></div>
              <p className="FAQ-P">
                Appland is completely creative, lightweight, clean &amp; super
                responsive app landing page.
              </p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12  col-lg-6">
            <div className="accordion faq-accordian" id="faqAccordion">
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.2s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="headingOne">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    In which languages you will create website?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      It totally depends on the requirements, project size, and
                      you. You can discuss your project with me and I will give
                      you FREE advice on which option is best for you. And if
                      you already have a website and need it modified, I'll
                      modify it.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.3s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="headingTwo">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    What things do you need from me?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      If you want to build your new website, I need your project
                      details. And if you already have a website and want to
                      update or fix it. Then I will need your cpanel access or
                      FTP details.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.4s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="headingThree">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    How I can contact you?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      You can fill out the contact form below or just email me
                      at
                      <p style={{ color: 'var(--text)' }}>
                        <a href="mailto:aftabfarooq8@gmail.com">
                          {' '}
                          <b>aftabfarooq8@gmail.com</b>
                        </a>{' '}
                        to discuss your project.{' '}
                      </p>{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.2s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="headingfour">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapsefour"
                    aria-expanded="true"
                    aria-controls="collapseour"
                  >
                    Will you give me the website code or not?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapsefour"
                  aria-labelledby="headingfour"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      Absolutely, yes. If I build a website for you, that means
                      you own the website, including the code.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.3s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="headingfive">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapsefive"
                    aria-expanded="true"
                    aria-controls="collapsefive"
                  >
                    How many revisions will you give after completing the
                    project?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapsefive"
                  aria-labelledby="headingfive"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      It depends on the budget or size of your project. We will
                      discuss this later after we finalize your project.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.4s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="headingsix">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapsesix"
                    aria-expanded="true"
                    aria-controls="collapsesix"
                  >
                    How does the payment process work?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapsesix"
                  aria-labelledby="headingsix"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      I have made the payment process easy and affordable. For
                      each website project, payment is split into 3 parts:{' '}
                      <br /> a) 30% deposit to book your slot in my production
                      calendar,
                      <br /> b) 35% mid-project, <br /> c) and 35% at the end of
                      the project.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.4s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="headingEight">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="true"
                    aria-controls="collapseEight"
                  >
                    What if I need an update after completing my revision?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseEight"
                  aria-labelledby="headingEight"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      Then, I will charge you according to your project
                      requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.3s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="headingSeven">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="true"
                    aria-controls="collapseSeven"
                  >
                    How soon can we get started?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseSeven"
                  aria-labelledby="headingSeven"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      After receiving the requirements and 30% advance payment
                      from you, I will start working on your project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: 'visible',
                animationDelayL: '0.5s',
                animationName: 'fadeInUp',
              }}
            >
              <i className="lni-emoji-sad"></i>
            </div>
          </div>
          <div className="col-12  col-lg-6">
            <div className="accordion faq-accordian" id="faqAccordion">
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.2s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="heading1">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    What if I am not satisfied with your services?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapse1"
                  aria-labelledby="heading1"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      First, I will do my best to never let you down. But if you
                      are not satisfied or somehow this project is not delivered
                      to you successfully by me. Then I will give you a{' '}
                      <b> 100% refund.</b> Because I believe that your
                      satisfaction is my real income..
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.3s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="heading2">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    How much do you charge?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapse2"
                  aria-labelledby="heading2"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      It depends on your requirement and the complexity of the
                      project. First, you will send the project details, and
                      after analyzing your requirements, I can give you the cost
                      of the project.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.4s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="heading3">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapse3"
                    aria-expanded="true"
                    aria-controls="collapse3"
                  >
                    What is your hourly rate?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapse3"
                  aria-labelledby="heading3"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      My hourly rate is <b> USD $10. </b>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.4s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="heading4">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapse4"
                    aria-expanded="true"
                    aria-controls="collapse4"
                  >
                    Who will be the owner of the website?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapse4"
                  aria-labelledby="heading4"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      You will own the website. I will create just one website
                      for you.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.4s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="heading5">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapse5"
                    aria-expanded="true"
                    aria-controls="collapse5"
                  >
                    What costs should I expect other than website development
                    services?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapse5"
                  aria-labelledby="heading5"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      If your website is new then you need to buy domain and
                      hosting for your website.
                      <br /> <br />
                      <b> Hosting: </b> This is where you create website files
                      that are stored 24/7 on a server connected to the
                      Internet.
                      <br />
                      <b> Domain: </b> This would be your business name like
                      business.com etc.
                      <br /> <br />
                      <p className="base-color">
                        <a
                          target="_blank"
                          href="https://hostinger.com?REFERRALCODE=1NOUMAN98"
                        >
                          {' '}
                          <b>HOSTINGER </b>
                        </a>
                      </p>{' '}
                      is the best hosting provider service. I suggest you buy
                      both domain and hosting from him. To know more about
                      domain and hosting you can google it or ask me and I will
                      tell you.
                      <br /> <br />
                      And if you already have a website, there is no additional
                      cost other than my services.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.4s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="heading6">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapse6"
                    aria-expanded="true"
                    aria-controls="collapse6"
                  >
                    Can I trust you after sending the payment?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapse6"
                  aria-labelledby="heading6"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      Of course, you can trust me. Even many businesses trust
                      me. My website and social profiles are in front of you.
                      I'm not going anywhere. You must trust me to work with me.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.4s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="heading7">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapse7"
                    aria-expanded="true"
                    aria-controls="collapse7"
                  >
                    Do you offer ongoing support after the project is over?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapse7"
                  aria-labelledby="heading7"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      Yes, I provide continuous support. You can hire me to
                      maintain and support your website. We will discuss how I
                      can continue to support your business so that you can grow
                      your business.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDelayL: '0.4s',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="card-header" id="heading8">
                  <h6
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapse8"
                    aria-expanded="true"
                    aria-controls="collapse8"
                  >
                    If I have other questions for you?
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapse8"
                  aria-labelledby="heading8"
                  data-parent="#faqAccordion"
                >
                  <div className="card-body">
                    <p>
                      You can contact me on my social profiles or email me at{' '}
                      <p className="base-color">
                        <a href="mailto:aftabfarooq8@gmail.com">
                          {' '}
                          <b>aftabfarooq8@gmail.com </b>
                        </a>
                      </p>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: 'visible',
                animationDelayL: '0.5s',
                animationName: 'fadeInUp',
              }}
            >
              <i className="lni-emoji-sad"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
