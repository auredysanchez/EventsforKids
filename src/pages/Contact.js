import React from "react";
import './Contact.scss';


function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        <a className="mailto" href="auredysanchez@pursuit.org">
          Auredy Sanchez - email
        </a>
        {/* <Button
          onClick={() => Linking.openURL("mailto:auredysanchez@pursuit.org")}
          title="auredysanchez@pursuit.org"
        /> */}
      </p>
    </div>
  );
}

export default Contact;
