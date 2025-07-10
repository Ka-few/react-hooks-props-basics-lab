import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {github && <p><a href={github}>{github}</a></p>}
      {linkedin && <p><a href={linkedin}>{linkedin}</a></p>}
    </div>
  );
}

export default Links;
