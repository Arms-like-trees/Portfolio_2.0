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
              Howdy.  My name is Christopher Newell, but I go by CJ.  I am fortunate to have been born and raised in the great state of Texas, while looking forward to raising my family here as well.  I love playing games, both board games and video games, particularly ones that involve strategey, exploration, and a bit of luck.
            </p>
            <p>
              I am ambtious and love tackling problems so that I can learn something new.  I am driven to problem solve by figuring out how something works and then push it to the limits while increasing the proficiency.
            </p>
            <p>
              
            </p>
          </div>

        </div>
      </div>

    </>

  );
}
