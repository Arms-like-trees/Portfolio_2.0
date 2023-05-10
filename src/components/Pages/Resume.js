import React from 'react';
import TestResume from '../../images/Test-resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>Download my <a href={TestResume} >resume</a></p>
      <h2>Front-end Proficiences</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-end Proficiences</h2>
      <ul>
        <li>API's</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL Sequelize</li>
        <li>ReactMongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>

    </div>
  );
}
