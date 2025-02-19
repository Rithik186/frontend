import React from "react";
import "./AboutUs.css";

const teamMembers = [
  {
    name: "Rithik Kannaa K",
    role: "Founder & CEO",
    image: "https://www.pngall.com/wp-content/uploads/13/Andrew-Tate-PNG-HD-Image.png", // Replace with actual image URL
  },
  {
    name: "Prabhat Bhunya G",
    role: "Blockchain Developer",
    image: "https://www.boomlive.in/h-upload/uid/56996DOnbE10abQYYtwz60aLJowK9wWdBbEep1392090.jpg", // Replace with actual image URL
  },
  {
    name: "Sanjayan V aka CJ",
    role: "UI/UX Designer",
    image: "https://www.giantbomb.com/a/uploads/square_medium/46/462814/3222927-6826564307-latest.jpg", // Replace with actual image URL
  },


  {
    name: "prabhu siddarth",
    role: "...",
    image: "", // Replace with actual image URL
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>We are a team dedicated to connecting farmers and consumers through blockchain technology.</p>

      <div className="team">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="profile-pic" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
