import React, { useState } from "react";

function Footer(props) {

    const [isActive, setActive] = useState("false");

    const toggleClass = () => {
         setActive(!isActive);
         setTimeout(() => setActive("true"),2000)
    }

  return (
    <div onClick={toggleClass} className={isActive ? "footer" : "footer__hidden"}>
            <div onClick={toggleClass} className="date">
                <h1>It is {props.date.toDateString()}</h1>
            </div>
    </div> 
  )
  
  
}

export default Footer;