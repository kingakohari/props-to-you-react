import React from "react";

function Footer(props) {

    let isActive = false

    const toggleClass = () => {
        
        if (isActive === false) {
            isActive = true
            setTimeout(() => {isActive = false},2000)
            console.log(isActive)
        }      
         
    }

  return (
    <div onClick={toggleClass}>{isActive}</div> 
  )
  
  
}

export default Footer;