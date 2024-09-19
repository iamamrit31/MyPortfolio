import React, { useState } from 'react';
import '../App.css';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

// Carousel component
const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='carousel-container flex flex-col items-center'>
      <img
        src={images[currentImageIndex]}
        alt={`carousel-${currentImageIndex}`}
        className='w-full h-[300px] object-cover rounded-lg mb-4'
      />
      <div className='flex justify-between w-full px-4'>
        <button
          onClick={handlePrev}
          className='text-white bg-gray-600 p-2 rounded hover:bg-gray-800'>
          Prev
        </button>
        <button
          onClick={handleNext}
          className='text-white bg-gray-600 p-2 rounded hover:bg-gray-800'>
          Next
        </button>
      </div>
    </div>
  );
};

// ServiceCard component remains the same
const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' style={{ background: '#151030' }}>
        <img src={service.icon} alt='some_icon' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
      </div>
    </div>
  </div>
);

// CertificationCard component for displaying certifications
const CertificationCard = ({ certification }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div className='rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col' style={{ background: '#151030' }}>
        <h3 className='text-white text-[14px] font-bold text-center'>{certification.title}</h3>
        <p className='text-gray-400 text-[15px] text-center'>{certification.issuer}</p>
        <a href={certification.link} target='_blank' rel='noopener noreferrer' className='text-green-300 hover:text-green-500 text-sm duration-300'>
          View Certificate
        </a>
      </div>
    </div>
  </div>
);

// VolunteeringCard component for displaying volunteering experiences
const VolunteeringCard = ({ experience }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div className='rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col' style={{ background: '#151030' }}>
        <h3 className='text-white text-[14px] font-bold text-center'>{experience.title}</h3>
        <p className='text-gray-400 text-[15px] text-center'>{experience.organization}</p>
        {experience.link && (
          <a href={experience.link} target='_blank' rel='noopener noreferrer' className='text-green-300 hover:text-green-500 text-sm duration-300'>
            View Certificate
          </a>
        )}
      </div>
    </div>
  </div>
);

// Certifications data
const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    link: 'https://coursera.org/share/c7aa76342b705e75d6608ca18d54e905'
    
  },
  {
    title: 'Power BI Certification',
    issuer: 'PwC',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_hjPbSy5wRzftG2cM3_1704724600631_completion_certificate.pdf'
  },
  {
    title: 'JPMC Software Engineering Virtual Internship',
    issuer: 'JPMC',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_hjPbSy5wRzftG2cM3_1672187622579_completion_certificate.pdf'
  }
  // {
  //   title: 'MSME - Start and Improve Business',
  //   issuer: 'Government of India',
  //   link: 'https://drive.google.com/file/d/1GrnrX41vBRelfOyetbvBSgEVcFKEtAY2/view?usp=sharing'
  // },
  // Add more certifications as needed
];

// Volunteering & Leadership Experiences data
const volunteeringExperiences = [
  // {
  //   title: 'Program Coordinator - Entrepreneurship Development Cell',
  //   organization: 'GNIT',
  //   link: 'https://example.com/edc-volunteering-certificate'
  // },
  {
    title: 'Event and Program Coordinator',
    organization: 'TED-X',
    link: 'https://drive.google.com/file/d/1GDatNdb-CPGIRbmp78cplPzz22Bawb1u/view?usp=sharing'
  },
  {
    title: 'Event and Program Coordinator',
    organization: 'Under-25',
    link: 'https://drive.google.com/file/d/1HE5gA6xRUSuCb4J7soBSILaHcmkuEm9U/view?usp=sharing'
  },
  {
    title: 'MSME - Start and Improve Business',
    issuer: 'Government of India',
    link: 'https://drive.google.com/file/d/1GrnrX41vBRelfOyetbvBSgEVcFKEtAY2/view?usp=sharing'
  }
  // Add more experiences as needed
];

// About component with all sections
const About = () => {
  const images = [
    'https://mcolaw.com/wp-content/uploads/2022/12/shutterstock_2041827245-The-George-Washington-University-scaled.jpg',
    'https://engineering.gwu.edu/sites/g/files/zaxdzs5436/files/2023-05/seh2015_up-2015-zwm-1096.jpg',
    'https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1661487008/bw0nsaohjguw2wryd7qc.jpg',
    'https://www.travelguide.net/media/washington-dc.jpeg',
  ];

  return (
    <div>
      <div className='bg-black text-white flex flex-col sm:flex-row items-center justify-center py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='sm:w-2/3 max-w-2xl px-4'>
          {/* Introduction Section */}
          <div className='max-w-none'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-xl leading-[30px]'>
              👨‍💻 Hey, I'm Amrit Singh Sardar, a 2024 graduate🎓 with a passion for building efficient web and app solutions and other software programs. I also develop insightful data models and create actionable analytics. As a skillful <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/amritsingh31/' target='_blank' rel='noopener noreferrer'>Software developer</a> I specialize in both Data Analytics and Software engineering🚀.
              <br />
              ✍️ Beyond coding, I love discussing about the startup bubble and enjoy gaming, which I share on my <a className='text-purple-300 hover:text-purple-400 duration-300' href="https://www.youtube.com/@paji31yt/streams" target='_blank' rel='noopener noreferrer'>YouTube</a> channel. I'm also into photography📸 and a published poet✍. It's not just a hobby; I see it as a way to capture moments🌟 and tell stories.
            </p>
            <ButtonLink url='https://drive.google.com/file/d/1jjVYweBRMhaHHzD9LFrwoC1GN2eRRxXJ/view?usp=sharing' text='View Resume →' padding={`p-3`} />
          </div>
        </div>

        {/* Right Side: Carousel */}
        <div className='sm:w-1/3 px-4 mt-10 sm:mt-0 flex flex-col justify-center'>
          <h2 className='text-2xl sm:text-3xl font-extrabold text-center mb-4'>
            Image Gallery
          </h2>
          <Carousel images={images} />
        </div>
      </div>

      {/* Licenses and Certifications Section */}
      <div className='bg-black text-white sm:px-16 px-2 pb-12 pt-0'>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-0'>Licenses & Certifications</h2>
        <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
          Here are some of the certifications that demonstrate my skills and expertise:
        </p>
        <div className='flex justify-center flex-wrap gap-7'>
          {certifications.map((certification) => (
            <CertificationCard certification={certification} key={certification.title} />
          ))}
        </div>
      </div>

      {/* Volunteering and Leadership Section */}
      <div className='bg-black text-white sm:px-16 px-2 pb-12'>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-0'>Volunteering & Leadership Experiences</h2>
        <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
          Here are some of my contributions and leadership experiences in various organizations:
        </p>
        <div className='flex justify-center flex-wrap gap-7'>
          {volunteeringExperiences.map((experience) => (
            <VolunteeringCard experience={experience} key={experience.title} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;