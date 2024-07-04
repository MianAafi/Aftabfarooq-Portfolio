import React from 'react';
import './css/Portfolio.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const portfolioData = [
  {
    title: 'Halcyon Group',
    description: 'Leading Cleaning Specialists.',
    fullDescription: `Welcome to Halcyon Group, where excellence in cleaning services meets cutting-edge web development. Built with WordPress, Elementor, and carefully selected plugins and themes, this site exemplifies high-quality, responsive design tailored to meet client specifications. Explore our extensive range of cleaning solutions, including specialized kitchen cleaning, water tank maintenance, fire & smoke damage restoration, ventilation system cleaning, meticulous floor refinishing, and advanced oil filtration services. Each page reflects our commitment to delivering a seamless user experience and showcasing Halcyon Group's dedication to cleanliness and customer satisfaction.`,
    technologies: ['HTML', 'CSS', 'WordPress', 'JavaScript', 'Elementor ', 'WordPress Plugin'],
    link: 'https://halcyon.techspexs.com/',
    image: './image/halcon.png'
  },
  {
    title: 'PawPrints Cremation',
    description: 'Pet Cremation Services.',
    fullDescription: `Welcome to Paw Prints Pet Cremation, where we provide compassionate and dignified pet cremation services for your cherished companions. Our website embodies a professional and caring approach, meticulously crafted using WordPress Elementor, bespoke themes, and essential WordPress plugins. Designed with a focus on high quality and responsive functionality, every detail has been tailored to meet the unique needs of pet owners seeking respectful end-of-life services for their beloved pets. Explore our site to discover how Paw Prints Pet Cremation ensures a seamless user experience while honoring the memories of your furry family members.`,
    technologies: ['HTML', 'CSS', 'WordPress', 'JavaScript', 'Elementor ', 'WordPress Plugin'],
    link: 'https://www.pawprintscremation.ie/',
    image: './image/pawprint.png'
  },
  {
    title: 'Targon Capital',
    description: 'Financial consulting services.',
    fullDescription: `Welcome to Targon Capital, an esteemed Investment Management and Advisory Firm. I am proud to have exclusively developed the frontend of Targon Capital's website using WordPress Elementor, custom themes, and essential WordPress plugins. Every detail of the design reflects the firm's professional and sophisticated nature, ensuring a high-quality, responsive interface that meets the exacting standards of our client. Meticulous changes and enhancements have been implemented to ensure a flawless user experience, embodying Targon Capital's commitment to excellence in investment management and advisory services.`,
    technologies: ['HTML', 'CSS', 'WordPress', 'JavaScript', 'Elementor ', 'WordPress Plugin'],
    link: 'https://wordpress-1268901-4576930.cloudwaysapps.com/',
    image: './image/targon.png'
  },
  {
    title: 'On Ice',
    description: 'Ice Skating Platform.',
    fullDescription: `I developed this website using WordPress, Elementor, and various plugins to create a high-quality and responsive design tailored to meet the client's requirements. This platform serves as a comprehensive hub for ice skating enthusiasts, offering services across multiple locations. Whether you're a beginner or seasoned skater, our site ensures easy access to information and booking options, enhancing the ice skating experience for everyone.`,
    technologies: ['HTML', 'CSS', 'WordPress', 'JavaScript', 'Elementor ', 'WordPress Plugin'],
    link: 'https://www.onice.ie/',
    image: './image/onice.png'
  },
  {
    title: 'FooDaZine',
    description: 'The ultimate restaurants menu maker.',
    fullDescription: `I exclusively developed the frontend and backend of this website using React.js and Node.js. Meticulous changes and enhancements have been implemented to ensure a flawless user experience.
    Committed to excellence, I deliver high-quality work for new and existing projects, tailored to meet your requirements. Let's discuss your project today!`,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Node', 'MongoDB'],
    link: 'https://foodazine.xlogicsolutions.com/',
    image: './image/food.png'
  },
  {
    title: 'EasyConvertKit',
    description: 'Your All-in-One Media Format Converter.',
    fullDescription: `Discover seamless digital content transformation with our versatile suite of conversion tools. Built with a frontend in ReactJS and backend in Laravel, I have meticulously crafted this platform to convert images to PNG, JPG, and WebP formats, and office documents like PDFs, Word, Excel, and PowerPoint into images effortlessly. Supporting multiple audio and video format conversions, our intuitive tools ensure streamlined processes and enhanced user interaction. Explore our high-quality, responsive design that meets the exact requirements of our clients. Optimize your digital content effortlessly today.`,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', ' React ', ' Laravel ', 'MySQL'],
    link: 'https://easyconvertkit.com/',
    image: './image/easy.png'
  }
];

const showPopup = (item) => {
  Swal.fire({
    html: `
      <style>
        .navbar-swal {
          border-bottom: 1px solid var(--text);
          padding: 10px 0;
        }
        .technologybtn {
          color: var(--white);
          padding: 0px 5px;
          background: var(--bg);
          font-size: 16px;
          border-radius:2px;
        }
        .Techbtn {
          margin: 0;
        }
        .projectDescription {
          font-size: 16px;
        }
      </style>
      <div>
        <div class="navbar-swal">
          <h5>Single Portfolio</h5>
        </div>
        <div class="row p-0 m-0">
          <div class="col-12 col-md-10 offset-md-1 p-0">
            <div class="text-center">
               <h2 class="mb-3">
                <span style="color: var(--text)">${item.title}</span>
               </h2>
              <p class="custom-text-light">
             ${item.title} :   ${item.description}
              </p>
            </div>
            <div class="text-md-start mt-5 mb-4">
              <h5 class="mb-3" style="color: var(--text)">Description</h5>
              <p class="my-3 mt-0 projectDescription">
                ${item.fullDescription}
              </p>
            </div>
            <div class="mt-2 mb-2 Techbtn">
              <h5 class="mb-3">Technology</h5>
              ${item.technologies.map(tech => `<span class="technologybtn">${tech}</span>`).join('')}
            </div>
            <div class="mt-4">
              <a target="_blank" href="${item.link}">
                <b><i class="fa fa-globe"></i> ${item.title}</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    `,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    customClass: {
      closeButton: 'custom-close-button',
      popup: 'custom-popup',
    },
  });
};

function Portfolio({ name }) {
  return (
    <div>
      <section data-scroll-index="0" className="portfolioSection" name={name}>
        <div className="container">
          <div className="row section-heading-02">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="portfolio-heading">
                  <span>
                    My <span style={{ color: 'var(--text)' }}>PORTFOLIO</span>
                  </span>
                </h3>
                <div className="underlinediv"></div>
                <p className="portfolio-p">
                  SOME OF THE PROJECTS I HAVE WORKED ON
                </p>
              </div>
            </div>
          </div>
          <div className="row portfolio-content lightbox-gallery">
            {portfolioData.map((item, index) => (
              <div key={index} className='col-11 col-md-6 col-lg-4 mt-4' style={{cursor:"pointer"}}>
                <div className="portfolio-card" onClick={() => showPopup(item)}>
                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                  </div>
                  <div className="portfolio-image">
                    <img className="portImage" src={item.image} alt={item.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Portfolio;
