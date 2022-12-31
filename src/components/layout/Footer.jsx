 

import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Wala</h2>

        <p>The deliciousness of the burger jumping into your mouth.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All rights reserved @burgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

   
        <a href="http://github.com/hiteshpal267">
                 <AiFillGithub /> 
       </a>
      </aside>
    </footer>
  );
};

export default Footer;