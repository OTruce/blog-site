import React from "react";

function Links() {
  /* 
    LOGIC:
    1. This is a static component providing external navigation.
    2. It demonstrates how to separate UI concerns like navigation from content.
  */
  return (
    <nav>
      <h4>Quick Links</h4>
      <ul>
        <li><a href="https://github.com">GitHub</a></li>
        <li><a href="https://react.dev">React Docs</a></li>
      </ul>
    </nav>
  );
}

export default Links;