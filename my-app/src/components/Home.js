import React from "react";
import {Container} from "react-bootstrap"




function Home() {
  return(
    
        <Container className="style" style={{textAlign: "center"}} >
          
        <h2>Welcome!</h2>
        <p>My name is Bryon Ball I am an juinor fullstack web developer, MSU Full Stack bootcamp candidate, I love learning and starting new challenges. Welcome to my site.
        </p>
        <br></br>
        <div>
        
        {/* <img style={{  width:"30%", height: "auto", borderRadius:"50% 50% 0% 50%"}} src={} alt="bryon ball"/> */}
        <br></br>
        
        </div>
        <br></br>
        
        <h3>About me</h3>
        <p>I am currently in MSU bootcamp blah blah blah.....   meh  ........
        I have lived in Michigan for 14 years, I am driven to constantly learn, grow, and hone myself into the best version of myself I can be.</p>

        </Container>
  );
}

export default Home;