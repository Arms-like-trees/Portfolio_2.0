import React from 'react';
import './Styles/projectCard.css'


const styles = {
  card: {
    // background: 'red',
    margin: '1rem'
  },
  img: {
    width: '300px'
  },
  textbox: {
    position: 'absolute',
    top: '0'
  
  },
  anchor: {
    position: 'relative',
    top: '0',
    margin: '1rem'
  }
}

// we are pulling data from the Pages folder file Projects
export default function ProjectCard(props) {
  console.log(props)
  return (
   <div>
   <a style={styles.anchor} href={props.projectSite}>
    <img className='text' style={styles.img} src={props.projectImage} alt={props.projectAlt}/>
    <div className='tb' style={styles.textbox}>
      <h3>{props.projectName}</h3>
        <p>{props.projectDescription}</p>
   </div>
   </a>
   
      
   </div>
  );
}
