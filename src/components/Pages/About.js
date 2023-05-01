import React from 'react';
import '../Styles/about.css'

export default function About() {
  return (
    <>
      <div>
        <h2>About Me</h2>
        <div className='row '>
          
          <div className='col-md-6 about-section'>
            <img src='/images/ProfilePic.jpg' alt='Profile pic' />
          </div>
          <div className='col-md-6'>
            <p >
              Howdy.  My name is Christopher Newell, but I go by CJ.  I come from the great state of Texas.  I am ambtious and love tackling problems so that I can be challenged and learn something new.  I am driven to problem solve by figuring out how something works and then push it to the limits.
            </p>
          </div>

        </div>
      </div>

    </>

  );
}
