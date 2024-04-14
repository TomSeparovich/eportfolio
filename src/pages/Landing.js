import { Outlet, Link } from "react-router-dom";
import './Landing.css';

export default function Landing() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="Main">

        <div className="Header">
          <p className="Name">Thomas Separovich</p>
          <div className="Headings">
            <p className="Heading-Link" onClick={() => scrollToSection('AboutMe')}>         About me</p>
            <p className="Heading-Link" onClick={() => scrollToSection('Education')}>       Education</p>
            <p className="Heading-Link" onClick={() => scrollToSection('WorkExperience')}>  Work Experience</p>
            <p className="Heading-Link" onClick={() => scrollToSection('Contact')}>         Contact</p>
            <p>
            <Link to="/reflections" className="Heading-Link"> 
              Reflections
            </Link>
            </p>
          </div>
        </div>

        <div className="Body">
          <div className="AboutMe" id="AboutMe">
            <h2 className="Heading">About Me</h2>
            <div className="AboutContent">
              <img src={process.env.PUBLIC_URL + "/images/AboutMeImage.jpg"} alt="Thomas Separovich Faceshot" className="AboutImage" />
              <div className="Text">
                <p>
                  Im Thomas Separovich, a final year Software Engineering Student.
                </p>
                <p>
                  Over the past 4 years studying at the University of Technology Sydney, 
                  Ive developed a keen interest in new and emerging technologies such as 
                  generative artificial intelligence & cloud computing. These cutting edge 
                  technologies are revolutionising industries and the oportunity to develop
                  and have impact on the world drives me.
                </p>
                <p>
                  Throughout my career, I have had the opportunity to work with clients specialising
                  in the application of machine vision to revolutionise the grain processing industry.
                  Being able to integrate cutting edge technology with cloud computing was an incredible 
                  experience and allowed me to develop my technical, communication and management skills.
                </p>
                <p>
                Throughout my career, I wish to continue work that allows the application of technology 
                within industries in new and exciting ways.
                </p>
              </div>
            </div>
            <a href={"files/ThomasSeparovich_Resume.pdf"} download>
              <button type="button" className="button">Download Resume</button>
            </a>
          </div>

          <div className="Education" id="Education">
            <h2 className="Heading">Education</h2>
            <div className="SubHeading">
              <p>
                Bachelor of Software Engineering (Honours)
              </p>
              <p>
                Feb. 2021 – Nov. 2024 (Expected)
              </p>
            </div>
            <p>
              Studied at the University of Technology Sydney. 
              Maintained a distinction average (80%)
            </p>
          </div>

          <div className="WorkExperience" id="WorkExperience">
            <h2 className="Heading">Work Experience</h2>
            <div className="SubHeading">
              <p>
                Bunnings Replenishment Supervisor
              </p>
              <p>
                July 2017 - Present
              </p>
            </div>
            <ul>
              <li>Provided hands-on training to team members on the operation of machinery, emphasising safety procedures and best practices to ensure operational efficiency.</li>
              <li>Spearheaded safety initiatives within a team of 20 individuals, ensuring strict adherence to safety protocols and regulatory compliance standards.</li>
              <li>Fostered effective communication channels between overnight replenishment teams and daytime staff, facilitating smooth handovers and operational continuity.</li>
              <li>Oversaw administrative duties, including paperwork processing, and implemented new processes that enabled the team to achieve a scan rate greater than 99.7%, maintaining the number one position within the company for efficiency and accuracy.</li>
              <li>Oversaw roster management in a volatile workload environment, strategically allocating resources to meet fluctuating demands while adhering to budget constraints, ensuring optimal staffing levels and operational efficiency.</li>
            </ul>
            <div className="SubHeading">
              <p>
                Software Engineering Intern with Platypus Vision
              </p>
              <p>
                Nov. 2023 – Feb. 2024
              </p>
            </div>
            <ul>
              <li>Led a team of 5 interns through an agile development environment where I undertook the roles of delegating tasks, reviewing progress, and providing guidance and feedback.</li>
              <li>Acted as the primary point of contact between the team, our supervisors, and our client, effectively communicating project updates, complications and soliciting feedback.</li>
              <li>Developed C#/.NET programs for the efficient processing and storage of large datasets, demonstrating proficiency in backend development and database management.</li>
              <li>Reviewed database structure, identified inefficiencies, and made recommendations for schema improvements to enhance the performance and scalability.</li>
              <li>Guided a multidisciplinary team in the development of a complex system, exceeding client expectations and delivering a solution that was displayed to potential buyers.</li>
            </ul>
          </div>

          <div id="Contact">
            <h2 className="Heading">Contact</h2>
            <div className="Contact">
              <div className="ContactItems">
                <div className="ContactItem">
                  <p>Phone:</p>
                  <p>0434880877</p>
                </div>
                <div className="ContactItem">
                  <p>Email:</p>
                  <p>tseparovich@gmail.com</p>
                </div>
                <div className="ContactItem">
                  <p>Linkedin:</p>
                  <p>www.linkedin.com/in/tseparovich</p>
                </div>
                <div className="ContactItem">
                  <p>Github:</p>
                  <p>github.com/TomSeparovich</p>
                </div>
              </div>
              <img src="images/Image.jpg" alt="Thomas Separovich Faceshot" className="AboutImage" />
            </div>
            
          </div>
        </div>
    </main>
  );
}
