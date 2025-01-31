import React from 'react';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills That Shine</h1>
      <p className="skills-description">
        Unleashing the world-changing powers of programming, graphic designing, and web development. With the best education from Learnio Academy, I’ve honed my craft to make digital experiences amazing!
      </p>
      
      <div className="skills-list">
        <div className="skill-box">
          <h2>HTML, CSS, JavaScript</h2>
          <p>
            Mastering the building blocks of the web, HTML for structure, CSS for style, and JavaScript for interactivity. With a focus on creating responsive and accessible web pages, I ensure that every experience is seamless and dynamic.
          </p>
        </div>

        <div className="skill-box">
          <h2>React & Node.js</h2>
          <p>
            Proficient in using React for building user interfaces and Node.js for developing scalable back-end applications. I specialize in creating full-stack applications with a smooth user experience and optimized performance.
          </p>
        </div>

        <div className="skill-box">
          <h2>Graphic Design</h2>
          <p>
            Designing visually compelling graphics that capture the essence of a brand. With expertise in tools like Adobe Illustrator and Photoshop, I create logos, illustrations, and other assets that elevate a brand's visual identity.
          </p>
        </div>

        <div className="skill-box">
          <h2>UI/UX Design</h2>
          <p>
            Crafting intuitive and engaging user interfaces that prioritize user experience. My design process involves thorough research and prototyping to ensure every interaction is easy, enjoyable, and effective.
          </p>
        </div>

        <div className="skill-box">
          <h2>Branding & Marketing</h2>
          <p>
            Helping businesses establish a strong brand identity and create marketing strategies that resonate with their target audience. From logo design to social media campaigns, I ensure every element works together to boost brand visibility and engagement.
          </p>
        </div>

        {/* Personal Life Skills Section */}
        <div className="personal-life-skills-box">
          <h2>Personal Life Skills</h2>
          <p>
            In addition to my technical skills, I also have hands-on expertise in practical areas that empower me to take on diverse challenges. These include solar installations, electrical tubing, and floor tiling. I enjoy learning new trades and applying these skills to everyday life.
          </p>
          <ul>
            <li>Solar Installations</li>
            <li>Electrical Tubing</li>
            <li>Floor Tiling</li>
            <li>DIY Repairs & Troubleshooting</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Skills;
