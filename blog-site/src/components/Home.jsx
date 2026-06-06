import React from "react";
import Article from "./Article";

function Home({ posts }) {
  /* 
    LOGIC: 
    1. This component receives an array of post objects via 'posts' prop.
    2. We use .map() to transform each post object into an <Article /> component.
    3. A unique 'key' is required for React's reconciliation process.
    4. This component is a child of App.jsx and a parent to Article.jsx.
  */
  return (
    <main>
      {posts.map((post) => (
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
        />
      ))}
    </main>
  );
}

export default Home;