import React from "react";
import './Contact.scss';


const Contact = () => {



  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        Auredy Sanchez - {' '}
        <a href="mailto:auredysanchez@pursuit.org">
          auredysanchez@pursuit.org
        </a>
        {/* <a className="mailto" href="auredysanchez@pursuit.org">
          Auredy Sanchez - auredysanchez@pursuit.org
        </a> */}
        {/* <Button
          onClick={() => Linking.openURL("mailto:auredysanchez@pursuit.org")}
          title="auredysanchez@pursuit.org"
        /> */}
      </p>
    </div>
  );
}

export default Contact;
