import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import GitIcon from '../images/icons-github.png';
import LinkedIcon from '../images/icons-linkedin.png';

export default function Footer() {
  return (
    <div className='bg-success'>
      <footer>
<Row>
  <Col>
  <div>
    <a href='https://github.com/Arms-like-trees'><img src={GitIcon} alt='Github logo'/></a>
    <a href='https://www.linkedin.com/in/christopher-newell-3322b826b/'><img src={LinkedIcon} alt='Linkedin logo'/></a>
  </div>
  </Col>
  <p>Social media icons sourced through icons8.  See what else they have in store <a href="https://icons8.com/">here!</a></p>
</Row>

      </footer>
      
    </div>
  );
}
