import React from 'react';
import ProjectCard from '../../components/ProjectCard';
// import LetterDrop from '../SkillDrop';
import PasswordGenerator from '../../images/Password-generator.png';
import WeatherDashboard from '../../images/weather-dashboard.png';
import firstPortfolio from '../../images/first-portfolio.png';
import JSQuiz from '../../images/startscreenshot.png';
import Typewriter from  '../../images/typewriter.png';
import ComingSoon from '../../images/placeholder.jpeg'


const projects = [
    {
        key:1,
        projectName:"Password Generator",
        projectDescription:"A site where you can generate a secure password quickly utilizing JavaScript",
        projectImage:PasswordGenerator,
        projectAlt:"Password Generator screenshot",
        projectSite:"https://arms-like-trees.github.io/challenge-module-3/",
        // projectRepo: ""
    },
    {
      key:2,
      projectName:"Weather dashbord",
      projectDescription:"A site where you can generate the current weather as well as the next 5-day forecast using API call to ",
      projectImage:WeatherDashboard,
      projectAlt:"Weather dashboard display",
      projectSite:"https://arms-like-trees.github.io/Challenge-6-Weather-Dashboard/"
  },
  {
    key:3,
    projectName:"First portfolio",
    projectDescription:"My first portfolio that I created only using html and css",
    projectImage:firstPortfolio,
    projectAlt:"View of first created portfolio",
    projectSite:"https://arms-like-trees.github.io/Portfolio/"
},
{
  key:4,
  projectName:"Quiz game using Javascript",
  projectDescription:"A sinple game quiz using Javascript",
  projectImage:JSQuiz,
  projectAlt:"Start screen of Javascrip minigame quiz",
  projectSite:"https://arms-like-trees.github.io/Challenge-4/"
},
{
  key:5,
  projectName:"README generator",
  projectDescription:"Command-line application that utilizes node.js to create a README",
  projectImage:Typewriter,
  projectAlt:"Typewriter",
  projectSite:"https://github.com/Arms-like-trees/Challenge_9_Node.js_Proffessional_README_Generator"
},
{
  key:6,
  projectName:"Coming soon",
  projectDescription:"To be determined",
  projectImage:ComingSoon,
  projectAlt:"Coming Soon",
  projectSite:"https://github.com/Arms-like-trees"
},
];

const styles ={
  portfolio: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '1rem',
    margin: '1rem'
  }, 
  
}

export default function Projects() {
  return (<>
   <h2> Works</h2>
   {/* <LetterDrop/> */}
    {/*In this div below is where Ill put the className to make the works into a grid as well as anybackground I would like to encompass behind the works */}
   <div style={styles.portfolio} >
    {projects.map(project => (
    <ProjectCard {...project}/>
 ))}
   </div>
 
  </>
  );
 

}
