import React from 'react';
import '../assets/styles/Footerlogoandtext.css';
function Footerlogoandtext({ Icon, text }) {
  return (
    <div className="footerlogoandtext">
      <Icon />
      <p>{text}</p>
    </div>
  );
}

export default Footerlogoandtext;
