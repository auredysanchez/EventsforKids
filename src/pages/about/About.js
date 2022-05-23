import React from "react";
import "./About.scss";
// import menuItemData from "../../data/menuItemData.json";

const About = () => {
  return (
    <div className="about">
      <div>
        <img
          className="about__image"
          src="https://i.pinimg.com/originals/37/14/ab/3714abc2314976105a2f5f5246d19fb5.jpg"
          alt="momAndDaughterImg"
        />
      </div>
      {/* <h1>About</h1> */}
      <p>
        I am a solutions-oriented full stack web developer, passionate about
        building products that solve real-world problems. My background in
        customer service has given me strong communication skills and a penchant
        for helping people, and has shown me firsthand the importance of
        creating platforms and systems that take into account customer needs. My
        projects pull from best practices in UI/UX and accessibility research to
        keep the user front and center and enable easy navigation. I thrive in
        work environments that have clear processes and where employees take
        ownership and pride in their work. Born in the Dominican Republic and
        raised in NYC, and having spent 4 years in local government, I am
        particularly interested in projects that aim to improve city services or
        public education for New Yorkers.
      </p>

      <p></p>
    </div>
  );
}

export default About;
