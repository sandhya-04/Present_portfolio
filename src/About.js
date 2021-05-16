import {React} from "react";
import sandy from "./sandy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";


export function About(){
    return (
        <div className="sandhya" id="san1">
            <img  className="san3"
            src={sandy} alt="sandy" height="300" width="300"/>

            <div className="main">
                <code><h1><b>Sandhya Singh Chaudhary</b></h1></code></div>
                
                <div className="main1">
                    <p className="main2"><i><h3>Incoming SDE at Deutsche Bank</h3></i></p>
                    <p className="main2"><i><h3>Ex-SDE Intern at Morgan Stanley</h3></i></p>
                    <p className="main2"><i><h3>Additional Secretary at CSEA NITW</h3></i></p>                    
                    </div> 
                   
                    <div class="social-container">
      
      <a href="https://www.facebook.com/Sandhya Singh/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.instagram.com/sansin_04"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<a href="https://twitter.com/Sandhya96923018" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.linkedin.com/in/singhsandhya130197?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmHl48u6ESMaPqOV5Ctt2PQ%3D%3D" className="linkedin social">
<FontAwesomeIcon icon={faLinkedinIn} size="2x" />

</a>

    </div>
                    
        </div>
        
    );
}
