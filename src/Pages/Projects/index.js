import React from 'react';
import ProjectCard from '../../components/ProjectCards';

const projects = [
    {
        key:1,
        projectName:"nsmes",
        projectDescription:"some description",
        // projectImage:,
    }
]

export default function Projects() {
  return (<>
   <h2> Works</h2>
 {projects.map(project => (
    <ProjectCard {...project}/>
 ))}
  </>
  );
 

}
