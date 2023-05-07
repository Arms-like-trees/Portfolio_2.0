import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


export default function Footer() {
  return (
    <div className='bg-success'>
      <footer>
<Row>
  <Col>
  <div>
    <a href='https://github.com/Arms-like-trees'><img src='/images/icons-github.png' alt='Github logo'/></a>
    <a href='https://www.linkedin.com/in/christopher-newell-3322b826b/'><img src='/images/icons-linkedin.png' alt='Linkedin logo'/></a>
  </div>
  </Col>
  <p>Social media icons sourced through icons8.  See what else they have in store <a href="https://icons8.com/">here!</a></p>
</Row>

      </footer>
      
    </div>
  );
}
