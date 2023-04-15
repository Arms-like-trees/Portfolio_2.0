import React from 'react';

// we are pulling data from the Projects folder file index
export default function ProjectCard(props) {
  return (
   <>
        <h3>{props.projectName}</h3>
        <p>{props.projectDescription}</p>
   </>
  );
}
