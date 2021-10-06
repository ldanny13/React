import React from 'react'

function Footer(){

  const year = () => {
        let d = new Date();
        return d.getFullYear();
  }

    return(
        <footer className="clearfix mt-4 footer">
        <p>
          &copy; {year()} 
          <a href="https://github.com" rel="noopener noreferrer" target="_blank"> ~ dl13 </a>
        </p>
      </footer>
    )   
}

export default Footer