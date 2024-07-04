import React from 'react';

function IntroPage() {
  return (
    <div>
      <section data-scroll-index="0" class="home-section-02">
        <div class="container">
          <div class="row min-vh-100 align-items-center">
            <div class="col-left">
              <div class="home-image">
                <div class="home-image-in">
                  <img src="assets/img/webdeveloper.webp" alt="web developer" />
                </div>
              </div>
            </div>
            <div class="col-right">
              <div class="home-intro">
                <h2>I'm Nouman Ali</h2>
                <h4 class="text-capitalize">
                  <span>A </span>
                  <span
                    class="element text-theme"
                    data-elements="Full Stack Web Developer.,Software Engineer.,Web Designer.,Web Developer."
                  ></span>
                </h4>
                <p>
                  From designing and developing user interfaces to server-side
                  infrastructure and database management, I am well-versed in
                  every aspect of web development.
                </p>
                <ul class="list-inline social-icon mt-2">
                  <li class="list-inline-item">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/noumanali337"
                    >
                      <i class="fa-brands custom-text-light fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/noumanali3355/"
                    >
                      <i class="fa-brands custom-text-light fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/noumanali3355/"
                    >
                      <i class="fa-brands custom-text-light fa-linkedin"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a target="_blank" href="https://twitter.com/noumanali3355">
                      <i class="fa-brands custom-text-light fa-x-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      target="_blank"
                      href="https://www.pinterest.com/noumanali3355/"
                    >
                      <i class="fa-brands custom-text-light fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
                <div class="btn-bar pt-0">
                  <a
                    download
                    target="_blank"
                    class="px-btn px-btn-primary"
                    href="assets/files/AFTAB-FAROOQ.pdf"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroPage;
