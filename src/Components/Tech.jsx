import React from 'react';
import './Tech.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaJava, FaGithub, FaDatabase, FaDocker, FaFigma } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiGo, SiCplusplus, SiCashapp , SiTailwindcss, SiSpring, SiMysql, SiAdobephotoshop, SiAdobexd} from "react-icons/si"; // Import your CSS file
import { TbBrandCSharp } from "react-icons/tb";
import { SiAdobeillustrator } from "react-icons/si";


const Tech = () => {
  return (
    <div className="tech-grid">
      <FaReact className="icon react" title="React" />
      <FaHtml5 className="icon html" title="HTML5" />
      <FaCss3Alt className="icon css" title="CSS3" />
      <FaJs className="icon js" title="JavaScript" />
      <FaNodeJs className="icon node" title="Node.js" />
      <FaPython className="icon python" title="Python" />
      <FaJava className="icon java" title="Java" />
      <FaGithub className="icon github" title="GitHub" />
      <SiTypescript className="icon ts" title="TypeScript" />
      <SiTailwindcss className="icon cpp" title="C++" />
      <SiSpring className="icon go" title="Golang" />
      <SiMysql className="icon mongodb" title="MongoDB" />
      <TbBrandCSharp className="icon docker" title="Docker" />
      <SiAdobeillustrator className="icon ai" title="Docker" />
      <SiAdobephotoshop className="icon ps" title="Docker" />
      <SiAdobexd className="icon xd" title="Docker" />
      <FaFigma className="icon figma" title="Docker" />
    </div>
  );
};

export default Tech;
