import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import NavTabs from './NavTabs';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';



export default function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);



     return <>

   <Header/>
  

 <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
  
      {renderPage()}

  <Footer/>
  </>
 
};
