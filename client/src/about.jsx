
import React from 'react';
import Pdf from '../src/assets/biancasalunga_resume.pdf';
import myPhoto from '../src/assets/bianca_photo.jpeg';

const About = () => (
    <div className='home-section'>
    <h2 className='h2-section'>About Me.</h2>
    <img className="profile-image" src={myPhoto} alt="My photo" />
    <p>Hello! My name is Bianca, and I'm a seasoned Software QA Engineer with over a decade of experience in ensuring software quality. I'm currently pursuing a Software Engineering Technician diploma at Centennial College to further enhance my technical skills and broaden my knowledge in the field.</p>
    <p>
    Throughout my career, I've honed my abilities in various testing methodologies, including functional testing, regression testing, and performance testing. I'm passionate about delivering high-quality software that meets user expectations and exceeds industry standards.
    </p>
    <p>
    Beyond my technical expertise, I'm a strong advocate for collaboration and effective communication. I thrive in team-oriented environments and believe that open dialogue is essential for successful software development.
    </p>
    <p>
    In my free time, I enjoy staying up-to-date with the latest tech trends, contributing to open-source projects, and exploring new programming languages and frameworks. I'm excited to apply my skills and knowledge to create innovative software solutions that make a positive impact.
    </p>
    <p>
    With a passion for technology and problem-solving, I am excited to delve into the world of software development and engineering. Throughout my studies, I have gained a solid foundation in various programming languages, software engineering methodologies, and design principles. I am particularly interested in developing user-friendly applications that enhance everyday experiences. My coursework has equipped me with practical skills in programming, database management, and web development, allowing me to tackle real-world challenges effectively.</p>
    <p>
    I thrive in collaborative environments where I can share ideas and learn from others. I believe that teamwork and communication are key to successful project outcomes. In addition to my technical skills, I am committed to continuous learning and staying updated with the latest industry trends.In my free time, I enjoy working on personal coding projects, contributing to open-source initiatives, and exploring new technologies. I am eager to apply my skills in a professional setting and contribute to innovative software solutions that make a difference.</p>
    <p>
        Thank you for visiting my portfolio! I look forward to connecting with fellow tech enthusiasts and exploring exciting opportunities in the software engineering field.
    </p>

    {/* <a href="../src/assets/biancasalunga_resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a> */}
    <a href = {Pdf} target = "_blank">Download My Resume</a>
    </div>
);
    
    export default About;