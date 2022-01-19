import React from "react";
import me from "./my-app/src/pages/Home/bryonpic.jpeg";
import "./style.css"
import "../../index.css"

function Home() {
  return(
    
        <div className="style" style={{textAlign: "center"}} >
          
        <h2>Welcome!</h2>
        <p>My name is Bryon Ball I am an juinor fullstack web developer, MSU Full Stack bootcamp candidate, I love learning and starting new challenges. Welcome to my site.
        </p>
        <br></br>
        <div>
        
        <img style={{  width:"30%", height: "auto", borderRadius:"50% 50% 0% 50%"}} src={me} alt="bryon ball"/>
        <br></br>
        
        </div>
        <br></br>
        
        <h3>About me</h3>
        <p>I am an aspiring fullstack web developer and once I am finished with my fullstack training I plan to pursue software development as next career endeavor.
        I have lived in Michigan for 14 years, I am driven to constantly learn, grow, and hone myself into the best version of myself I can be.</p>

        </div>
  );
}

export default Home;